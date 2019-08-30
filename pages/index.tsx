import React from 'react';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <div>我是子应用2的主页</div>
    </div>
  );
}
