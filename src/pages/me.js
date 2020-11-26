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
        ☎️ Phone:
        {' '}
        <Obfuscate tel="267-977-8356" />
      </h3>
      <h3>
        📫 Email:
        {' '}
        <Obfuscate
          email="fjs138@gmail.com"
          headers={{
            subject: 'Hi Frank!',
            // cc: 'friend@coston.cool',
          }}
        />
      </h3>
      <h3>
        🤝 Business:
        {' '}
        <a target="_blank" rel="noreferrer" href="https://builtbyfrank.com">
          Built By Frank
        </a>
      </h3>

      <h3>
        👔
        {' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/franksantaguida/"
        >
          LinkedIn
        </a>
      </h3>
      <h3>
        🤖
        {' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/fjs138">
          Github
        </a>
      </h3>
      <h3>
        📝
        {' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://builtbyfrank.com/Frank_Santaguida_Resume.pdf"
        >
          Resume
        </a>
      </h3>
    </Layout>
  );
}
