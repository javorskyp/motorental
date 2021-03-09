import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={`${styles.header}`}>
      {props.childern}
    </header>
  );
}

export default Header;