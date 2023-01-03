import { useEffect, useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicIntroVideoSectionProps = {};

function ChocomusicIntroVideoSection(props: ChocomusicIntroVideoSectionProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        videoRef.current.volume = 0;
        videoRef.current.play();
    }, []);

    return (
        <Block>
            <BackgroundVideo
                ref={videoRef}
                src="https://doc-14-14-docs.googleusercontent.com/docs/securesc/jmutqe52bbeahoten540udc0koidr878/7pnqac8ftjc31s9lpolo414iprfohb0l/1669193550000/00913607795010662071/00913607795010662071/1sIUhtBXaIzoNLnB612HJetiRm1meEvea?e=download&ax=AEKYgyTEv0qEjRfHLFK8rasgRv52PckHUdKQIvEDcdPK2P5DcwZY6T63xwE2F_nnNXsfmMfqNbdMjrrgvcydjRmI-tIYzaA0XLFaccwNiYurLyQ-6CoqxYCS8Nci7BGdKvtGJAJa4qiKIHKfiS3u8r5Nm_4W-fOu51A5xo3tHnbeLMsHpxsQqDs44AXaG9V5sBof08A9_edk_ABpDv47j1-XPlt5kDBb4B6cIqPW3i9yv9DsyAdPvq-_LW4eo3IgIpxQkcZn604iUzL6JlSmHe0hd9vx3nJzf_U6ep1JxsMd9ld8jHEIbBd4Z9Vi_5PYn2pBv5qn8fPLiqfywagVRQ6K5qJ9HnsGEr3Vnx2otf37Vh_DLPoYzSyVPxmkfBdGsQ_HFznM69GwELSUMf9Dv_PfoZr_ArT7ic6g-HSpao0rFiBNEdXeLEvheFsyb3KwGOY6xOD7UuvgBgGsblyBGxi3Y5nUjVdQIILVoC6ndZBje8pQrlx3DiVNG0fOEyY2apIlAIYc5gKFX9lT_-ct7trSGwyUBArewwMc_zUIO6u_Xk6rwC9QcrkMEmDSJk0dJLKb-daMyZk_FjusLH-7JU3dOP69m1T_wR9JfoObMB4VQOlQDL3HZeVX1wCOixVC65lXuJsmcaTCwl4cHF-vVgnErGwqMjYb_3ol7q1gXL5cipa-khWryoPpN9DZoQO6XOztwYwwfIRBVIsaSWlfjZ8kEz3mFuzzwANeC-1glHPPHLBfgn7lYH1CSaaRjCdjaOtdO6rq2p_v0EsaDIc_fcJ-agh5716Pfk0iRerOktJvSX0EDoAeF9QM_LdIDRgmLnBXca1AJM7ehWb-ondNWxLs3_Tx4WvVHYvpxtyTiMsxy8Dd0YB8sdU6daVi-4VgACS5e-IrDad51QpUDHltyqBfcu7GSz1-84Gj1TvsPdN2YsgYNfZTtXOYOYWul3OVsCAXJxl-gyVfdr19-yAsHpbkKDwzXAChmDJaGDBo54bpoBmSFhs&uuid=cfe236e5-68b8-4386-ba97-e660c59de206&authuser=0"
                loop
            />
        </Block>
    );
}

const Block = styled.section`
    height: 100%;
    background-color: ${palette.black0};
`;

const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default ChocomusicIntroVideoSection;
