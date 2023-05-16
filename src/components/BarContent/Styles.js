import styled, { css } from 'styled-components';

const btnMixin = css`
    padding: 5px;
    display: flex;
    align-items: center;
`;
export const barContent = styled.div`
display: flex;
flex-direction: column;
    }
`;
export const barPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2e2e2e;
`;
export const navigationWrapper= styled.div`
    min-width: 100%;
    background-color: rgba(119, 119, 119, 0.781);
    height: 5px;
    border-radius: 30px;
    cursor: pointer;
`;

export const seekBar = styled.div`
    width: 0%;
    height: 100%;
    background-color: purple;
    border-radius: 30px;
    transition: linear 0.3s
`;

export const barPlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const barPlayer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
export const playerControls = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;
export const playerBtnPrev = styled.div`
    ${btnMixin}
    margin-right: 23px;
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    :active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
`;
export const playerBtnPrevSvg = styled.svg`
    width: 15px;
    height: 14px;
`;
export const playerBtnPlay = styled.div`
    ${btnMixin}
    margin-right: 23px;
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    :active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
`;
export const playerBtnPlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`;
export const playerBtnNext = styled.div`
    ${btnMixin}
    margin-right: 28px;
    fill: #a53939;
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    :active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
`;
export const playerBtnNextSvg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
`;
export const playerBtnRepeat = styled.div`
    ${btnMixin}
    margin-right: 24px;

    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    :active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
`;
export const playerBtnRepeatSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
export const playerBtnShuffle = styled.div`
    ${btnMixin}
    display: flex;
    align-items: center;
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    :active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
`;
export const playerBtnShuffleSvg = styled.svg`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    
`;
export const playerTrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`;
export const trackPlayContain = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author' 'image album';
    align-items: center;
`;
export const trackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`;
export const trackPlaySvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
    
`;
export const trackPlayAuthor = styled.div`
    grid-area: author;
    min-width: 49px;
`;
export const trackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
`;
export const trackPlayAlbum = styled.div`
    grid-area: album;
    min-width: 49px;
`;
export const trackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
`;
export const trackPlayLikeDis = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`;
export const trackPlayLike = styled.div`
    padding: 5px;
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    :active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
`;
export const trackPlayLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const trackPlayDislike = styled(trackPlayLike)`
    margin-left: 28.5px;
`;
export const trackPlayDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`;
export const barVolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`;
export const barVolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;
export const barVolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;
export const barVolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`;
export const barVolumeProgress = styled.div`
    width: 109px;
`;
export const barVolumeProgressLine = styled.input`
    width: 109px;
    cursor: pointer;
`;
