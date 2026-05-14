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
        I use{' '}
        <s>
          <a href="https://www.jetbrains.com" target="_blank" rel="noreferrer">
            WebStorm
          </a>
        </s>{' '}
        <a href="https://cursor.sh" target="_blank" rel="noreferrer">
          Cursor
        </a>{' '}
        as my primary IDE, using the{' '}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
          target="_blank"
          rel="noreferrer"
        >
          Shades of Purple
        </a>{' '}
        theme.
      </p>

      <p>
        I prefer{' '}
        <a href="https://vercel.com" rel="noreferrer" target="_blank">
          Vercel
        </a>{' '}
        for CI/CD, after previously using{' '}
        <s>
          <a href="https://netlify.com" rel="noreferrer" target="_blank">
            Netlify
          </a>
        </s>
        .
      </p>

      <p>
        I use{' '}
        <a href="https://mermaid.js.org" target="_blank" rel="noreferrer">
          Mermaid
        </a>{' '}
        for diagrams, system design documentation, and architecture schematics.
      </p>

      <p>
        While I continue to use Windows regularly, I greatly prefer <em>nix</em>{' '}
        systems.
      </p>

      <h3>📱 Gear</h3>
      <ul>
        <li>MacBook Pro M5 Pro 16" (2026)</li>
        <li>iPhone (Air)</li>
        <li>MX Keys Mini Wireless Keyboard + MX Mouse | Logitech</li>
        <li>Beats Studio Pro Headphones</li>
        <li>Micca PB42X Speakers</li>
        <li>Audio-Technica AT2020 Microphone</li>
        <li>Logitech C920 HD Pro Camera</li>
        <li>Staples Hyken Mesh Task Chair</li>
      </ul>
    </Layout>
  );
}
