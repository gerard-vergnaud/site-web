import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const Appendix = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('appendix.title')}
      texts={[
        {
          title: 'Biographie de Gérard Vergnaud',
          link: 'https://ardm.eu/qui-sommes-nous-who-are-we-quienes-somos/gerard-vergnaud-2/',
        },
        {
          title:
            "Site de l'ARDÉCO, Association pour la recherche sur le développement des compétences",
          link: 'https://www.ardeco-association.fr/',
        },
      ]}
    />
  );
};

export default Appendix;
