import { NextApiRequest, NextApiResponse } from "next";
import TorrentSearchApi from "torrent-search-api";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const results = await TorrentSearchApi.getActiveProviders();
  res.status(200).json({ results });
};
export default handler;
