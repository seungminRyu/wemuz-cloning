export interface GetPaymentFundingParams {
    id: string;
    accessKey: string;
}

export interface GetPaymentFundingResponse {
    funding: {
        audience_achievement_rate: any;
        end_date: any;
        funding_host_alias: any;
        funding_performance_date: any;
        fundinghost_info: {
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
        fundingpackage_info: {
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
        }[];
        id: any;
        is_liked: any;
        location: any;
        money_achievement_rate: any;
        number_of_likes: any;
        number_of_support: any;
        performance_stage_name: any;
        thumbnail: any;
        title: any;
        total_support_amounts: any;
    };
    is_supported: any;
}

export interface RequestPaymentParams {
    accessKey: string;
    fundingId: string;
    paymentInfo: {
        payment_amounts: number;
        name_open_flag: boolean;
        package_open_flag: boolean;
        funding_packages: {
            funding_package: number;
            number_of_packages: number;
        }[];
        total_number_of_packages: number;
        number_of_donation_packages: number;
        payment: {
            customer_uid: number;
            merchant_uid: string;
            end_date: string;
            pg: string;
        };
    };
}

export interface RequestPaymentRespones {
    funding: {
        funding_info: {
            audience_achievement_rate: any;
            end_date: any;
            funding_host_alias: any;
            funding_performance_date: any;
            fundinghost_info: {
                bio: any;
                host_name: any;
                host_services: Array<{
                    description: any;
                    discount_price: any;
                    funding_host: any;
                    funding_performance_stage: any;
                    id: any;
                    introduction_photo: any;
                    name: any;
                    price: any;
                }>;
                id: any;
                introduction_photo: any;
                introduction_video_info: {
                    name: any;
                    path: any;
                    size: any;
                    thumbnail: any;
                    type: any;
                    uploaded: any;
                };
                number_of_succeeded_funding: any;
            };
            fundingpackage_info: Array<{
                d_type: any;
                description: any;
                funding: any;
                id: any;
                name: any;
                number_of_remainings: any;
                packageitem: any;
                packageitem_info: any;
                packageoption_info: any;
                price: any;
                sequence_number: any;
                ticketinfundingpackage_info: Array<{
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
                }>;
            }>;
            id: any;
            is_liked: any;
            location: any;
            money_achievement_rate: any;
            number_of_likes: any;
            number_of_support: any;
            performance_stage_name: any;
            thumbnail: any;
            title: any;
            total_support_amounts: any;
        };
        id: any;
        sequence_of_support: any;
        supporter_name: any;
    };
    payment: {
        created: any;
        customer_uid: any;
        id: any;
        merchant_uid: any;
        number_of_payment_requests: any;
        order: any;
        payment_amounts: any;
        payment_state: any;
        pg: any;
        schedule_at: any;
    };
}

// -> IMP.request_pay 첫번째 인자
export interface RequestPayAdditionalParams {
    digital?: boolean;
    vbank_due?: string;
    m_redirect_url?: string;
    app_scheme?: string;
    biz_num?: string;
}

export interface Display {
    card_quota?: number[];
}

export interface RequestPayParams extends RequestPayAdditionalParams {
    pg?: string;
    pay_method: string;
    escrow?: boolean;
    merchant_uid: string;
    name?: string;
    amount: number;
    custom_data?: any;
    tax_free?: number;
    currency?: string;
    language?: string;
    buyer_name?: string;
    buyer_tel: string;
    buyer_email?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    notice_url?: string | string[];
    display?: Display;
}
// -> IMP.request_pay 두번째 인자

export type RequestRefundFundingParams = {
    id: string;
    accessKey: string;
    postData: {
        cause: string;
        payment_amount: number;
        refund_product: string;
        trade_id_for_alimtalk: string;
        user_support_funding: string;
        product_type: string;
    };
};

export type RequestRefundFundingResponse = any;

export interface CancelPaymentParams {
    accessKey: string;
    fundingId: number;
    cause: string;
}

export interface CancelPaymentRespones {}
