import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import TorrentSearchApi, {
  Torrent,
} from "torrent-search-api";
export type TDetailBody = {
  torrent: Torrent;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const body: TDetailBody =
    req.body;
  const torrent = body.torrent;
  const results =
    await TorrentSearchApi.getTorrentDetails(
      torrent
    );
  res.status(200).json({ results });
};
export default handler;
