import Head from "next/head";
import packageJson from "../../package.json";
import { Provider } from "../state/Provider";
import { Body } from "../body";
import { MotionConfig } from "framer-motion";

const App = () => (
  <Provider>
    <MotionConfig transition={{ ease: "linear", duration: 0.4 }}>
      <Head>
        <title>
          {packageJson.name[0].toUpperCase() + packageJson.name.slice(1)}
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Body />
    </MotionConfig>
  </Provider>
);

export default App;
