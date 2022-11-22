import {
    CanceledPayment,
    Funding,
    FundingHost,
    Payment,
    RefundPayment,
} from "../types";

export type CheckAliasExistenceParams = {
    alias: string;
};

export type CheckAliasExistenceResponse = {
    code: string;
};

export type FetchSearchedAddressParams = {
    query: string;
    page: number;
};

export type FetchSearchedAddressResponse = any;

export type FetchSupportedFundingsParams = {
    accessKey: string;
    page: number;
};

export type FetchSupportedFundingsResponse = {
    count: any;
    next: any;
    previous: any;
    results: {
        funding: Funding;
        funding_host: FundingHost;
        payment: Payment;
        user_support_funding: {
            created: any; // O
            funding: any;
            funding_amount: any;
            id: any;
            name_open_flag: any;
            order: any;
            package_open_flag: any;
            supporter: any;
        };
    }[];
};

export type FetchSupportDetailParams = {
    accessKey: string;
    id: string;
};

export type FetchSupportDetailResponse = {
    all_packages_supported_funding: {
        funding_package: any;
        funding_package_info: {
            d_type: any;
            description: any;
            funding: any;
            id: any;
            name: any;
            number_of_remainings: any;
            packageitem: any[];
            packageitem_info: {
                funding_package: any;
                funding_service: any;
                funding_service_info: {
                    description: "";
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
            packageoption_info: {
                description: any;
                id: any;
                name: any;
                sequence_number: any;
            }[];
            price: any;
            sequence_number: any;
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
        };
        id: any;
        number_of_packages: any;
        user_support_funding: any;
    }[];
    funding: Funding;
    funding_host: FundingHost;
    payment: Payment;
    refund_payment: RefundPayment;
    cancel_payment_schedule: CanceledPayment;
};

export type FetchSupporterMyPageParams = {
    accessKey: string;
};

export type FetchSupporterMyPageResponse = {
    user_profile: {
        user: any;
        bio: any;
        gender: any;
        avatar: any;
        birthdate: any;
        lat: any;
        lng: any;
        address: any;
        address_depth_1: any;
        address_depth_2: any;
    };
    preferred_genres: Array<{
        id: any;
        name: any;
        url: any;
    }>;
    number_of_supported_funding: any;
    number_of_liked_funding: any;
};

export type FetchLikedFundingsParams = {
    accessKey: string;
    page: number;
    order: string;
};

export type FetchLikedFundingsResponse = {
    count: any;
    next: any;
    previous: any;
    results: Array<{
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
};

export type PostMusicianInfoParams = {
    accessKey: string;
    postData: FormData;
};

export type PostMusicianInfoResponse = any;

export type FetchMusicianInfoParams = {
    accessKey: string;
};

export type FetchMusicianInfoResponse = {
    id: any;
    alias: any;
    avatar: any;
    position_main: {
        id: any;
        name: any;
        url: any;
    };
    genre: {
        id: any;
        name: any;
        url: any;
    };
    instagram: any;
    soundcloud: any;
    youtube: any;
    spotify: any;
    etc: any;
    address: any;
    address_depth_1: any;
    bio: any;
    number_of_fundings: any;
    number_of_projects: any;
    number_of_teams: any;
};
