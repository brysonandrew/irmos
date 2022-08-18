import { TMagnetBody } from "../../../pages/api/torrents/magnet";
import { useContext } from "../../../state/Context";
import { TResult } from "../../../state/type";
import WebTorrent from "webtorrent";

export const useMagnet = (
  client: ReturnType<typeof WebTorrent>
) => {
  const { loading, dispatch, results } =
    useContext();

  return async (
    options: TMagnetBody
  ) => {
    if (
      typeof window === "undefined" ||
      loading.Magnet
    )
      return null;

    dispatch({
      type: "loading",
      value: {
        ...loading,
        Magnet: true,
      },
    });
    try {
      let response = await window.fetch(
        "/api/torrents/magnet",
        {
          method: "POST",
          body: JSON.stringify(options),
          headers: {
            "Content-Type":
              "application/json",
          },
        }
      );

      const { results: magnet } =
        (await response.json()) ?? {};

      console.log(results);

      if (magnet) {
        console.log(magnet);
        console.log("magnet");

        console.log(client);
        client.on("torrent", (...c) =>
          console.log(...c)
        );
        const updateProgress = (
          torrent
        ) => {
          // Record whether or not the torrent has completed
          const done = torrent.done;

          console.log(
            `Downloading '${
              torrent.name
            }': ${Math.round(
              torrent.progress * 100
            )}%`
          );

          if (done) {
            torrent.destroy();
            setTimeout(() => {
              updateProgress(torrent);
            }, 3000);
          }
        };
        client.on("error", console.log);
        client.on(
          "torrent",
          console.log
        );

        client.addListener(
          "torrent",
          console.log
        );
        client.addListener(
          "torrent",
          console.log
        );
        console.log(
          client.downloadSpeed
        );
        console.log(client.progress);

        client.add(
          magnet,
          {
            path: "./",
            destroyStoreOnDestroy:
              false,
            skipVerify: true,
          },
          (torrent) => {
            torrent.on(
              "upload",
              (hash) => {
                console.log(
                  "the upload callback was called"
                );
                console.log(hash);
              }
            );
            torrent.on(
              "download",
              (hash) => {
                console.log(
                  "the download callback was called"
                );
                console.log(hash);
              }
            );
            torrent.on(
              "metadata",
              () => {
                console.log(
                  "the metadata callback was called"
                );
              }
            );

            // Got torrent metadata!
            console.log(torrent);
            console.log(
              "Client is downloading:",
              torrent.infoHash
            );
            updateProgress(torrent);
            torrent.files.forEach(
              function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                file.appendTo("body");
              }
            );
          }
        );

        dispatch({
          type: "results",
          value: results.map(
            (result: TResult) =>
              result.desc ===
              options.torrent.desc
                ? {
                    ...result,
                    magnet,
                  }
                : { ...result }
          ),
        });
      }
      return client;
    } catch (error) {
      console.warn(
        "Something went wrong: useMagnet"
      );
      console.error(error);
    }
  };
};
