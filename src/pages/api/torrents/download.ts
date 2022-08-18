import { NextApiRequest, NextApiResponse } from "next";
import TorrentSearchApi, { Torrent } from "torrent-search-api";

export type TDownloadBody = {
  torrent: Torrent;
  path?: string;
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: TDownloadBody = req.body;
  const { torrent, path } = body;
  const results = await TorrentSearchApi.downloadTorrent(torrent, path);
  res.status(200).json({ results });
};
export default handler;
