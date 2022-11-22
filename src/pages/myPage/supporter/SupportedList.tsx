import { useEffect, useState } from "react";
import Loader from "../../../components/common/Loader";
import PageTemplate from "../../../components/global/PageTemplate";
import {
    MyPageHeading1,
    MyPageMainContainer,
} from "../../../components/myPage/MyPageStyles";
import SupportedListFundings from "../../../components/myPage/supporter/SupportedListFundings";
import SupportedListViewOption from "../../../components/myPage/supporter/SupportedListViewOption";
import useSupportedFundings from "../hooks/useSupportedFundings";

export type SupportedListProp = {};

export type ViewOption =
    | "all"
    | "payment_scheduled"
    | "payment_schedule_cancelled"
    | "payment_completed"
    | "payment_fail"
    | "payment_refund";

function SupportedList(props: SupportedListProp) {
    const [viewOption, setViewOption] = useState<ViewOption>("all");
    const { supportedFundings, loadSupportedFundings, loading } =
        useSupportedFundings();

    useEffect(() => {
        loadSupportedFundings();
    }, []);

    if (loading)
        return (
            <PageTemplate>
                <Loader.Container>
                    <Loader />
                </Loader.Container>
            </PageTemplate>
        );

    return (
        <PageTemplate>
            <MyPageMainContainer>
                <MyPageHeading1>예매 공연</MyPageHeading1>
                <SupportedListViewOption setViewOption={setViewOption} />
                <SupportedListFundings
                    supportedFundings={supportedFundings}
                    viewOption={viewOption}
                />
            </MyPageMainContainer>
        </PageTemplate>
    );
}

export default SupportedList;
