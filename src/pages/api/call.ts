import {
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Voice } from "@signalwire/realtime-api";

export type TActivateBody = {
  provider: string;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log(process.env);
  console.log(req.body);

  const client = new Voice.Client({
    project:
      process.env.SIGNAL_PROJECT_ID,
    token: process.env.SIGNAL_TOKEN,
    contexts: ["office"],
  });
  const handleCall = async () => {
    // client.on('call.received', async (call) => {
    //   console.log('Call received:', call.id, call.from, call.to)

    //   try {
    //     await call.answer()
    //     console.log('Inbound call answered')
    //   } catch (error) {
    //     console.error('Error answering inbound call', error)
    //   }
    // })
    try {
      const call =
        await client.dialPhone({
          from: process.env
            .SIGNAL_SOURCE_NUMBER,
          to: process.env
            .SIGNAL_TWILIO_NUMBER,
          timeout: 30,
        });
      console.log(call);

      console.log(
        "The call has been answered!",
        call.id
      );
      return call;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const result = await handleCall();
  res
    .status(200)
    .json({ result, client });
};

export default handler;
