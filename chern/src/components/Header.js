import React, { useEffect, useState } from 'react';
import logoImg from '../assets/logo.webp';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const [dateTime, setDateTime] = useState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime({
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className={styles.header}>
            <NavLink to='/home'>  <img src={logoImg} alt="Конструктор смэ" className={styles.logo} /> </NavLink>
            <nav className={styles.nav}>
                <NavLink activeClassName={styles.linkActive} className={styles.link} to='/search'>Работа</NavLink>
                <NavLink activeClassName={styles.linkActive} className={styles.link} to='/help'>Помощь</NavLink>
                <NavLink activeClassName={styles.linkActive} className={styles.link} to='/info'>Справка</NavLink>
                <NavLink className={styles.link} to='/home'>На главную</NavLink>
            </nav>
            <div className={styles.dateTime}>
                <span className={styles.date}>{dateTime.date}</span>
                <span className={styles.time}>{dateTime.time}</span>
            </div>
        </header>
    );
}

export default Header;
