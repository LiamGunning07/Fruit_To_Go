import React, { useState, useEffect } from 'react';
import styles from '../styles/Alert.module.css'

export default function Alert ({ message, show, duration = 3000, onClose })  {
  
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    show && (
      <div className={styles.alert}>
        {message}
      </div>
    )
  );
};
