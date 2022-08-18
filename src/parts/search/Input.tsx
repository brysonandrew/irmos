import {
  ChangeEvent,
  KeyboardEventHandler,
  useRef,
} from "react";
import { TTorrentsBody } from "../../pages/api/torrents";
import { useContext } from "../../state/Context";
import { TextSm } from "../../text/TextSm";
import { Text } from "../inputs/Text";
import { useTorrents } from "./useTorrents";

export const Input = () => {
  const {
    ready,
    search,
    provider,
    category,
    limit,
    dispatch,
    results,
  } = useContext();
  console.log(results)
  const resultsCount = results.length;
  const options: TTorrentsBody = {
    provider,
    category,
    limit,
    search,
  };
  const optionsRef =
    useRef<TTorrentsBody>(options);
  optionsRef.current = options;
  const init = useTorrents();

  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (e.key === "Enter") {
      init(optionsRef.current);
    }
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: "search",
      value: event.currentTarget.value,
    });
  };
  return (
    <div className="relative flex justify-end items-end p-0 nm-convex-black-200-xl w-full z-0">
      <Text
        onKeyDown={handleKeyDown}
        disabled={ready && !provider}
        placeholder={
          ready ? "Search" : ""
        }
        value={
          ready && search ? search : ""
        }
        onChange={handleChange}
      />
      {ready && results.length > 0 && (
        <TextSm className="p-4 whitespace-nowrap">
          {`${resultsCount} results`}
        </TextSm>
      )}
    </div>
  );
};
