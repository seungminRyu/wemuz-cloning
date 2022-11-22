import { useSelector } from "react-redux";
import { RootState } from "../../modules";

function useUser() {
    const user = useSelector((state: RootState) => state.core.user.data);
    return user ? user : null;
}

export default useUser;
