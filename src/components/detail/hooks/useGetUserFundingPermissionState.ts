import { User } from "../../../lib/api/core/types";
import { getAgeInFull } from "../../../lib/utils";

function useGetUserFundingPermissionState() {
    return (user: User, performanceAgeLimit: number) => {
        if (user && user.phone_varified) {
            const {
                userprofile_info: { birthdate },
            } = user;
            const userAge = getAgeInFull(birthdate);

            if (userAge >= performanceAgeLimit) {
                return "PERMITTED";
            } else {
                return "LIMITED_AGE";
            }
        } else if (user && !user.phone_varified) {
            return "NOT_VARIFIED";
        } else {
            return "NOT_LOGINED";
        }
    };
}

export default useGetUserFundingPermissionState;
