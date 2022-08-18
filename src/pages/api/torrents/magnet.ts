import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import TorrentSearchApi, {
  Torrent,
} from "torrent-search-api";

export type TMagnetBody = {
  torrent: Torrent;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const body: TMagnetBody = req.body;
  const torrent = body.torrent;
  const results =
    await TorrentSearchApi.getMagnet(
      torrent
    );
  res.status(200).json({ results });
};
export default handler;
