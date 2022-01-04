import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Crear',
    Svg: require('../../static/img/create.svg').default,
    description: (
      <>
        Programar es crear soluciones. Resolver problemas
        pondrá a prueba tu imaginación.
      </>
    ),
  },
  {
    title: 'Expresar',
    Svg: require('../../static/img/js.svg').default,
    description: (
      <>
        Programar es expresar tus ideas en un nuevo lenguaje:
        JavaScript (el lenguaje de la web y el más utilizado en la actualidad).
      </>
    ),
  },
  {
    title: 'Saber',
    Svg: require('../../static/img/science.svg').default,
    description: (
      <>
        La Ciencia de la Computación tiene su laboratorio (la CPU)
        y sus experimentos (los programas).
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
