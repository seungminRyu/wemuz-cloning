import styled from "styled-components";
import useToggle from "../../../lib/hooks/useToggle";
import media from "../../../lib/styles/media";
import { setPreventScroll } from "../../../lib/utils";
import MyPageTemplate from "../../../components/myPage/MyPageTemplate";
import CreateMusicianHeader from "../../../components/myPage/musician/CreateMusicianHeader";
import CreateMusicianModal from "../../../components/myPage/musician/CreateMusicianModal";
import MusicianImages from "../../../components/myPage/musician/MusicianImages";
import {
    myPageGnbStyle,
    StyledPageTemplate,
} from "../../../components/myPage/MyPageStyles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export type CreateMusicianProp = {};

function CreateMusician(props: CreateMusicianProp) {
    const isUserHasMusician = true;
    const navigate = useNavigate();
    const [createMusicianOpen, toggleCreateMusicianOpen] = useToggle(false);

    useEffect(() => {
        if (isUserHasMusician) {
            navigate("../home");
            return;
        }
    }, []);

    const onCreateBtnClick = () => {
        setPreventScroll(true);
        toggleCreateMusicianOpen();
    };

    return (
        <StyledPageTemplate gnbStyle={myPageGnbStyle}>
            <StyledMyPageTemplate
                main={
                    <>
                        <CreateMusicianHeader
                            onCreateBtnClick={onCreateBtnClick}
                        />
                        <MusicianImages />
                        <CreateMusicianModal
                            open={createMusicianOpen}
                            toggleOpen={toggleCreateMusicianOpen}
                        />
                    </>
                }
            />
        </StyledPageTemplate>
    );
}

const StyledMyPageTemplate = styled(MyPageTemplate)`
    .main-container {
        padding: 160px 0 200px;
    }

    ${media.mobile} {
        .main-container {
            padding: 60px 0;
        }
    }
`;

export default CreateMusician;
