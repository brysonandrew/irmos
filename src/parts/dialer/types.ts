export type TResultFromToMessage = {
  from: string;
  to: string;
};
export type TResultFromToErrors = Record<
  keyof TResultFromToMessage,
  string[]
>;
export type TResultMessage =
  TResultFromToMessage & {
    errors: TResultFromToErrors;
  };
export type TDialerResult = {
  message?: string;
  code?: number;
  message_data?: TResultMessage[];
  action?: {
    type: string; // "swSdk/executeRequest";
    payload: {
      requestId: string; //"2ff871d3-2094-46ab-9eac-0440d8d81578";
      componentId: string; //"79a6f3b0-ca6b-41ec-9ec3-6e12d2686df6";
      method: string; //"calling.dial";
      params: {
        tag: string; //"79a6f3b0-ca6b-41ec-9ec3-6e12d2686df6";
        devices: [
          [
            {
              type: string; //"phone";
              params: {
                timeout: number; //30;
                to_number: string; //"+12057083994";
                from_number: string; //"+12067045232";
              };
            }
          ]
        ];
      };
    };
  };
  jsonrpc?: {
    message_data: [
      {
        from: string; //"+12067045232";
        to: string; //"+12057083994";
        errors: {
          from: [
            string //"number is temporarily restricted due to recent activity."
          ];
        };
      }
    ];
    code: string; //"400";
    message: string; //"No valid devices";
  };
};
