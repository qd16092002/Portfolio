import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { useLanguage } from '../../../hooks/useLanguage';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Lấy danh sách liên hệ từ localStorage hoặc file JSON
      let existingContacts = [];
      
      try {
        const stored = localStorage.getItem('portfolio_contacts');
        if (stored) {
          existingContacts = JSON.parse(stored);
        } else {
          // Thử đọc từ file JSON trong public
          const response = await fetch('/contacts.json');
          if (response.ok) {
            existingContacts = await response.json();
          }
        }
      } catch (err) {
        console.log('Using empty array');
      }
      
      // Tạo contact mới
      const newContact = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString('vi-VN')
      };

      // Thêm vào danh sách
      existingContacts.push(newContact);

      // Lưu vào localStorage
      localStorage.setItem('portfolio_contacts', JSON.stringify(existingContacts));

      alert(t('contact.form.success'));
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving contact:', error);
      alert(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.subtitle')}</h3>
            <p>{t('contact.description')}</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <a href="mailto:tranquangdao16092002@gmail.com">tranquangdao16092002@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <a href="tel:+84824216169">+84 824 216 169</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>{t('contact.address')}</h4>
                  <p>{t('contact.location')}</p>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <a href="https://www.linkedin.com/in/qd16092002/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/qd16092002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t('contact.form.subject')}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <FaSpinner className="spinner" /> {t('contact.form.sending')}
                </>
              ) : (
                <>
                  <FaPaperPlane /> {t('contact.form.send')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

