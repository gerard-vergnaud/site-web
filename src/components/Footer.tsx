import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t] = useTranslation();

  return (
    <footer className="py-2 px-4 bg-primary text-light mt-auto">
      <ul className="flex items-center justify-center">
        <li className="mx-2">
          <a className="underline" href="/">
            {t('siteOwner')}
          </a>
        </li>
        <li className="mx-2">
          <a className="underline" href="/contact">
            {t('contact.footer')}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
