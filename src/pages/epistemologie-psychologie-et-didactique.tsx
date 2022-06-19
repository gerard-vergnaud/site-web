import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const Epistemology = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('epistemology.title')}
      texts={[
        {
          description:
            'Quelques enjeux scientifiques de la recherche en éducation et en formation sur le thème « La recherche en Psychologie »',
          title:
            "1988 (5-7 mai) in Conférence de la Société Française de Psychologie à Tours «Penser l'innovation dans les systèmes de formation »",
          link: '/gerard-vergnaud/texts/gvergnaud_1988_quelques-enjeux-scientifiques_colloque-tours.pdf',
        },
        {
          description:
            'Psychologie et didactique : quels enseignements théoriques et méthodologiques pour la recherche en psychologie ?',
          title: '1987 (mars) in Colloque Clermont-Ferrand, France',
          link: '/gerard-vergnaud/texts/gvergnaud_1987_enseignements-theoriques_colloque-clermont-ferrand.pdf',
        },
        {
          description:
            "Pourquoi la recherche en psychologie ne peut-elle se passer de la didactique et de l'épistémologie",
          title:
            '2000 in Etudes Vietnamiennes, Psychologie, Enfances, Cultures, Educations, N°137, pp.21-28',
          link: '/gerard-vergnaud/texts/gvergnaud_2000_recherche-didactique-epistemologie_psychologie-enfances-cultures-educations-137.pdf',
        },
        {
          description: 'Epistémologie et psychologie : une relation nécessaire',
          title: '2012 (20-21 septembre) in Rencontre à Nancy, France',
          link: '/gerard-vergnaud/texts/gvergnaud_2012_epistemologie-psychologie_rencontre-nancy.pdf',
        },
        {
          description:
            "Quelles contributions attendre de l'épistémologie, de la psychologie, de la psychanalyse ?",
          title:
            '2000 in Colloque « Le rapport avec le savoir », Sfax, Tunisie',
          link: '/gerard-vergnaud/texts/gvergnaud_2000_quelles-contributions_colloque-sfax.pdf',
        },
        {
          description: 'Pourquoi le couple théorique situation/schème',
          title:
            '2009 in Symposium sur le concept de situation Lenoir-Tupin, Nantes, France',
          link: '/gerard-vergnaud/texts/gvergnaud_2009_couple-situation-scheme_symposium-nantes.pdf',
        },
        {
          description:
            "Le couple situation/schème, clef de voûte d'une théorie de l'expérience",
          title: '1999 in Symposium de Sherbrooke, Canada',
          link: '/gerard-vergnaud/texts/gvergnaud_1999_situation-scheme-cle-de-voute_symposium-sherbrooke.pdf',
        },
      ]}
    />
  );
};

export default Epistemology;
