import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';
import s from './AppLayout.module.scss';

const AppLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={s.content}>{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
