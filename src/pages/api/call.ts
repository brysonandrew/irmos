import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Voice } from "@signalwire/realtime-api";

export type TActivateBody = {
  provider: string;
};
const handler = async (
  _: NextApiRequest,
  res: NextApiResponse
) => {
  const client = new Voice.Client({
    project:
      process.env.SIGNAL_PROJECT_ID,
    token: process.env.SIGNAL_TOKEN,
    contexts: ["office"],
  });
  try {
    const result =
      await client.dialPhone({
        from: process.env
          .SIGNAL_SOURCE_NUMBER,
        to: process.env
          .SIGNAL_TWILIO_NUMBER,
        timeout: 30,
      });
    console.log(
      "await client.dialPhone - result"
    );
    console.dir(result);
    res.status(200).json(result);
  } catch (result) {
    res.status(500).json(result);
  }
};

export default handler;
