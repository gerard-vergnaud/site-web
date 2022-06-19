import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const OperatingForm = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('operatingForm.title')}
      texts={[
        {
          description:
            'La forme opératoire et la forme prédicative de la connaissance',
          title:
            "2010 (septembre) in Conférence prononcée à l'Université d'Aracaju, à l'invitation de Bernard Charlot",
          link: '/gerard-vergnaud/texts/gvergnaud_2010_forme-operatoire-predicative_conference-aracaju.pdf',
        },
        {
          description:
            "Relations entre conceptualisations dans l'action et signifiants langagiers et symboliques",
          title:
            '2016 (1-6 novembre) Symposium latino-américain de didactique de mathématique, Bonito, Brésil',
          link: '/gerard-vergnaud/texts/gvergnaud_2016_signifiants-langagiers-symboliques_conference-bonito.pdf',
        },
        {
          description: "Au fond de l'action, la conceptualisation",
          title:
            "1996 in Savoirs théoriques et savoirs d'action, J. M. Barbier, Paris Presses Universitaires de France (Ed.), pp.275-292",
          link: '/gerard-vergnaud/texts/gvergnaud_1996_fond-action-conceptualisation_savoirs-theoriques-savoirs-action.pdf',
        },
        {
          description:
            'Signifiants et signifiés dans une approche psychologique de la représentation',
          title:
            "1993 in Les Sciences de l'Education,  AECSE-INRP, 1-3/1993, pp.9-16",
          link: '/gerard-vergnaud/texts/gvergnaud_1993_signifiants-signifies_sciences-education-1-3.pdf',
        },
        {
          description: 'Pourquoi tant de bruit sur la compétence ?',
          title:
            '2004 in Nouveaux Regards n°24, Revue du Syndicat National du Second Degré, SNES-FSU (à la demande de Louis Weber), pp.20-24',
          link: '/gerard-vergnaud/texts/gvergnaud_2004_pourquoi-bruit-competence_snes-nouveauxregards-24.pdf',
        },
        {
          description:
            'La forme opératoire de la connaissance : un beau sujet de de recherche fondamentale et appliquée',
          title:
            '1999 in Entreprises et compétences : le sens des évolutions. Les Cahiers des clubs CRIN, ÉCRIN (Ed.) Paris',
          link: '/gerard-vergnaud/texts/gvergnaud_1999_forme-operatoire-connaissance_entreprises-competences-crin.pdf',
        },
        {
          description: 'Le schème est-il mort ?',
          title:
            "2000 (Mai) in Colloque EPS à l'INRP:  Réponse à une demande forte des collègues d'EPS à l'INRP",
          link: '/gerard-vergnaud/texts/gvergnaud_2000_scheme-est-il-mort_colloque-eps-inrp.pdf',
        },
      ]}
    />
  );
};

export default OperatingForm;
