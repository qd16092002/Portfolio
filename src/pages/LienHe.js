import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaTrash, FaCalendarAlt, FaUser, FaTag, FaDownload, FaUpload } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import './LienHe.css';

const LienHe = () => {
  const { t } = useLanguage();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fileInputRef = useRef(null);

  const fetchContacts = async () => {
    try {
      // Đọc từ localStorage trước
      const storedContacts = localStorage.getItem('portfolio_contacts');
      if (storedContacts) {
        const contactsList = JSON.parse(storedContacts);
        // Sắp xếp theo thời gian mới nhất
        const sortedContacts = contactsList.sort((a, b) => 
          new Date(b.timestamp) - new Date(a.timestamp)
        );
        setContacts(sortedContacts);
      } else {
        // Thử đọc từ file JSON trong public
        try {
          const response = await fetch('/contacts.json');
          if (response.ok) {
            const contactsList = await response.json();
            const sortedContacts = contactsList.sort((a, b) => 
              new Date(b.timestamp) - new Date(a.timestamp)
            );
            setContacts(sortedContacts);
            // Lưu vào localStorage để đồng bộ
            localStorage.setItem('portfolio_contacts', JSON.stringify(contactsList));
          }
        } catch (err) {
          console.log('No contacts.json file found');
        }
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError(t('lienhe.error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm(t('lienhe.deleteConfirm'))) {
      return;
    }

    try {
      // Lọc bỏ contact có id trùng
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      
      // Lưu lại vào localStorage
      localStorage.setItem('portfolio_contacts', JSON.stringify(updatedContacts));
      
      // Cập nhật state
      setContacts(updatedContacts);
      alert(t('lienhe.deleteSuccess'));
    } catch (err) {
      console.error('Error deleting contact:', err);
      alert(t('lienhe.error'));
    }
  };

  const handleExport = () => {
    try {
      const jsonStr = JSON.stringify(contacts, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contacts.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      alert(t('lienhe.export') + ' - Success!');
    } catch (err) {
      console.error('Error exporting contacts:', err);
      alert(t('lienhe.error'));
    }
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedContacts = JSON.parse(event.target.result);
        if (Array.isArray(importedContacts)) {
          // Merge với contacts hiện tại, tránh trùng lặp
          const existingIds = new Set(contacts.map(c => c.id));
          const newContacts = importedContacts.filter(c => !existingIds.has(c.id));
          const mergedContacts = [...contacts, ...newContacts];
          
          // Sắp xếp theo thời gian
          const sortedContacts = mergedContacts.sort((a, b) => 
            new Date(b.timestamp) - new Date(a.timestamp)
          );
          
          // Lưu vào localStorage
          localStorage.setItem('portfolio_contacts', JSON.stringify(sortedContacts));
          setContacts(sortedContacts);
          alert(t('lienhe.importSuccess').replace('{count}', newContacts.length));
        } else {
          alert(t('lienhe.error'));
        }
      } catch (err) {
        console.error('Error importing contacts:', err);
        alert(t('lienhe.error'));
      }
    };
    reader.readAsText(file);
    // Reset input
    e.target.value = '';
  };

  if (loading) {
    return (
      <div className="lienhe-container">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="lienhe-container">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="lienhe-container">
      <div className="container">
        <h1 className="page-title">{t('lienhe.title')}</h1>
        <div className="contacts-actions">
          <div className="contacts-stats">
            <p>{t('lienhe.total')}: <strong>{contacts.length}</strong> {t('lienhe.contacts')}</p>
          </div>
          <div className="action-buttons">
            <button className="btn-export" onClick={handleExport}>
              <FaDownload /> {t('lienhe.export')}
            </button>
            <label className="btn-import">
              <FaUpload /> {t('lienhe.import')}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImport}
                accept=".json"
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
        
        {contacts.length === 0 ? (
          <div className="no-contacts">
            <p>{t('lienhe.noContacts')}</p>
          </div>
        ) : (
          <div className="contacts-list">
            {contacts.map((contact) => (
              <div key={contact.id} className="contact-card">
                <div className="contact-header">
                  <div className="contact-info-main">
                    <div className="contact-name">
                      <FaUser /> {contact.name}
                    </div>
                    <div className="contact-email">
                      <FaEnvelope /> {contact.email}
                    </div>
                  </div>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(contact.id)}
                    title="Xóa liên hệ"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="contact-subject">
                  <FaTag /> {contact.subject}
                </div>
                <div className="contact-message">
                  {contact.message}
                </div>
                <div className="contact-footer">
                  <span className="contact-date">
                    <FaCalendarAlt /> {contact.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LienHe;

