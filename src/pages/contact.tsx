import * as React from 'react';
import Footer from '../components/Footer';
import { useTranslation } from '../packages/i18n';

const Contact = () => {
  const [t] = useTranslation();

  return (
    <main className="bg-primary h-screen w-full text-light p-8 pb-0 flex flex-col items-center">
      <h1 className="text-6xl font-bold">{t('contact.title')}</h1>
      <p className="mt-4 text-2xl">{t('contact.details')}</p>
      <p className="text-3xl font-sans">
        <a href="mailto:contact@gerard-vergnaud.com">
          contact@gerard-vergnaud.com
        </a>
      </p>
      <p className="my-4 flex items-center justify-center">
        <a className="button button-inverted mt-4" href="/gerard-vergnaud/">
          {t('backToHome')}
        </a>
      </p>
      <Footer />
    </main>
  );
};

export default Contact;
