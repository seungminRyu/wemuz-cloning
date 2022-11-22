import { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { getAbsolutePosY, getDeviceType } from "../../lib/utils";
import useDetailInfo from "../../pages/detail/hooks/useDetailInfo";
import { SkelElem } from "../common/Skeleton";

export type DetailNavProp = {
    supporterOpen: boolean;
    toggleSupporterOpen: () => void;
};

function DetailNav(props: DetailNavProp) {
    const { supporterOpen, toggleSupporterOpen } = props;
    const {
        detailInfo: { fundingState, fundingAudienceAmount },
        loading,
    } = useDetailInfo();
    const tabItemRefs = useRef<HTMLLIElement[]>([]);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const activateTabItem = (targetSection: string) => {
        document
            .querySelector(".tab-item.--active")
            ?.classList.remove("--active");
        document
            .querySelector(`.tab-item.${targetSection}`)
            ?.classList.add("--active");
    };

    useEffect(() => {
        let topPos: any[] = []; // 섹션 위치
        let sections: any[] = []; // 섹션 구간

        const getCurSection = (curPos: number) => {
            let ret = "";

            sections.forEach((section) => {
                if (curPos > section.start && curPos < section.end) {
                    ret = section.name;
                }
            });

            return ret;
        };

        const observerCallback = (
            entries: IntersectionObserverEntry[],
            observer: any
        ) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                const curPos: number = window.scrollY + window.innerHeight;
                const targetSection: any = getCurSection(curPos);

                if (targetSection !== "") {
                    activateTabItem(targetSection as string);
                }
            });
        };

        // 탭아이템으로 부터 섹션위치 구함
        tabItemRefs.current.forEach((tabItem) => {
            if (tabItem.dataset.target !== "") {
                const targetClass: string | undefined = tabItem.dataset.target;
                const $target: HTMLElement | null = document.querySelector(
                    `.${targetClass}`
                );

                if ($target) {
                    const pos: number = getAbsolutePosY($target);
                    topPos.push(pos);
                }
            }
        });

        // options에 따라 인스턴스 생성
        observerRef.current = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.1],
        });

        // 타겟 요소 관찰 시작
        const targets = document.querySelectorAll(".section:not(.supporter)");
        if (targets) {
            targets.forEach((section) => {
                const _section = section as HTMLElement;
                const sectionStart = getAbsolutePosY(_section);
                const sectionEnd = sectionStart + _section.offsetHeight;
                sections.push({
                    name: _section.dataset.name,
                    start: sectionStart,
                    end: sectionEnd,
                });
                if (observerRef.current) observerRef.current.observe(section);
            });
        }
    }, [supporterOpen]);

    if (loading)
        return (
            <DetailNavSkeleton>
                <SkelElem className="nav" idx={0} />
            </DetailNavSkeleton>
        );

    const tabLabels = (() => {
        let ret = ["아티스트"];
        switch (
            fundingState
            // 후기 섹션이 없으므로 주석처리
            // case "scheduled":
            // case "failed":
            // case "succeeded":
            // case "running":
            // case "cancelled":
            //     return ret.concat(["공간", "공연 정보", "안내사항"]);
            // case "finished":
            //     return ret.concat(["공간", "공연 정보", "안내사항", "후기"]);
            // default:
            //     return [];

            // 서포터 섹션을 사용하지 않으므로 주석처리
            // case "scheduled":
            //     return ret;
            // case "scheduled":
            // case "failed":
            // case "succeeded":
            // case "running":
            //     return ret.concat(["공간", "공연 정보", "안내사항", "서포터"]);
            // case "finished":
            //     return ret.concat([
            //         "공간",
            //         "공연 정보",
            //         "안내사항",
            //         "서포터",
            //         "후기",
            //     ]);
        ) {
        }
        return ret.concat(["공간", "공연 정보", "안내사항"]);
    })();

    const setObserver = (): void => {
        const observedSections: NodeListOf<Element> = document.querySelectorAll(
            ".section:not(.supporter)"
        );
        observedSections.forEach((section) =>
            observerRef.current?.observe(section)
        );
    };

    const removeObserver = (): void => {
        const observedSections: NodeListOf<Element> = document.querySelectorAll(
            ".section:not(.supporter)"
        );
        observedSections.forEach((section) =>
            observerRef.current?.unobserve(section)
        );
    };

    const getClassName = (itemName: string) => {
        switch (itemName) {
            case "아티스트":
                return "host";
            case "공간":
                return "place";
            case "공연 정보":
                return "performance";
            case "안내사항":
                return "notification";
            case "서포터":
                return "supporter";
            default:
                return "";
        }
    };

    const getOffsetDistance = () => {
        const device = getDeviceType();
        switch (device) {
            case "DESKTOP":
                return -60;
            case "TABLET":
                return -130;
            case "MOBILE":
                return -100;
        }
    };

    const moveScrollTo = (targetClass: string | undefined): void => {
        const $targetSection: HTMLElement | null = document.querySelector(
            `.section.${targetClass}`
        );
        if (!$targetSection) return;

        const offsetDistance: number = getOffsetDistance();
        const posTop: number = getAbsolutePosY($targetSection) + offsetDistance;

        window.scrollTo({
            top: posTop,
            behavior: "smooth",
        });
    };

    const onItemClick = (e: any): void => {
        const $targetItem: HTMLLIElement = e.target.closest("li");
        if (!$targetItem) return;

        const targetClass: string | undefined = $targetItem.dataset.target;
        if (targetClass === "supporter" && !supporterOpen) {
            // supportOpen이 false고 서포터 탭 클릭시
            removeObserver();
            toggleSupporterOpen();
        } else if (targetClass !== "supporter" && supporterOpen) {
            // supportOpen이 true고 서포터 외 탭 클릭시
            toggleSupporterOpen();
            setObserver();
        }

        // 렌더링한뒤 바로 실행하면 위치 얻을 수 없기 때문에 이벤트루프로 늦게 실행
        setTimeout(() => moveScrollTo(targetClass), 200);
        activateTabItem(targetClass as string);
    };

    // 스크롤에 따른 탭 활성화 로직
    // const onScroll = () => {
    //     const curPos: number = window.scrollY + window.innerHeight;
    //     const targetSection: string = getCurSection(curPos);
    //     console.log(targetSection);
    //     if (targetSection !== "") {
    //         activateTabItem(targetSection);
    //     }
    // };

    return (
        <Block>
            <Inner>
                <ul onClick={onItemClick}>
                    {tabLabels.map((aTabLabel, i) => (
                        <TabItem
                            key={i}
                            ref={(elem) =>
                                (tabItemRefs.current[i] = elem as HTMLLIElement)
                            }
                            className={`tab-item ${getClassName(aTabLabel)}`}
                            data-target={getClassName(aTabLabel)}
                        >
                            {aTabLabel === "서포터" ? (
                                <span>
                                    {`${aTabLabel} `}
                                    <span className="support-num">
                                        {fundingAudienceAmount}
                                    </span>
                                </span>
                            ) : (
                                aTabLabel
                            )}
                        </TabItem>
                    ))}
                </ul>
            </Inner>
        </Block>
    );
}

const Block = styled.nav`
    grid-area: nav;
    position: sticky;
    top: 81px;
    width: 100%;
    background-color: ${palette.white0};
    border-bottom: 2px solid ${palette.gray5};
    z-index: 1;

    ${media.tablet} {
        top: 138px;
    }

    ${media.mobile} {
        top: 101px;
        border-top: 2px solid ${palette.gray5};
    }
`;

const Inner = styled.div`
    max-width: 1360px;
    box-sizeing: border-box;
    padding: 0 40px;
    margin: 0 auto;

    ul {
        display: flex;
    }

    ${media.mobile} {
        padding: 0 10px;
    }
`;

const TabItem = styled.li`
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    white-space: nowrap;
    padding: 14px 20px;
    transition: 0.2s background-color;

    &:hover {
        background-color: ${palette.white2};
    }

    &.--active {
        color: ${palette.purple0};
        font-weight: ${fonts.weight.bold};
    }

    .support-num {
        color: ${palette.purple0};
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 13px 10px;
    }
`;

const DetailNavSkeleton = styled.div`
    .nav {
        width: 100%;
        height: 44px;
    }

    ${media.tablet} {
        height: 40px;
    }

    ${media.mobile} {
        height: 40px;
    }
`;

export default memo(DetailNav);
