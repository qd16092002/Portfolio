import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import SectionHeader from '../../common/SectionHeader';
import Reveal from '../../common/Reveal';
import { PROFILE } from '../../../data/profile';
import './Contact.css';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setIsSent(false);
  };

  /**
   * There is no backend, so the form composes a message in the visitor's own
   * mail client. That keeps the promise honest: nothing is silently dropped.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `${t('contact.form.name')}: ${form.name}`,
      `${t('contact.form.email')}: ${form.email}`,
      '',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    setIsSent(true);
  };

  const details = [
    {
      icon: <FaEnvelope />,
      label: t('contact.email'),
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: <FaPhone />,
      label: t('contact.phone'),
      value: PROFILE.phone,
      href: `tel:${PROFILE.phoneHref}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: t('contact.address'),
      value: t('contact.location'),
    },
  ];

  const fields = [
    { name: 'name', type: 'text', autoComplete: 'name' },
    { name: 'email', type: 'email', autoComplete: 'email' },
    { name: 'subject', type: 'text', autoComplete: 'off' },
  ];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.description')}
          id="contact-title"
        />

        <div className="contact__grid">
          <Reveal className="contact__details">
            <ul className="contact__list">
              {details.map((detail) => (
                <li className="contact__item" key={detail.label}>
                  <span className="contact__icon" aria-hidden="true">
                    {detail.icon}
                  </span>
                  <div>
                    <p className="contact__label">{detail.label}</p>
                    {detail.href ? (
                      <a className="contact__value" href={detail.href}>
                        {detail.value}
                      </a>
                    ) : (
                      <p className="contact__value">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact__social">
              <a
                className="icon-btn"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                className="icon-btn"
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </Reveal>

          <Reveal className="card contact__form-card" delay={80}>
            <form className="contact__form" onSubmit={handleSubmit}>
              {fields.map((field) => (
                <p className="field" key={field.name}>
                  <label className="field__label" htmlFor={`contact-${field.name}`}>
                    {t(`contact.form.${field.name}`)}
                  </label>
                  <input
                    className="field__input"
                    id={`contact-${field.name}`}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                  />
                </p>
              ))}

              <p className="field">
                <label className="field__label" htmlFor="contact-message">
                  {t('contact.form.message')}
                </label>
                <textarea
                  className="field__input field__input--area"
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </p>

              <button type="submit" className="btn btn--primary btn--block">
                <FaPaperPlane aria-hidden="true" />
                {t('contact.form.send')}
              </button>

              <p className="contact__hint">{t('contact.form.hint')}</p>

              <p className="contact__status" role="status">
                {isSent ? t('contact.form.opened') : ''}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
