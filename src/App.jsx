import { AppRoutes } from './routes';
import { SkeletonTheme } from 'react-loading-skeleton';
import { GlobalStyle } from './components/App/GlobalStyle';
import * as Styled from './components/App/Styles';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useGetAllMusicQuery, usePostTokenRefreshMutation} from './redux/musicApi';
import { useDispatch } from 'react-redux';
import { userLogin } from './redux/slices/userSlice';


export function App() {
    const [theme, setTheme] = useState('dark');
    const isDarkTheme = theme === 'dark';
    const [isToggled, setIsToggled] = useState(isDarkTheme);  
    const {isLoading} = useGetAllMusicQuery();
    const dispatch = useDispatch()

    const [postTokenRefresh, {}] = usePostTokenRefreshMutation();

    const handleTokenRefresh = () => {
        if (localStorage.getItem('token')) {
            postTokenRefresh({ refresh: localStorage.getItem('token')})
            .unwrap()
            .then((data) => {
              console.log(data)
              dispatch(userLogin({
                
                token: data
            }));
            })           
        }
      }
  
useEffect(() => {
    setInterval(() => {
        handleTokenRefresh ()
    }, 300000)
  }, [])

    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark');
    };
    const onToggle = () => {
        setIsToggled(!isToggled);
        toggleTheme();
    };
    const darkTheme = {
        body: '#181818',
        title: '#fff',
        backImageTrack: '#313131',
        border: '1px solid #ffffff',
        spanBurger: '#D3D3D3',
        stroke: '#ffffff',
        backDrop: '#313131',
    };

    const lightTheme = {
        body: '#fff',
        title: 'black',
        backImageTrack: '#F6F4F4',
        border: '1px solid #000000',
        spanBurger: '#000000',
        stroke: '#696969',
        backDrop: '#ffffff',
    };  
    
    if (isLoading) return <h1>Loading</h1>
    
    return (
        
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        
            <SkeletonTheme
                baseColor={isDarkTheme ? '#202020' : '#a6a6a6'}
                highlightColor={isDarkTheme ? '#444' : '#d5d5d5'}
            >
                <GlobalStyle />
                <Styled.wrapper>
                    <AppRoutes
                        onToggle={onToggle}
                        darkTheme={darkTheme}
                        lightTheme={lightTheme}
                        isDarkTheme={isDarkTheme}                                           
                    />
                </Styled.wrapper>
            </SkeletonTheme>
        </ThemeProvider>
    );
}
