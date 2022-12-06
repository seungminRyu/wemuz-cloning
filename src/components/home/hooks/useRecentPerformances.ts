import { fetchRecentPerformances } from "../../../lib/api/home/api";
import useAsync from "../../../lib/hooks/useAsync";
import { handleAxiosError } from "../../../lib/utils";

function useRecentPerformances() {
    const [recentPerformances, refetch] = useAsync({
        callback: getRecentPerformances,
    });

    async function getRecentPerformances(page?: number) {
        return await fetchRecentPerformances({ page })
            .then((res) => {
                const { count, next, previous, results } = res;
                const items = results.map((aPerformance) => ({
                    id: aPerformance.id,
                    performanceId: aPerformance.funding_performance,
                    thumbnail: aPerformance.performance_video_thumbnail,
                    title: aPerformance.performance_title,
                    video: aPerformance.performance_video_url,
                }));

                return {
                    pagination: {
                        count,
                        next,
                        prev: previous,
                    },
                    items,
                };
            })
            .catch((err) => {
                handleAxiosError(err);
            });
    }

    return {
        recentPerformances: recentPerformances.data,
        loading: !recentPerformances.data || recentPerformances.loading,
        error: recentPerformances.error,
        refetch,
    };
}

export default useRecentPerformances;
