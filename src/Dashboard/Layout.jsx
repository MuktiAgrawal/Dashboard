import React from 'react';
import style from './App.module.css';

const Layout = ({ children }) => {
    return <div className={style.Right}>{children}</div>;
};

export default Layout;
