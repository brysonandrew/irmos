import type { FC } from "react";

type TProps = {
  title: string;
  value: string;
};
export const Item: FC<TProps> = ({
  title,
  value,
}) => {
  return (
    <div>
      <li>{`${title} ${value}`}</li>
    </div>
  );
};
