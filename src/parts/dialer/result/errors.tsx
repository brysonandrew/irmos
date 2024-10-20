import type { FC } from "react";

type TPropsErrors = {
  errors: string[];
};
export const DialerResultErrors: FC<
  TPropsErrors
> = ({ errors }) => {
  return (
    <div>
      {errors && errors.length > 0 && (
        <ul>
          {errors.map(
            (
              errorMessage,
              errorIndex
            ) => (
              <li key={`${errorIndex}`}>
                {errorMessage}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
