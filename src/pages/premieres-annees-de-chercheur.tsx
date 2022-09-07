import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';
import { getLink } from '../utils/config';

const FirstYears = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('firstYears.title')}
      details={t('firstYears.details')}
      texts={[
        {
          description: 'Note sur un cas de fausse conservation',
          title: '1965 in Psychologie Française, N°10, pp.277-279',
          link: getLink(
            '/texts/gvergnaud_1965_note-cas-fausse-conservation_psychlogie-francaise-10.pdf'
          ),
        },
        {
          description: "Sur l'activité combinatoire des enfants de 8 ans",
          title: '1968 in Psychologie Française, N°14, pp.321-332',
          link: getLink(
            '/texts/gvergnaud_1968_activite-combinatoire-enfants_psychologie-francaise-14.pdf'
          ),
        },
        {
          description: 'Cheminements dans le permutoèdre chez les enfants',
          title:
            '1971 in Ordres totaux finis, Paris, Gauthier-Villars-Mouton, pp.133-139',
          link: getLink(
            '/texts/gvergnaud_1971_cheminements-permutoedre_ordres-totaux-finis.pdf'
          ),
        },
        {
          description: 'La simulation de la pensée',
          title:
            "1967 in L'année psychologique, Paul Fraisse, Presses Universitaires de France (Ed.), 67, 1, pp.135-151",
          link: getLink(
            '/texts/gvergnaud_1967_simulation-pensee_annee-psychologique-67-1.pdf'
          ),
        },
        {
          description: "Essai de classification des situations d'apprentissage",
          title: '1964 in Bulletin du CERP, N°13, pp.145-155',
          link: getLink(
            '/texts/gvergnaud_1964_essai-classification-apprentissage_bulletin-cerp-13.pdf'
          ),
        },
        {
          description: "De la réponse commune à l'algèbre de Boole",
          title: "1972 in L'année psychologique, 72, 2, pp.379-390",
          link: getLink(
            '/texts/gvergnaud_1972_algebre-boole_annee-psychologique-72-2.pdf'
          ),
        },
        {
          description: 'Conscience, activité et comportement',
          title:
            '1976 Compte rendu des contributions reçues au Congrès International de 1976 (18-25 juillet) in 21ème Congrès International de Psychologie de Paris, Compte rendu des contributions reçues',
          link: getLink(
            '/texts/gvergnaud_1976_conscience-activite-comportement_congres-paris.pdf'
          ),
        },
        {
          description:
            "L'élève face à la tâche : problèmes à résoudre, difficultés à surmonter",
          title:
            '1988 in European Journal of Psychology of Education, ISPA Springer (Eds), Numéro hors série pp.15-21',
          link: getLink('/texts/gvergnaud_1988_eleve-face-tache_paris.pdf'),
        },
        {
          description: 'The acquisition of arithmetical concepts',
          title: '1979 in Educational Studies in Mathematics, 10, pp.263-274',
          link: getLink(
            '/texts/gvergnaud_1979_acquisition-arithmetical-concepts_educational-studies-mathematics-10.pdf'
          ),
        },
        {
          description:
            'Développement et fonctionnement cognitifs dans le champ conceptuel des structures additives',
          title:
            '1990 in Développement et fonctionnement cognitifs, Gaby Netchine-Grynberg, Paris, P.U.F., pp.261-277',
          link: getLink(
            '/texts/gvergnaud_1990_champ-conceptuel-structures-additives_developpement-fonctionnement-cognitif.pdf'
          ),
        },
        {
          description:
            'Règles de production et représentation calculable dans la solution de problème',
          title:
            "1975 (environ) Simple Texte introductif à la recherche d'un cadre théorique (8 pages)",
          link: getLink(
            '/texts/gvergnaud_1975_representation-calculable_texte-recherche-theorique.pdf'
          ),
        },
        {
          description: 'Relations entre grandeurs et notions mathématiques',
          title: '1978 Texte non publié (14 pages)',
          link: getLink(
            '/texts/gvergnaud_1978_relations-grandeurs_texte-recherche.pdf'
          ),
        },
        {
          description:
            "Didactique de l'informatique et acquisitions cognitives en programmation",
          title:
            '1987 in Psychologie Française, Avec Janine Rogalski, N°32, pp.267-274',
          link: getLink(
            '/texts/gvergnaud_1987_acquisitions-cognitives-programmation_psychologie-francaise-32.pdf'
          ),
        },
        {
          description: "Qu'est-ce que le cognitif ?",
          title:
            '1988 Contribution au débat de la Société française de Psychologie',
          link: getLink(
            '/texts/gvergnaud_1988_qu-est-ce-cognitif_debat-societe-francaise-psychologie.pdf'
          ),
        },
      ]}
    />
  );
};

export default FirstYears;
