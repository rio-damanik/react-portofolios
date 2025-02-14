import React from 'react';
import './HireModal.css';

const HireModal = ({ isOpen, onClose, onDownloadCV, onContactMe }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>Let's Work Together!</h2>
        </div>
        <div className="modal-body">
          <p>I'm excited to collaborate on your next project. Download my CV to learn more about my experience or contact me directly.</p>
          <div className="modal-buttons">
            <button className="modal-button download-cv" onClick={onDownloadCV}>
              <span className="button-icon">📄</span>
              Download CV
            </button>
            <button className="modal-button contact-me" onClick={onContactMe}>
              <span className="button-icon">✉️</span>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
