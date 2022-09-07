import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import picture from '../images/gerard-vergnaud.jpg';
import { getLink } from '../utils/config';

const IndexPage = () => {
  const [t] = useTranslation();
  return (
    <main className="min-h-screen bg-primary text-light flex flex-col">
      <Helmet>
        <title>Gérard Vergnaud</title>
        <meta name="description" content={t('siteDescription')} />
      </Helmet>
      <div className="p-8">
        <div className="rounded-full w-32 h-32 overflow-hidden flex items-center align-center mx-auto">
          <img src={picture} alt="Gérard Vergnaud" />
        </div>
        <h1 className="mt-4 font-bold text-4xl text-center">Gérard Vergnaud</h1>
        <h2 className="mt-4 text-2xl text-center">{t('home.subtitle')}</h2>
        <section className="my-8 mx-auto max-w-2xl text-justify">
          <p className="styled-first-letter">
            Le but de ce site est de mettre à la disposition des collègues et de
            leurs étudiants, des contributions leur permettant de saisir
            certains des enjeux de la recherche en didactique, à la lumière de
            la psychologie cognitive. Les contributions empiriques ne sont pas
            moins essentielles que les considérations théoriques : elles
            s'appuient les unes les autres.
          </p>
          <p className="styled-first-letter pt-8">
            En même temps il faut prendre au sérieux les contenus de
            connaissance, explicites ou implicites, qui organisent l'activité en
            situation au cours des apprentissages, et de leur développement sur
            le long terme. Ces contenus de connaissance sont spécifiques de
            l'activité en jeu, de son domaine et de la visée personnelle de
            l'apprenant, professionnelle par exemple.
          </p>
          <p className="styled-first-letter pt-8">
            Didactiques des disciplines et didactiques professionnelles sont
            largement spécifiques des contenus de connaissance : c'est ce qui
            fait leur originalité par rapport à la pédagogie générale, la
            psychologie, ou les sciences humaines en général. Pourtant la
            psychologie est visiblement essentielle dans l'approche développée
            ici ; pourquoi ? parce qu'il s'agit de la pensée : de la pensée
            comme activité, comme représentation, comme conceptualisation.
          </p>
          <p className="styled-first-letter pt-8">
            La didactique, dans ses analyses empiriques et théoriques, ne peut
            pas se passer de la psychologie. Mais, réciproquement, la
            psychologie bénéficie en retour des recherches en didactique : par
            les exemples présentés par la didactique et leur analyse, et par
            l'épistémologie incontournable des rapports entre les situations
            auxquelles on est confronté et les formes d'activité progressivement
            développées pour s'y adapter.
          </p>
          <p className="styled-first-letter pt-8">
            Les exemples sont essentiels, et ils ne sont pas encore très
            nombreux parce que les recherches scientifiques en didactique ne
            sont pas encore à la hauteur des ambitions des chercheurs et des
            utilisateurs de leurs résultats.
          </p>
          <p className="styled-first-letter pt-8">
            Aussi bien, je demande aux lecteurs qui consulteront ce site, de ne
            pas aborder les textes de ce site comme on prend connaissance des
            textes de physique, d'histoire, de biologie, de géologie, ou de
            mathématiques, quand on est physicien, historien, biologiste,
            géologue, ou mathématicien professionnel. La raison en est simple :
            l'apprentissage et le développement des connaissances chez les
            élèves et les apprentis, à l'école ou dans la vie ordinaire, ne
            ressemble que de très loin, et toujours imparfaitement, aux
            connaissances issues de plusieurs siècles d'histoire, voire de
            millénaires. Même si, paradoxalement, le cheminement de
            l'apprentissage, ressemble à certains égards au cheminement de
            l'histoire : par les hésitations, les erreurs, la persistance des
            fausses routes.
          </p>
          <p className="styled-first-letter pt-8">
            Comme beaucoup d'exemples présentés ici concernent les
            mathématiques, il faut accepter que la didactique des mathématiques
            ne s'intéresse pas qu'aux succès, mais aussi aux balbutiements des
            élèves et à l'évolution de leurs erreurs, puisqu'elles ne sont pas
            toutes également négatives : certaines d'entre elles témoignent
            d'une prise de conscience non négligeable. La rationalité fait une
            partie de son chemin à travers des conceptualisations hésitantes.
          </p>
        </section>
        <ul className="flex flex-col mx-auto max-w-2xl text-lg">
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/premiers-exemples')}
            >
              {t('firstExamples.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/forme-operatoire-et-forme-predictive')}
            >
              {t('operatingForm.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/activite-representation-et-conceptualisation')}
            >
              {t('activityAndConcept.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/developpement-apprentissage-experience')}
            >
              {t('development.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/piaget-vygotski-frege-constructivisme')}
            >
              {t('piaget.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/premieres-annees-de-chercheur')}
            >
              {t('firstYears.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/didactique-professionnelle-culture-experience')}
            >
              {t('professional.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/epistemologie-psychologie-et-didactique')}
            >
              {t('epistemology.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/theorie-des-champs-conceptuels')}
            >
              {t('conceptualFields.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/textes-non-publies')}
            >
              {t('unpublished.title')}
            </a>
          </li>
          <li className="my-2">
            <a
              className="button button-inverted block"
              href={getLink('/annexes')}
            >
              {t('appendix.title')}
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
