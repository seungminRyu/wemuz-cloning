export type FetchSupporterInfoParams = {
    accessKey: string;
};

export type FetchSupporterInfoResponse = {
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
};

export type PostSupporterInfoParams = {
    accessKey: string;
    postData: FormData;
};

export type PostSupporterInfoResponse = any;
