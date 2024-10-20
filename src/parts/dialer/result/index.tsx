import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { WHITE_BORDER_CSS } from "../../../styles/textures";
import { useContext } from "../../../state/Context";
import { TDialerResult } from "../types";
import { DialerResultErrors } from "./errors";

const Root = styled(motion.div)``;

const Border = styled(motion.div)`
  ${WHITE_BORDER_CSS}
`;

const TextSm = styled.span``;

export const Result = () => {
  const { style, loading, active } =
    useContext();

  const result: TDialerResult | null =
    active.Calling;
  if (!result) return null;
  const {
    code,
    message,
    action,
    jsonrpc,
    message_data,
  } = result;
  console.log(result);

  return (
    <Root
      className="relative flex flex-col items-start p-4 w-full"
      initial={false}
      animate={{
        ...style.FlatSunken,
        ...style.text,
        ...style.common,
      }}
    >
      <Border className="flex flex-col items-center justify-center absolute inset-1.5 border-r-2 opacity-40" />

      <div className="flex gap-2">
        <span>{code}</span>
        <h4>{message}</h4>
      </div>
      <ul className="flex flex-col items-stretch">
        {message_data.map(
          (value, index) => {
            return (
              <li
                key={`${index}-${value.from}`}
                className="bg-red w-full"
              >
                <ul className="flex items-start gap-1 w-full">
                  {(
                    [
                      "from",
                      "to",
                    ] as const
                  ).map((key) => {
                    const errors =
                      value.errors[key];
                    return (
                      <li
                        key={key}
                        className="flex flex-col grow"
                      >
                        <div className="whitespace-nowrap">
                          {`${key}: ${value[key]}`}
                        </div>
                        <DialerResultErrors
                          errors={
                            errors
                          }
                        />
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
        )}
      </ul>
      {action && (
        <ul>
          <li>
            Type: {action.type ?? "-"}
          </li>
        </ul>
      )}
      {jsonrpc && (
        <ul>
          <li>
            Error code: {jsonrpc.code}
          </li>
          <li>
            Reason: {jsonrpc.message}
          </li>
        </ul>
      )}
      {result && (
        <ul>
          <li>
            {JSON.stringify(result)}
          </li>
        </ul>
      )}
    </Root>
  );
};
