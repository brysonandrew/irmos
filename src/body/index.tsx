import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Layout } from "../parts/layout";
import { useContext } from "../state/Context";

const Dialer = styled(motion.div)``;

const Button = styled(motion.button)``;

export const Body = () => {
  const { style } = useContext();

  const handleCall = async () => {
    try {
      const response =
        await window.fetch(
          "/api/call",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
          }
        );
      console.log(response);
      const result =
        await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Dialer
        className="p-10"
        initial={false}
        animate={{
          ...style.FlatSunken,
          ...style.text,
        }}
      >
        <Button
          className="p-10"
          initial={false}
          whileHover={{
            ...style.EmptyFlatRisen,
            ...style.emptyText,
          }}
          animate={{
            ...style.FlatRisen,
            ...style.text,
          }}
          onTap={handleCall}
        >
          Call
        </Button>
      </Dialer>
    </Layout>
  );
};
