import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { NotFound } from './pages/not-found';
import { Login } from './pages/login';
import { MyTrack } from './pages/my-tracks';
import { Registration } from './pages/registration';
import { Selections } from './pages/selections';
import { ProtectedRoute } from './components/protected-route';
import { useState } from 'react';

export const AppRoutes = () => {
    const [token, setToken] = useState();

    return (
        <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login setToken={setToken} />} />         

            <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
                <Route path="/" element={<Main />} />
                <Route path="/selections/:id" element={<Selections />} />
                <Route path="/myTrack" element={<MyTrack />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
