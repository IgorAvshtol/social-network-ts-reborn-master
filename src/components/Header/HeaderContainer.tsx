import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const  Header = () => {
    return <header className={s.header}>
    <img src='https://s.starladder.com/uploads/team_logo/7/7/c/1/thumb_270_2eb66ca0fa0345cc85ad134e7bad0789.jpeg'/>
        <div className={s.loginBlock}>
            <NavLink to={"/login"}>Login</NavLink>
        </div>
        </header>

}

export default Header;