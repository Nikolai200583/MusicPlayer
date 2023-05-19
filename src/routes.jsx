import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { NotFound } from './pages/not-found';
import { Login } from './pages/login';
import { MyTrack } from './pages/my-tracks';
import { Registration } from './pages/registration';
import { Selections } from './pages/selections';
import { ProtectedRoute } from './components/protected-route';
import { useState } from 'react';

export const AppRoutes = ({ onToggle, lightTheme, darkTheme, isDarkTheme }) => {
    const [token, setToken] = useState();

    return (
        <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login setToken={setToken} />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
                <Route
                    path="/"
                    element={
                        <Main
                            onToggle={onToggle}
                            darkTheme={darkTheme}
                            lightTheme={lightTheme}
                            isDarkTheme={isDarkTheme}
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
                        />
                    }
                />
                <Route path="/myTrack" element={<MyTrack />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
