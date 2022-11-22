export type User = {
    id: any;
    email: any;
    phone: any;
    first_name: any;
    last_name: any;
    user_status_code: any;
    email_varified: any;
    phone_varified: any;
    userprofile_info: {
        user: any;
        bio: any;
        gender: any;
        avatar: any;
        birthdate: any;
    };
    naver_email: any;
    google_email: any;
    kakao_email: any;
};

export interface GetUserParams {
    code: string;
    snsType: string;
}

export interface GetUserResponse {
    tokens: {
        access: string;
        refresh: string;
    };
    user: User;
}

export interface SetUserParams extends User {
    accessToken: string;
}

export interface LogoutUserParams {
    accessKey: string;
}

export interface LogoutUserResponse {}

export interface RenewAccessTokenParams {
    refresh: string;
}

export type RenewAccessTokenResponse = {
    access: string;
};
