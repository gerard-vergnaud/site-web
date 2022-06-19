import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const Professional = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('professional.title')}
      texts={[
        {
          description:
            "De la didactique des disciplines à la didactique professionnelle, il n'y a qu'un pas",
          title:
            '2008 in Travail et Apprentissages, Revue de didactique professionnelle, Raisons et Passions (Ed.)  n°1, pp.51-57',
          link: '/gerard-vergnaud/texts/gvergnaud_2008_discipline-didactique-professionnelle_travail-apprentissage-1.pdf',
        },
        {
          description:
            "Culture et conceptualisation : l'une ne va pas sans l'autre",
          title: "2008 in Carrefours de l'éducation 2008/2, n° 26, pp.83 à 98",
          link: '/gerard-vergnaud/texts/gvergnaud_2008_culture-conceptualisation_carrefours-education-26.pdf',
        },
        {
          description: 'Introduction',
          title:
            '1995 in « Performances Humaines et Techniques », colloque organisé par le club CRIN, pp.75-76',
          link: '/gerard-vergnaud/texts/gvergnaud_1995_introduction-competences_crin.pdf',
        },
        {
          description: 'Comment apprend-on ?',
          title:
            '2002 (1er juin) in Personnel n°430, Former Autrement, Texte à partir de deux exemples, pp 17-20',
          link: '/gerard-vergnaud/texts/gvergnaud_2002_comment-apprend-on_personnel-former-autrement-430.pdf',
        },
        {
          description:
            "Qu'est-ce que la didactique ? En quoi peut-elle intéresser la formation des adultes peu qualifiés ?",
          title: '1992 in Education Permanente, n° 111, pp.19-31',
          link: '/gerard-vergnaud/texts/gvergnaud_1992_didactique-formation-adultes-peu-qualifies_education-permanente-111.pdf',
        },
        {
          description:
            "Que peut apporter l'analyse de l'activité à la formation des enseignants et des formateurs ?",
          title:
            "2000 in Carrefours de l'Education, avec Renan Samurçay, N°10, pp.49-63",
          link: '/gerard-vergnaud/texts/gvergnaud_2000_formation-enseignants-formateurs_carrefours-education-10.pdf',
        },
        {
          description:
            'Rapport de synthèse et de discussion : colloque sur les adultes peu qualifiés',
          title:
            '1992 (24 et 25 juin) in Actes du colloque Formation et apprentissage des adultes peu qualifiés, La Documentation Française (Ed.)',
          link: '/gerard-vergnaud/texts/gvergnaud_1992_rapport-synthese_colloque-adultes-peu-qualifies.pdf',
        },
        {
          description:
            "Les difficultés individuelles d'apprentissage : compétences acquises, processus d'acquisition et déficits cognitifs",
          title:
            '1987-1988 in Groupe de travail « Adultes Bas Niveau de Qualification », Collectif',
          link: '/gerard-vergnaud/texts/gvergnaud_1987_difficultes-individuelles_groupe-travail-bas-niveau-qualification.pdf',
        },
        {
          description:
            'Conclusion : contribution au débat « Analyser et comprendre la pratique enseignante »',
          title:
            '2008 Texte court in Analyser et comprendre la pratique enseignante Vinatier, I. et Altet, M., PU Rennes (Ed.)',
          link: '/gerard-vergnaud/texts/gvergnaud_2008_contribution-debat_analyser-comprendre-pratique-enseignante.pdf',
        },
        {
          description:
            "Contribution au colloque « Rubinstein aujourd'hui : nouvelles figures de l'activité humaine »",
          title:
            "2007 in dein Rubinstein aujourd'hui. Nouvelles figures de l'activité humaine, Maison des sciences de l'homme (Ed.), Anthologie de textes choisis et édités par Valérie Nosulenko et Pierre Rabardel",
          link: '/gerard-vergnaud/texts/gvergnaud_2007_nouvelles-figures_colloque-rubinstein.pdf',
        },
      ]}
    />
  );
};

export default Professional;
