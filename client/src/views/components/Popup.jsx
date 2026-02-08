import React, { useState, useEffect } from 'react';
import '../../styles/Popup.css';

const Popup = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        {message}
      </div>
    </div>
  );
};

export default Popup;