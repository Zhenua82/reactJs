import React, { useEffect, useState } from 'react';
import logoImg from '../assets/logo.webp';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

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
            <Link to='/home'>  <img src={logoImg} alt="Конструктор смэ" className={styles.logo} /> </Link>
            <nav className={styles.nav}>
                <Link className={styles.link} to='/search'>Работа</Link>
                <Link className={styles.link} to='/otravlenieM'>Помощь</Link>
                <Link className={styles.link} to='/home'>На главную</Link>
            </nav>
            <div className={styles.dateTime}>
                <span className={styles.date}>{dateTime.date}</span>
                <span className={styles.time}>{dateTime.time}</span>
            </div>
        </header>
    );
}

export default Header;
