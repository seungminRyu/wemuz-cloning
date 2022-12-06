import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { User } from "../../lib/api/core/types";

export type CoreState = {
    user: {
        loading: boolean;
        data: any | null;
        error: any | null;
        // data: User | null;
        // error: AxiosError | null;
    };
};

export type CoreAction = ActionType<typeof actions>;

export type setUserParamType = {
    user: User;
};
