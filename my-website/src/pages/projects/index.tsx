import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Card from '@site/src/components/Card';
import Heading from '@theme/Heading';

import styles from './../index.module.css';
const projs = [
    {
        title:"My Website",
        website:"https://matthewming11.github.io/",
        preview:require("@site/static/img/Placeholder.png").default,
        description:(
            <>
            The website that holds my projects and simulations.
            </>
        ),
        source:"http://localhost:3000/docs/projects/website",//change this for production
        tags:["typescript","react"]
    }
]
function ProjectHeader() {
//   const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          Matthew's Projects
        </Heading>
        List of projects Matthew has worked on
      </div>
    </header>
  );
}
function CardRows(){
    return(
        <section className = "container margin-top--lg">
        <div className="row">
            {projs.map((item) => (
                <div key={item.title} className = "col col--3 margin-bottom--lg">
                    <Card {...item}/>
                </div>
            ))}
        </div>
        </section>
    );
}
export default function Projects(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <ProjectHeader />
      <main>
        <CardRows/>
      </main>
    </Layout>
  );
}
