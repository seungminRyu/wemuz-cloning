import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import palette from "../../../lib/styles/palette";
import { SettingContent, SettingLabel } from "../SettingStyles";
import { parseDateString } from "../../../lib/utils";

export type AccountProfilesProp = {
    name: string;
    birth: string;
    phone: string;
    varified: boolean;
    onClick: () => Promise<void>;
};

function AccountProfiles(props: AccountProfilesProp) {
    const { name, birth, phone, varified, onClick } = props;

    const formatBirthDateString = (birth: string) => {
        const dateObj = parseDateString(birth);
        return `${dateObj.year}년 ${dateObj.month}월 ${dateObj.date}일`;
    };

    return (
        <AccountProfilesBlock>
            <h2>기본정보</h2>
            <ProfileItem>
                <SettingLabel>이름</SettingLabel>
                <SettingContent>
                    {varified ? name : "인증된 이름 정보가 없습니다"}
                </SettingContent>
            </ProfileItem>
            <ProfileItem>
                <SettingLabel>생년월일</SettingLabel>
                <SettingContent>
                    {varified
                        ? formatBirthDateString(birth)
                        : "인증된 생년월일 정보가 없습니다"}
                </SettingContent>
            </ProfileItem>
            <ProfileItem>
                <SettingLabel>연락처</SettingLabel>
                <SettingContent>
                    {varified ? phone : "인증된 연락처 정보가 없습니다"}
                </SettingContent>
            </ProfileItem>
            {varified ? (
                <CertifiedBlock>본인 인증 완료</CertifiedBlock>
            ) : (
                <CertifyBtn onClick={onClick}>본인 인증 하기</CertifyBtn>
            )}
        </AccountProfilesBlock>
    );
}

const AccountProfilesBlock = styled.div`
    margin-top: 50px;

    h2 {
        font-size: 14px;
        font-weight: ${fonts.weight.bold};
    }
`;

const ProfileItem = styled.div`
    margin-top: 20px;
`;

const CertifyBtn = styled.button`
    width: 100%;
    font-size: 14px;
    color: ${palette.gray0};
    border: 1px solid ${palette.gray0};
    border-radius: 4px;
    padding: 11px 0;
    margin-top: 20px;
`;

const CertifiedBlock = styled.div`
    display: grid;
    width: 100%;
    font-size: 14px;
    text-align: center;
    color: ${palette.purple0};
    border: 1px solid ${palette.purple0};
    border-radius: 4px;
    padding: 12px 0;
    margin-top: 20px;
`;

export default AccountProfiles;
