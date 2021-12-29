import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Entiende los porqués',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Todo tiene una razón de ser y una historia. Conocerlas ayuda a aprender los conceptos,
        y facilita recordarlos.
      </>
    ),
  },
  {
    title: 'Céntrate en lo esencial',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Para que un ordenador funcione como queremos hay que tener en cuenta
        una infinidad de detalles. Pero hay que empezar por lo esencial.
      </>
    ),
  },
  {
    title: 'Teoría y práctica',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Contiene gran cantidad de ejercicios para practicar lo aprendido
        en la teoría, mejorando la comprensión y la retención.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
