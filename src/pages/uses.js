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
        and have fully switched to{' '}
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
        Almost everything I build deploys through{' '}
        <a href="https://vercel.com" rel="noreferrer" target="_blank">
          Vercel
        </a>{' '}
        and{' '}
        <a href="https://netlify.com" rel="noreferrer" target="_blank">
          Netlify
        </a>{' '}
        for CI/CD.
      </p>

      <p>
        I use{' '}
        <a href="https://mermaid.js.org" target="_blank" rel="noreferrer">
          Mermaid
        </a>{' '}
        for diagrams, system design visuals, and architecture schematics.
      </p>

      <p>
        I am currently exploring{' '}
        <a
          href="https://airbnb.io/javascript/"
          target="_blank"
          rel="noreferrer"
        >
          Airbnb's
        </a>{' '}
        and{' '}
        <a
          href="https://google.github.io/styleguide/jsguide.html"
          target="_blank"
          rel="noreferrer"
        >
          Google's
        </a>{' '}
        style guides. I also use{' '}
        <a href="https://www.eslint.org" rel="noreferrer" target="_blank">
          ESLint
        </a>{' '}
        and{' '}
        <a href="https://www.prettier.io" rel="noreferrer" target="_blank">
          Prettier
        </a>
        .
      </p>

      <p>
        While I continue to use Windows regularly, I greatly prefer <em>nix</em>{' '}
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
            Edge
          </a>{' '}
          (Browser)
        </li>
        <li>
          <a href="https://culturedcode.com" target="_blank" rel="noreferrer">
            Things
          </a>{' '}
          (GTD)
        </li>
        <li>
          <a
            href="https://www.microsoft.com/office"
            target="_blank"
            rel="noreferrer"
          >
            Office
          </a>{' '}
          (Office)
        </li>
      </ul>

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
