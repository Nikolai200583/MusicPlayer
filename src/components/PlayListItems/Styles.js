import styled from 'styled-components';

export const playlistItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`;

export const playlistTrack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const trackTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`;
export const trackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: ${(props) => props.theme.backImageTrack};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`;
export const trackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;
export const trackTitleText = styled.div``;
export const trackTitleLink = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.title};
`;
export const trackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;
export const trackAuthor = styled.div`
    width: 321px;
    display: flex;
    justify-content: flex-start;
`;
export const trackAuthorLink = styled(trackTitleLink)`
    text-align: left;
`;
export const trackAlbum = styled.div`
    width: 245px;
`;
export const trackAlbumLink = styled(trackTitleLink)`
    color: #696969;
`;
export const trackTime = styled.div``;
export const trackTimeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
`;
export const trackTimeText = styled(trackTitleSpan)`
    text-align: right;
    color: #696969;
`;
