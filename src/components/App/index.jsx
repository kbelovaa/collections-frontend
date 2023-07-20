import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { setUserAsync, setIsAuthAction } from '../../store/actions/userActions';
import NavBar from '../NavBar';
import Main from '../Main';
import Auth from '../Auth';
import UsersTable from '../UsersTable';
import Profile from '../Profile';
import Collection from '../Collection';
import Item from '../Item';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const userRole = localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')).role : user.role;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setUserAsync());
      dispatch(setIsAuthAction(true));
    }
  }, []);

  return (
    <div className="content">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/registration" element={<Auth />} />
          {userRole === 'ADMIN' && <Route path="/users" element={<UsersTable />} />}
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/collection/:id" element={<Collection />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
