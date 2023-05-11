import { AppRoutes } from './routes';
import { SkeletonTheme } from 'react-loading-skeleton';
import { GlobalStyle } from './components/App/GlobalStyle';
import * as Styled from './components/App/Styles';


export function App() {        

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <GlobalStyle />
            <Styled.wrapper>
                <AppRoutes />
            </Styled.wrapper>
        </SkeletonTheme>
    );
}
