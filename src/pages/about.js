import React from 'react';

// import { Container } from './styles';

import Layout from '../components/layout';
import SEO from "../components/seo"

function AboutPage() {
  return (
    <>
      <Layout>
        <SEO title="About" />
        <h1>Sobre nós</h1>
      </Layout>
    </>
  );
}

export default AboutPage;