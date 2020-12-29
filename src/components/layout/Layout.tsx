import React from 'react';
import styles from './layout.module.css';

interface LayoutProps {
    children: React.ReactNode
}

export default ({children}: LayoutProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
