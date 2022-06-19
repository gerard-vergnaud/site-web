import * as React from 'react';
import { useTranslation } from '../packages/i18n';
import TextListLayout from '../layouts/TextListLayout';

const Piaget = () => {
  const [t] = useTranslation();

  return (
    <TextListLayout
      title={t('piaget.title')}
      details={t('piaget.details')}
      texts={[
        {
          description: 'A propos de Frege',
          title:
            "1999 in Actes de SFIDA (Séminaire franco-italien de didactique de l'algèbre 1997-1999), Nice, IREM, 3-27",
          link: '/texts/gvergnaud_1999_a-propos-de-frege_seminaire-sfida-nice.pdf',
        },
        {
          description: "Education, the best portion of Piaget's heritage",
          title: '1996 in Swiss Journal of Psychology, 55 (2/3), pp.112-118',
          link: '/texts/gvergnaud_1996_education-best-piaget-heritage_swiss-journal-psychology-55.pdf',
        },
        {
          description:
            'Quelques idées fondamentales de Piaget intéressant la didactique',
          title:
            '1996 in Piaget et la didactique, Perspectives, n°97, Vol. 26, 1, mars 1996, pp.191-203',
          link: '/texts/gvergnaud_1996_idees-fondamentales-piaget-didactique_perspectives-26.pdf',
        },
        {
          description: 'Piaget visité par la didactique',
          title:
            "2001 in Intellectica. Revue de l'Association pour la Recherche Cognitive, n°33,2001/2, pp.107-123",
          link: '/texts/gvergnaud_2001_piaget-visite-didactique_intellectica-33-2.pdf',
        },
        {
          description:
            "La formation des concepts scientifiques ; Relire Vygotski et débattre avec lui aujourd'hui",
          title: '1989 in Enfance, tome 42, n°1-2,1989. pp.111-118',
          link: '/texts/gvergnaud_1989_relire-vygotski_enfance-42_-1-2.pdf',
        },
        {
          description:
            'Quels héritages de Vygotski dans la théorie des champs conceptuels ?',
          title:
            '2007 (23-24 avril) in Théorie historico-culturelle et recherches en éducation et en didactiques, Colloque Albi',
          link: '/texts/gvergnaud_2007_heritage-vygotski_colloque-albi.pdf',
        },
        {
          description: 'Colloque « constructivisme »',
          title: '1987 (juillet) in Colloque Constructivisme, Montréal, Québec',
          link: '/texts/gvergnaud_1987_colloque-constructivisme_montreal.pdf',
        },
      ]}
    />
  );
};

export default Piaget;
