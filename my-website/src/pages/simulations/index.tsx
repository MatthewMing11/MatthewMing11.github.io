import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Card from '@site/src/components/Card';
import Heading from '@theme/Heading';

import styles from './../index.module.css';
const sims = [
    {
        title:"Perlin Wave",
        website:"https://matthewming11.github.io/",// change to proper route once setup
        preview:require("@site/static/img/wave.png").default,
        description:(
            <>
            WIP
            Animation of wave grid using Perlin Noise.
            </>
        ),
        // source:"http://localhost:3000/docs/simulations/wave",//change this for production
        source:"https://matthewming11.github.io/docs/simulations/wave",
        tags:["typescript","react","ThreeJS"]
    },
    {
      title:"Mitchell Martin Sphere",
      website:"https://matthewming11.github.io/",// change to proper route once steup
      preview:require("@site/static/img/sphere.png").default,
      description:(
          <>
          WIP
          Animation of wireframe Sphere from Mitchell Martin website.
          </>
      ),
      // source:"http://localhost:3000/docs/simulations/wave",//change this for production
      source:"https://matthewming11.github.io/docs/simulations/sphere",
      tags:["typescript","react","ThreeJS"]
  }
]
function SimulationHeader() {
//   const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          Matthew's Simulations
        </Heading>
        List of simulations Matthew has created
      </div>
    </header>
  );
}
function CardRows(){
    return(
        <section className = "container container margin-top--lg">
        <div className="row">
            {sims.map((item) => (
                <div key={item.title} className = "col col--3 margin-bottom--lg">
                    <Card {...item}/>
                </div>
            ))}
        </div>
        </section>
    );
}
export default function Simulations(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <SimulationHeader />
      <main>
        <CardRows/>
      </main>
    </Layout>
  );
}
