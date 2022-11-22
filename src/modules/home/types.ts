import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { GetHomeFundingsResponse } from "../../lib/api/home/type";

export type HomeState = {
    fundings: {
        loading: boolean;
        data: GetHomeFundingsResponse | null;
        error: any;
    };
};

export type HomeAction = ActionType<typeof actions>;
