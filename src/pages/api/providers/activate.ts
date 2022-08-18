import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import TorrentSearchApi from "torrent-search-api";
export type TActivateBody = {
  provider: string;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const body: TActivateBody = req.body;
  const { provider } = body;
  await TorrentSearchApi.enableProvider(
    provider
  );
  const results =
    await TorrentSearchApi.getActiveProviders();
  res.status(200).json({ results });
};
export default handler;
