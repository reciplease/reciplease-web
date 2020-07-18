import React from 'react';
import styles from './footer.module.css'

export default () => {
  return (
    <footer className={styles.footer}>
      <p><span className={styles.title}>Reciplease</span> &copy; Rhys Saldanha</p>
      <p className={styles.smaller}>
        Using icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
      <a className={styles.bmcButton}
         target="_blank"
         rel="noopener noreferrer"
         href="https://www.buymeacoffee.com/rhyssaldanha"><img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"/><span>Buy me a coffee</span></a>
    </footer>
  )
}
