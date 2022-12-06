import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { formatAccessKey } from "../utils";

function useUserxx() {
    const user = useSelector((state: RootState) => state.core.user.data);

    return user
        ? {
              accessKey: formatAccessKey(user.accessToken),
              name:
                  user.first_name || user.last_name
                      ? user.last_name + user.first_name
                      : `서포터${user.userprofile_info.user}`,
              id: user.id,
              avatar: user.userprofile_info.avatar,
              bio: user.userprofile_info.bio,
              birthdate: user.userprofile_info.birthdate,
              gender: user.userprofile_info.gender,
              email: user.email,
              emailVarified: user.email_varified,
              googleEmail: user.google_email,
              kakaoEmail: user.kakao_email,
              naverEmail: user.naverEmail,
              phone: user.phone,
              phoneVarified: user.phone_varified,
              userStateCode: user.user_status_code,
          }
        : null;
}

export default useUserxx;
