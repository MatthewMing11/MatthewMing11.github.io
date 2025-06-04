import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About',
    Svg: require('@site/static/img/man-svgrepo-com.svg').default,
    description: (
      <>
        Recently graduated computer science student eager to develop software.
      </>
    ),
  },
  {
    title: 'Interests',
    Svg: require('@site/static/img/photo-svgrepo-com.svg').default,
    description: (
      <>
        Passionate about creating software and making visually-stunning computer simulations in OpenGL/WebGL. <br></br>
        Loves playing card and board games.<br></br>
      </>
    ),
  },
  {
    title: 'Skills',
    Svg: require('@site/static/img/macbook-pro-svgrepo-com.svg').default,
    description: (
      <>
        Python, C/C++, Typescript, React, SQL(PostgreSQL), C#(.NET)
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
