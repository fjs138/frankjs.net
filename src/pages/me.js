import React from 'react';
import Obfuscate from 'react-obfuscate';
import Layout from '../components/layout';
import Head from '../components/head';

export default function MePage() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>./Me</h1>
     <h3>
  ☎️ Phone:{' '}
  <Obfuscate tel="267-977-8356" />
</h3>

<h3>
  📫 Email:{' '}
  <Obfuscate
    email="fjs138@gmail.com"
    headers={{
      subject: 'Hi Frank!',
    }}
  />
</h3>

<h3>
  🔗 LinkedIn:{' '}
  <a href="https://www.linkedin.com/in/frankjs" target="_blank" rel="noreferrer">
    linkedin.com/in/frankjs
  </a>
</h3>

<h3>
  📄 Resume:{' '}
  <a href="/resume.pdf" target="_blank" rel="noreferrer">
    View Resume
  </a>
</h3>

<h3>
  💻 GitHub:{' '}
  <a href="https://github.com/fjs138" target="_blank" rel="noreferrer">
    github.com/fjs138
  </a>
</h3>

<h3>
  🏢 Business:{' '}
  <a href="https://frankjs.net" target="_blank" rel="noreferrer">
    frankjs.net
  </a>
</h3>

    </Layout>
  );
}
