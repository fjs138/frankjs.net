import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import usestyles from './uses.module.scss';

export default function UsesPage() {
  return (
    <Layout>
      <Head title="Uses" />
      <h1 className="page-title">./Uses</h1>
      <h2>What I use in my daily workflow:</h2>
      <h3>🔧 Development</h3>
      <p>
        I use
        {' '}
        <a href="https://www.jetbrains.com" target="_blank" rel="noreferrer">
          {' '}
          WebStorm
        </a>
        {' '}
        as my IDE, with
        {' '}
        <a
          href="https://binaryify.github.io/OneDark-Pro/#/?id=about"
          target="_blank"
          rel="noreferrer"
        >
          One Dark
        </a>
        {' '}
        as my color scheme.
      </p>
        <p>
          Almost everything I code uses
          {' '}
          <a href="https://git-scm.com/">git</a>
          {' '}
          for version control. I use <a href="https://heroku.com" rel="noreferrer" target="_blank">
          {' '}
          Heroku
          {' '}
        </a> and <a href="https://netlify.com" rel="noreferrer" target="_blank">
          {' '}
          Netlify
          {' '}
        </a> for CI/CD.
        </p>
<p>
        For light editing I like
        {' '}
        <a
          href="https://code.visualstudio.com/"
          rel="noreferrer"
          target="_blank"
        >
          Visual Studio Code
        </a>
        {' '}
        and <a
  href="https://sublimetext.com/"
  rel="noreferrer"
  target="_blank"
>
          Sublime Text

            </a>.
</p>
      <p>
        I make an effort to write clean, readable code. <br/>As part of this, I have
        started following
        {' '}
        <a
          href="https://airbnb.io/javascript/"
          target="_blank"
          rel="noreferrer"
        >
          Airbnb's
        </a>{' '}
        style guide. I also use
        {' '}
        <a href="https://www.eslint.org" rel="noreferrer" target="_blank">
          ESLint{' '}
        </a>
         and <a href="https://www.prettier.io" rel="noreferrer" target="_blank">
        Prettier
      </a>.
      </p>
      <p>
        While I continue to use Windows regularly, I greatly prefer *nix
        systems.
      </p>
      <h3>📅️ Productivity</h3>
      <ul>
        <li>
          <a
            href="https://www.microsoft.com/edge"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Edge
          </a>
          {' '}
          (Browser)
        </li>
        <li>
          <a href="https://culturedcode.com" target="_blank" rel="noreferrer">
            Things
          </a>
          {' '}
          (GTD)
        </li>
        <li>
          <a href="https://evernote.com" target="_blank" rel="noreferrer">
            Evernote
          </a>
          {' '}
          (Notes)
        </li>
        <li>
          <a
            href="https://www.microsoft.com/office"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Office
          </a>
          {' '}
          (Office)
        </li>
      </ul>

      <h3>📱 Gear</h3>
      <ul>
        <li>MacBook Pro 16" (2019)</li>
        <li>Watch (S4, Stainless Steel)</li>
        <li>iPhone (11)</li>
        <li>iPad (6th)</li>
        <li>Magic Keyboard & Mouse (1st)</li>
        <li>Airpods Pro</li>
        <li>Micca PB42X Speakers</li>
        <li>Audio-Technica AT2020 Microphone</li>
        <li>Logitech C920 HD Pro Camera</li>
        <li>Staples Hyken Mesh Task Chair</li>
      </ul>
    </Layout>
  );
}
