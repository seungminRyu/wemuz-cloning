export interface Funding {
    achievement_criterion: any;
    age_limit: any;
    audience_achievement_rate: any;
    banner_photo: any;
    end_date: any;
    funding_host: any;
    funding_state: any;
    fundingintroductioninfo: any[];
    fundingoptionalrule: any[];
    fundingpackage: any[];
    fundingperformance: any;
    id: any;
    is_banner: any;
    is_liked: any;
    main_color_1: any;
    max_number_of_audience: any;
    min_money_amount: any;
    min_number_of_audience: any;
    money_achievement_rate: any;
    number_of_likes: any;
    number_of_support: any;
    start_date: any;
    thumbnail: any;
    title: any;
    total_support_amounts: any;
    userlikefunding: any[];
    performance_datetime: any;
}

export interface FundingHost {
    bio: any;
    host_name: any;
    id: any;
    number_of_succeeded_funding: any;
}

export interface Payment {
    id: any;
    customer_uid: any;
    merchant_uid: any;
    schedule_at: any;
    payment_amounts: any;
    payment_state: any;
    number_of_payment_requests: any;
    pg: any;
    order: any;
    created: any;
}

export interface RefundPayment {
    id: any;
    payment: any;
    cause: any;
    refund_amount: any;
    refund_holder: any;
    refunded_at: any;
}

export interface CanceledPayment {
    id: any;
    payment: any;
    cause: any;
    cancelled_at: any;
}
