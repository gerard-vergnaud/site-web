import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const ConceptualFields = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('conceptualFields.title')}
      texts={[
        {
          description:
            'Theoretical frameworks and empirical facts in the psychology of mathematics education',
          title:
            '1988 (27 juillet) in ICME 6 Budapest, Invited Plenary address',
          link: '/texts/gvergnaud_1988_theoretical-frameworks_icme-6-budapest.pdf',
        },
        {
          description: 'La théorie des champs conceptuels',
          title:
            '1990 in Recherches en Didactique des Mathématiques, La Pensée Sauvage (Ed.), N°10, 2-3, pp.133-170',
          link: '/texts/gvergnaud_1990_theorie-champs-conceptuels_recherche-didactique-mathematiques-10-2-3.pdf',
        },
        {
          description: 'Activité, développement, représentation',
          title:
            '2009 (16 janvier) in Colloquium Didactique des Mathématiques Paris, Conférence plénière invité',
          link: '/texts/gvergnaud_2009_activite-developpement-representation_colloque-paris.pdf',
        },
        {
          description: 'The Theory of Conceptual Fields',
          title: '2009 in Human Development, N° 52, pp.83-94',
          link: '/texts/gvergnaud_2009_theory-conceptual-fields_human-development-52.pdf',
        },
        {
          description:
            'La pensée est un geste. Comment analyser la forme opératoire de la connaissance ?',
          title:
            '2011 in Enfance, Christine Sorsana, Volume 63 NecPlus (Ed.) Volume 63 2011/1, pp.37-48',
          link: '/texts/gvergnaud_2011_pensee-geste_enfance-c-sorsana-63-1.pdf',
        },
        {
          description:
            'Morphismes fondamentaux dans les processus de conceptualisation',
          title:
            '1991 in Les sciences cognitives en débat, Editions du CNRS (Ed.) , pp.15-28',
          link: '/texts/gvergnaud_1991_morphismes-fondamentaux_sciences-cognitives-debat.pdf',
        },
      ]}
    />
  );
};

export default ConceptualFields;
