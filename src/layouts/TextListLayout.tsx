import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

export interface TextItem {
  description?: string;
  title: string;
  link: string;
}

const TextListLayout = ({
  title,
  details,
  texts,
}: {
  title: string;
  details?: string | string[];
  texts: TextItem[];
}) => {
  const [t] = useTranslation();

  const detailsToRender: string[] | undefined =
    !Array.isArray(details) && !!details
      ? [details]
      : (details as string[] | undefined);
  return (
    <div className="min-h-screen flex flex-col bg-light">
      <Helmet titleTemplate="%s | Gérard Vergnaud">
        <title>{title}</title>
        <meta
          name="description"
          content={`${t('siteDescription')} - ${title}`}
        />
      </Helmet>
      <main className="p-8">
        <h1 className="text-center font-bold text-4xl text-primary">{title}</h1>
        {!!detailsToRender &&
          detailsToRender.map((dtl, idx) => (
            <p
              key={idx}
              className="max-w-3xl mx-auto mt-8 text-justify text-lg styled-first-letter"
            >
              {dtl}
            </p>
          ))}
        <ul className="max-w-2xl mx-auto mt-8 texts-list text-lg list-disc">
          {texts.map((text, idx) => (
            <li key={idx}>
              {!!text.description && text.description}
              <a target="_blank" href={text.link}>
                {text.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex items-center justify-center">
          <a className="button" href="/gerard-vergnaud/">
            {t('backToHome')}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TextListLayout;
