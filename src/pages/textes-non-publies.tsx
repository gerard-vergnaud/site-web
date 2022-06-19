import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const Unpublished = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('unpublished.title')}
      details={[
        t('unpublished.details.first'),
        t('unpublished.details.second'),
      ]}
      texts={[
        {
          description:
            "Principes de psychologie. Pour l'étude des compétences complexes",
          title:
            '2011 - Texte non publié, version provisoire non corrigée. Reproduction et circulation du texte interdite Version corrigée prochainement disponible',
          link: '/texts/gvergnaud_2011_principes-psychologie_non-publie.pdf',
        },
      ]}
    />
  );
};

export default Unpublished;
