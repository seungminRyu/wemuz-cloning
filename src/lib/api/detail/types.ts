/**
 * author: 유승민
 * created: 2022/03/04
 * updated: 2022/04/12
 */
export interface GetFundingDetailParam {
    id: number;
    accessKey: string | null;
}

export interface GetFundingDetailResponse {
    funding: {
        achievement_criterion: any;
        age_limit: any;
        audience_achievement_rate: any;
        banner_photo: any;
        end_date: any;
        funding_state: any;
        fundinghost: any;
        fundingintroductioninfo: any;
        fundingintroductioninfo_info: {
            id: any;
            funding: any;
            introduction_photo: any;
            introduction_video: any;
            sequence_number: any;
            introduction_video_info: {
                id: any;
                name: any;
                path: any;
                size: any;
                type: any;
                thumbnail: any;
                uploaded: any;
            };
        }[];
        fundingoptionalrule: any;
        fundingoptionalrule_info: {
            id: any;
            funding: any;
            title: any;
            content: any;
            sequence_number: any;
        }[];
        fundingpackage: any;
        fundingperformance: any;
        id: any;
        is_banner: any;
        is_liked: any;
        max_number_of_audience: any;
        min_money_amount: any;
        min_number_of_audience: any;
        money_achievement_rate: any;
        number_of_likes: any;
        number_of_support: any;
        start_date: any;
        title: any;
        total_audience_number: any;
        total_support_amounts: any;
        userlikefunding: any;
    };
    funding_host: {
        bio: any;
        host_name: any;
        host_services: {
            description: any;
            funding_host: any;
            funding_performance_stage: any;
            introduction_photo: any;
            name: any;
        };
        id: any;
        introduction_photo: any;
        introduction_video_info: {
            id: any;
            name: any;
            path: any;
            size: any;
            thumbnail: any;
            type: any;
            uploaded: any;
        };
        number_of_succeeded_funding: any;
    };
    funding_packages: {
        d_type: any;
        description: any;
        funding: any;
        id: any;
        name: any;
        number_of_remainings: any;
        packageitem: any;
        packageitem_info: {
            funding_package: any;
            funding_service: any;
            funding_service_info: {
                description: any;
                discount_price: any;
                funding_host: any;
                funding_performance_stage: any;
                id: any;
                introduction_photo: any;
                name: any;
                price: any;
            };
            id: any;
            service_count: any;
        }[];
        ticketinfundingpackage_info: {
            funding_package: any;
            id: any;
            number_of_tickets: any;
            performance_ticket_info: {
                back_photo: any;
                cost: any;
                discount_cost: any;
                front_photo: any;
                funding_performance: any;
                grade: any;
                id: any;
                is_online: any;
                name: any;
                number: any;
                seat_type: any;
            };
        }[];
        price: any;
        sequence_number: any;
    }[];
    funding_performance: {
        fundingperformanceinfo: any;
        fundingperformanceinfo_info: {
            id: any;
            funding_performance: any;
            icon: any;
            title: any;
            content: any;
            sequence_number: any;
        }[];
        id: any;
        musicinfundingperformance: any;
        musicinfundingperformance_info: {
            id: any;
            funding_performance: any;
            music_title: any;
            musician_name: any;
            sequence_number: any;
        }[];
        performance_date: any;
        performance_genre: any;
        performance_genre_info: any;
        running_time: any;
        seat_type: any;
        seating_rule: any;
        start_time: any;
        title: any;
    };
    interview: {
        id: any;
        interviewitem: any;
        interviewitem_info: {
            question: any;
            answer: any;
            photo: any;
            sequence_number: any;
            interview: any;
        }[];
        musician: any;
        team: any;
        title: any;
    } | null;
    performance_stage: {
        address: any;
        capacity: any;
        eventinperformancestage_info: {
            description: any;
            id: any;
            sequence_number: any;
        }[];
        fundingperformancestageintroductionphoto: any;
        fundingperformancestageintroductionphoto_info: {
            funding_performance_stage: any;
            id: any;
            introduction_photo: any;
            sequence_number: any;
        }[];
        fundingservice_info: {
            description: any;
            discount_price: any;
            funding_host: any;
            funding_performance_stage: any;
            id: any;
            introduction_photo: any;
            name: any;
            price: any;
        }[];
        id: any;
        logo: any;
        name: any;
        number_of_succeeded_performance: any;
        organization: any;
        parking_address: any;
        parking_spaces_count: any;
        performancestageinfo_info: {
            id: any;
            title: any;
            content: any;
            sequence_number: any;
        }[];
        sns: any;
    };
}
