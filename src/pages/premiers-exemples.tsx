import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';
import { getLink } from '../utils/config';

const FirstExamples = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('firstExamples.title')}
      details={t('firstExamples.details')}
      texts={[
        {
          link: getLink(
            '/texts/gvergnaud_1987_fonction-action-symbolisation-enfant_psychologie.pdf'
          ),
          description:
            "Les fonctions de l'action et de la symbolisation dans la formation des connaissances chez l'enfant",
          title:
            '1987 in Psychologie, Piaget J., Mounoud P., Bronckart J.P., Encyclopédie de La Pléiade, Paris, Gallimard (Ed.), pp.821-844',
        },
        {
          link: getLink(
            '/texts/gvergnaud_1982_cognitive-tasks-operation_addition-subtraction.pdf'
          ),
          description:
            'A classification of cognitive tasks and operations of thought involved in addition and subtraction problems',
          title:
            '1982 in Addition and subtraction : a cognitive perspective, Hillsdale NJ, Lawrence Erlbaum,  Carpenter T.P., Moser J.M., Romberg T.A. (Eds), pp.39-59',
        },
        {
          link: getLink(
            '/texts/gvergnaud_1976_structures-additives_revue-francaise-pedagogie.pdf'
          ),
          description: 'Structures additives et complexité psychogénétique',
          title:
            '1976 in Revue française de Pédagogie, avec Catherine Durand, volume 36 pp.28-43',
        },
        {
          link: getLink(
            '/texts/gvergnaud_1994_quatre-operations-arithmetiques_nathan-enseigner-apprendre-comprendre.pdf'
          ),
          description:
            "Les quatre opérations de l'arithmétique sont-elles quatre ?",
          title:
            '1994 in Les Entretiens Nathan. Enseigner, Apprendre, Comprendre. Paris, Nathan (Ed.), Actes IV, pp.163-180',
        },
        {
          link: getLink(
            '/texts/gvergnaud_2007_malices-soustraction_vita-scolastica.pdf'
          ),
          description: 'Les malices de la soustraction',
          title:
            "2007 in Vita Scolastica, traduit en italien avec Bruno D'amore",
        },
        {
          link: getLink(
            '/texts/gvergnaud_1983_multiplicative-structures_acquisition-mathematics.pdf'
          ),
          description: 'Multiplicative structures',
          title:
            '1983 in Acquisition of mathematics concepts and processes, Lesh R. Landau M., Academic Press (Ed.), pp.127-174',
        },
        {
          link: getLink(
            '/texts/gvergnaud_1998_arithmetique-algebre_colloque-rethymnon.pdf'
          ),
          description:
            "De l'arithmétique à l'algèbre ; quelques difficultés au début de l'école secondaire",
          title:
            '1998 (avril) in Actes du 1er Colloque en Didactique des Mathématiques, Réthymnon, Grèce',
        },
        {
          link: getLink(
            '/texts/gvergnaud_2011_activites-familieres-creatives_colloque-lebahar.pdf'
          ),
          description:
            'Penser à la fois les activités familières et les activités créatives : le concept de schème',
          title:
            "2011(26-27 janvier) in Colloque en hommage à J-C Lebahar, A tribute to Jean-Charles Lebahar La créativité peut-elle s'enseigner ?, Marseille",
        },
      ]}
    />
  );
};

export default FirstExamples;
