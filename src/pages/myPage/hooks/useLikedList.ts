import React, { useEffect, useRef, useState } from "react";
import { fetchLikedFundings } from "../../../lib/api/myPage/api";
import useThrottler from "../../../lib/hooks/useThrottler";
import useToggle from "../../../lib/hooks/useToggle";
import useUserxx from "../../../lib/hooks/useUserxx";
import useWindowScrollEvent from "../../../lib/hooks/useWindowScrollEvent";
import { handleAxiosError, testConsoleLog } from "../../../lib/utils";

export type LikedFundings = Array<{
    id: any;
    title: any;
    start_date: any;
    end_date: any;
    performance_date: any;
    thumbnail: any;
    location: any;
    funding_host_alias: any;
    is_liked: any;
    banner_photo: any;
    main_color_1: any;
    funding_state: any;
    number_of_likes: any;
    remaining_days_by_start_date: any;
    remaining_days_by_end_date: any;
    least_package_price: any;
    is_end: any;
    min_money_amount: any;
    min_number_of_audience: any;
    achievement_criterion: any;
    money_achievement_rate: any;
    audience_achievement_rate: any;
}>;

function useLikedList() {
    const [likedFundings, setLikedFundings] = useState<LikedFundings | null>(
        null
    );
    const [selectedViewOption, setSelectedViewOption] =
        useState<string>("latest");
    const [isLoading, _, setIsLoading] = useToggle(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const nextPage = useRef<number | null>(1);
    const throttler = useThrottler();
    const user = useUserxx();
    const orders = ["latest", "endDate"];
    const ordersMap = {
        latest: "최신 순",
        endDate: "마감 임박 순",
    };

    useEffect(() => {
        loadLikedFundings();
    }, []);

    useWindowScrollEvent(() => {
        throttler(100, () => {
            if (!isLoading && isScrolledOverTriggerPoint()) {
                loadLikedFundings();
            }
        });
    }, [likedFundings, isLoading]);

    const loadLikedFundings = async () => {
        if (!user) return;
        if (!nextPage.current) return;
        setIsLoading(true);

        try {
            const { results, next } = await fetchLikedFundings({
                accessKey: user.accessKey,
                page: nextPage.current,
                order: selectedViewOption === "latest" ? "latest" : "end_date",
            });
            if (nextPage.current === 1) {
                setLikedFundings(results);
            }

            if (nextPage.current > 1 && likedFundings !== null) {
                const nextLikedFundings = likedFundings.concat(results);
                setLikedFundings(nextLikedFundings);
            }

            nextPage.current = next !== null ? nextPage.current + 1 : null;
        } catch (e) {
            handleAxiosError(e);
        }
        setIsLoading(false);
    };

    const refetch = async () => {
        nextPage.current = 1;
        await loadLikedFundings();
    };

    const isScrolledOverTriggerPoint = () => {
        if (!containerRef.current) return;
        // testConsoleLog(
        //     "current",
        //     containerRef.current.scrollHeight - window.scrollY - 100
        // );
        // testConsoleLog("window.innerHeight", window.innerHeight);
        testConsoleLog(
            "triggered",
            containerRef.current.scrollHeight - window.scrollY - 200 <
                window.innerHeight
        );
        return (
            containerRef.current.scrollHeight - window.scrollY - 200 <
            window.innerHeight
        );
    };

    const onOptionsItemClick = async (e: React.MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget.dataset.value as string;
        if (value === selectedViewOption) return;
        setSelectedViewOption(value);
        nextPage.current = 1;
        loadLikedFundings();
    };

    return {
        likedFundings,
        orders,
        ordersMap,
        selectedViewOption,
        onOptionsItemClick,
        containerRef,
        isLoading,
        refetch,
    };
}

export default useLikedList;
