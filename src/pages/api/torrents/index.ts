import { NextApiRequest, NextApiResponse } from "next";
import TorrentSearchApi from "torrent-search-api";
import type { TProviderKey } from "../../../config/constants";

export type TTorrentsBody = {
  provider: TProviderKey;
  search: string;
  category: string;
  limit: number;
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: TTorrentsBody = req.body;
  const { provider, search, category, limit } = body;
  await TorrentSearchApi.enableProvider(provider);
  const results = await TorrentSearchApi.search(search, category, limit);
  res.status(200).json({ results });
};
export default handler;
