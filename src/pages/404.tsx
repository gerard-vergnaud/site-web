import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import { Helmet } from 'react-helmet';
import { getLink } from '../utils/config';

const NotFoundPage = () => {
  const [t] = useTranslation();

  return (
    <main className="bg-primary h-screen w-full text-light p-8 flex flex-col justify-center items-center">
      <Helmet titleTemplate="%s | Gérard Vergnaud">
        <title>{t('notFound.title')}</title>
      </Helmet>
      <h1 className="text-6xl font-bold">404 Not Found</h1>
      <p className="mt-4 text-lg">{t('notFound.message')}</p>
      <a className="button button-inverted mt-4" href={getLink('/')}>
        {t('backToHome')}
      </a>
    </main>
  );
};

export default NotFoundPage;
