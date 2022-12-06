import { useSelector } from "react-redux";
import { getRemainingDates, parseDateString } from "../../../lib/utils";
import { RootState } from "../../../modules";

function usePurchaseSummary() {
    // const { data, loading } = useSelector(
    //     (state: RootState) => state.purchase.funding
    // );
    // if (data) {
    //     const remainingDates = getRemainingDates(data.end_date);
    //     const dateObj = parseDateString(data.funding_performance_date);
    //     return [
    //         {
    //             thumbnail: data.thumbnail,
    //             title: data.title,
    //             hostAvatar: data.fundinghost_info.introduction_photo,
    //             hostName: data.fundinghost_info.host_name,
    //             amount: data.total_support_amounts,
    //             acheievementRate: data.money_achievement_rate,
    //             remainingDates: remainingDates,
    //             date: `${dateObj.year}.${dateObj.month}.${dateObj.date}(${dateObj.day})`,
    //             placeName: data.performance_stage_name,
    //         },
    //         !data || loading,
    //     ];
    // } else {
    //     return [{}, !data || loading];
    // }
}

export default usePurchaseSummary;
