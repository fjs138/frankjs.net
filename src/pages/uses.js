import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import usestyles from './uses.module.scss';

export default function UsesPage() {
  return (
    <Layout>
      <Head title="Uses" />
      <h1>./Uses</h1>
      <h2>What I use in my daily workflow:</h2>
      <h3>🔧 Development</h3>
      <ul>
        <li><a href="https://www.jetbrains.com"target="_blank" rel="noreferrer"> WebStorm</a> {' '} (IDE)</li>
        <li>
          <a href="https://airbnb.io/javascript/" target="_blank" rel="noreferrer">
            Airbnb Style
          </a>
          {' '}
          (Style Guide)
        </li>
        <li>
          <a href="https://binaryify.github.io/OneDark-Pro/#/?id=about" target="_blank" rel="noreferrer">
            One Dark
          </a>
          {' '}
          (Color Scheme)
        </li>
      </ul><p>
        While I continue to use Windows and Linux on a regular basis, I greatly
        prefer *nix systems, particularly MacOS.
      </p>
      <p>
       For light editing I like Visual Studio Code and
        Sublime Text.
      </p>
      <h3>📅️ Productivity</h3>
      <ul>
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
        <li><a href="https://www.microsoft.com/office" target="_blank" rel="noreferrer"> Office</a> {' '} (Office)</li>
        <li><a href="https://www.microsoft.com/edge"target="_blank" rel="noreferrer"> Edge</a> {' '} (Browser)</li>
      </ul>

      <h3>📱 Gear</h3>
      <ul>
        <li>MacBook Pro 16" (2019)</li>
        <li>Watch (S4, Stainless Steel)</li>
        <li>iPhone (11)</li>
        <li>iPad (6th)</li>
        <li>Airpods Pro</li>
        <li>Magic Keyboard & Mouse (1st)</li>
        <li>Audio-Technica AT2020 Microphone</li>
        <li>Micca PB42X Speakers</li>
        <li>Logitech C920 HD Pro Camera</li>
        <li>Staples Hyken Mesh Task Chair</li>
      </ul>
    </Layout>
  );
}
