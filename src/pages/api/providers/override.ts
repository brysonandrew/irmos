import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import TorrentSearchApi from "torrent-search-api";
import { TProviderKey } from "../../../config/constants";
export type TOverrideBody = {
  provider: TProviderKey;
  config: string;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const body: TOverrideBody = req.body;
  const { provider, config } = body;

  if (provider === "1337x") {
    TorrentSearchApi.overrideConfig(
      provider,
      JSON.parse(config)
    );
    TorrentSearchApi.enableProvider(
      provider
    );
    res.status(200).json("Override");

  } else {
    res.status(200).json("No overrides available");

  }

};
export default handler;
