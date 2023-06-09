import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { NotFound } from './pages/not-found';
import { Login } from './pages/login';
import { MyTrack } from './pages/my-tracks';
import { Registration } from './pages/registration';
import { Selections } from './pages/selections';
import { ProtectedRoute } from './components/protected-route';
import { useGetSelectMusicQuery} from './redux/musicApi';


export const AppRoutes = ({ onToggle, lightTheme, darkTheme, isDarkTheme, TRACKS}) => {
    const {data, isLoading } = useGetSelectMusicQuery();
    const SELECTION = data; 
    if (isLoading) return <h1>Loading</h1>
    
    return (
        <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login/>} />

            <Route element={<ProtectedRoute/>}>
                <Route
                    path="/"
                    element={
                        <Main
                            onToggle={onToggle}
                            darkTheme={darkTheme}
                            lightTheme={lightTheme}
                            isDarkTheme={isDarkTheme}
                            TRACKS={TRACKS}
                        />
                    }
                />
                <Route
                    path="/selections/:id"
                    element={
                        <Selections
                            onToggle={onToggle}
                            darkTheme={darkTheme}
                            lightTheme={lightTheme}
                            isDarkTheme={isDarkTheme}
                            SELECTION={SELECTION}
                        />
                    }
                />
                <Route path="/myTrack" element={<MyTrack
                onToggle={onToggle}
                darkTheme={darkTheme}
                lightTheme={lightTheme}
                isDarkTheme={isDarkTheme}
                TRACKS={TRACKS} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
