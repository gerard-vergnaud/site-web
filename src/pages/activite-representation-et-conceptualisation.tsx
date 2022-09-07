import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';
import { getLink } from '../utils/config';

const ActivityAndConcept = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('activityAndConcept.title')}
      texts={[
        {
          description:
            'Concepts et schèmes dans une théorie opératoire de la représentation',
          title:
            '1985 in Psychologie Française, Les Représentations, N°30, pp.245-252',
          link: getLink(
            '/texts/gvergnaud_1985_concepts-schemes_psychologie-francaise-30.pdf'
          ),
        },
        {
          description: 'Catégories logiques et invariants opératoires',
          title:
            '1990 in Archives de Psychologie, Hommage à Pierre Gréco, N° 58, pp.145-149',
          link: getLink(
            '/texts/gvergnaud_1990_categories-logiques-invariants-operatoires_archives-psychologie-58.pdf'
          ),
        },
        {
          description: 'Invariants quantitatifs, qualitatifs et relationnels',
          title:
            '1976-1977, in Bulletin de psychologie, Hommage à Jean Piaget, N° 327, pp.387-389',
          link: getLink(
            '/texts/gvergnaud_1976_invariants-quantitatifs_bulletin-psychologie-327.pdf'
          ),
        },
        {
          description:
            'Représentation et activité : deux concepts étroitement associés',
          title:
            '2006 (mars) in Congreso Internacional Logico-Matematica -en Educación Infantil- Madrid',
          link: getLink(
            '/texts/gvergnaud_2006_representation-activite_congres-madrid.pdf'
          ),
        },
        {
          description:
            "L'explication est-elle autre chose que la conceptualisation ?",
          title:
            "2002 in Expliquer et Comprendre en Sciences de l'Education, Leutenegger F.et Saada-Robert, Louvain la Neuve, De Boeck (Ed.), pp.31-44",
          link: getLink(
            '/texts/gvergnaud_2002_explication-conceptualisation_expliquer-comprendre.pdf'
          ),
        },
        {
          description: 'Pourquoi parler autant de conceptualisation ?',
          title:
            '2003 (9 et 10 décembre) in Actes du colloque Conceptualisation et surdité, Synthèse des travaux, Suresnes',
          link: getLink(
            '/texts/gvergnaud_2003_pourquoi-conceptualisation_colloque-suresnes-surdite.pdf'
          ),
        },
      ]}
    />
  );
};

export default ActivityAndConcept;
