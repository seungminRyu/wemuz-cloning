import { fetchRecentPerformDetails } from "../../../lib/api/home/api";
import useAsync from "../../../lib/hooks/useAsync";
import { handleAxiosError } from "../../../lib/utils";

export type RecentPerformDetails = {
    fundingTitle: any;
    achievementRate: any;
    youtubeUrl: any;
    performanceTitle: any;
    performanceDate: any;
    performanceGenre: any;
    host: any;
    hostPerformCount: any;
    hostPhoto: any;
    hostBio: any;
    stage: any;
    stageType: any;
    stageLogo: any;
    stagePerformCount: any;
    stageBio: any;
};

const getRecentPerformDetails = (id: number, other1: number, other2: string) =>
    fetchRecentPerformDetails({ id })
        .then((res) => ({
            fundingTitle: res.funding_title,
            achievementRate: res.achievement_rate,
            youtubeUrl: res.performance_video_url,
            performanceTitle: res.performance_title,
            performanceDate: res.performance_date,
            performanceGenre: res.performance_genre,
            host: res.host_alias,
            hostPerformCount: res.number_of_performance_by_host,
            hostPhoto: res.host_avatar,
            hostBio: res.host_bio,
            stage: res.performance_stage_name,
            stageType: res.stage_type,
            stageLogo: res.stage_logo,
            stagePerformCount: res.number_of_performance_by_stage,
            stageBio: res.stage_introduction,
        }))
        .catch((err) => {
            handleAxiosError(err);
            throw err;
        });

function useRecentPerformDetails() {
    const [recentPerformDetails, loadRecentPerformDetails] = useAsync({
        callback: getRecentPerformDetails,
        skip: true,
    });

    return {
        recentPerformDetails: recentPerformDetails.data,
        loading: recentPerformDetails.loading,
        error: recentPerformDetails.error,
        loadRecentPerformDetails,
    };
}

export default useRecentPerformDetails;
