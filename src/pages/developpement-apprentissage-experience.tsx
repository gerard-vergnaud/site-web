import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const Development = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('development.title')}
      texts={[
        {
          description:
            "Le long terme et le court terme dans l'apprentissage des mathématiques",
          title:
            '2010 (2-4 mars) in Colloque de Curitiba, Brésil, Conférence prononcée',
          link: '/texts/gvergnaud_2010_long-terme-court-terme_colloque-curitiba.pdf',
        },
        {
          description:
            "Long terme et court terme dans l'apprentissage de l'algèbre",
          title:
            "1988 in Actes du Colloque franco-allemand de Didactique des Mathématiques et de l'Informatique nov 1986, Colette Laborde, La Pensée Sauvage, pp.189-199",
          link: '/texts/gvergnaud_1988_apprentissage-algebre_colloque-franco-allemand.pdf',
        },
        {
          description: "Qu'est-ce qu'apprendre ?",
          title:
            "2002 in Conférence introductive au Colloque International de l'IUFM De l'Académie de Créteil « Pour une école inclusive…quelle formation pour les enseignants ? », présentée aussi au Brésil en 2007",
          link: '/texts/gvergnaud_2002_qu-est-ce-qu-apprendre_colloque-iufm-creteil.pdf',
        },
        {
          description: "Le développement cognitif de l'adulte",
          title:
            '1999 in Traité des Sciences et des techniques de la Formation. P. Carré et P. Caspar, Paris, Dunod (Eds)',
          link: '/texts/gvergnaud_1999_developpement-cognitif-adulte_sciences-techniques-formation.pdf',
        },
        {
          description:
            "Par quelles compétences mathématiques l'école maternelle est-elle concernée ?",
          title:
            "1988 in Actes du 60ème Congrès de l'AGIEM, Vivre à l'Ecole Maternelle, apprendre, grandir, Toulouse, France, pp.51-55",
          link: '/texts/gvergnaud_1988_competences-mathematiques-maternelle_congres-agiem-toulouse-60.pdf',
        },
        {
          description: 'Questions vives de la psychologie du développement',
          title: '1988 in Bulletin de Psychologie, n° 390, pp.450-457.',
          link: '/texts/gvergnaud_1988_questions-vives-developpement_bulletinpsychologie-390.pdf',
        },
        {
          description:
            'Le placement de données numériques ou quasi numériques sur une droite',
          title:
            '2017 (octobre Belfort) in Colloque A.S.I. 9, à la demande de Régis Gras',
          link: '/texts/gvergnaud_2017_placement-donnees-droite_colloque-belfort.pdf',
        },
      ]}
    />
  );
};

export default Development;
