import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.scss';
import Button from '@mui/material/Button';

const features = [
  {
    title: 'Subjects',
    content:
      `The following subjects are stessed as points of emphasis: Programming, Computer Architecture, Algorithms and Data Structures, Math for CS, Operating Systems, Computer Networking, Databases, Languages and Compilers, Distributed Systems. Of course, other subjects may well be quite valuable to explore, but these are some of the major macro-level categories. Gaining knowledge, experience, and expertise in each of these fields will yield high dividends as an engineer.`,
  },
  {
    title: 'Courses',
    content:
      `It is possible to simply work through the resources listed on teachyourselfcs.com on your own. But doing so without any pre-defined structure can be a real challenge. Part of Bradfield's goal is to provide helpful structure and community in trying to ensure time is spent in the most efficient manner as possible. Being in an actual course with others for which pay money also provides social and monetary accountability. Right now Bradfield offers two courses, namely "Software Systems: Behind the Abstractions" (8 weeks) and "The Bradfield Computer Science Intensive (12 months)."`
  },
  {
    title: 'Resources',
    content:
      `Apart from resources provided directly from coursework, most suggested resources come from the teachyourselfcs.com site. Specifically, books and video lectures are the primary learning mediums that Bradfield promotes. Of course, coursework aims to put theory into practice in actually building a variety of different things that make direct use of the engineering knowledge being promoted.`,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Bradfield CSI'}
    >
      <div className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
            alt="LeetCode handbook logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">Bradfield School of Computer Science</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted} >
            <Button variant="contained" color="inherit">
              <Link className={styles.checkItOut} to={useBaseUrl('docs/intro')}>
                <span style={{ fontFamily: 'IBM Plex Sans' }}>Check it out</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;