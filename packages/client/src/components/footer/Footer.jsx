import React from 'react';
import styles from './footer.module.css';

export default () => {
  return (
    <footer className={styles.footer}>
      <p>Reciplease &copy; Rhys Saldanha</p>
      <p className={styles.smaller}>
        Using icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
    </footer>
  );
}
