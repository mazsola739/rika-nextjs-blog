/**
 * Starts the Next.js dev server and opens the app in the default browser
 * once the server responds.
 *
 * Usage: `yarn dev` (set NO_OPEN=1 to skip opening the browser).
 */
import { exec, spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const PORT = process.env.PORT ?? '1111';
const URL = `http://localhost:${PORT}`;

const require = createRequire(import.meta.url);
const nextBin = require.resolve('next/dist/bin/next');

// Turbopack is the default bundler since Next.js 16, no flag needed.
const server = spawn(process.execPath, [nextBin, 'dev', '-p', PORT], { stdio: 'inherit' });
server.on('exit', (code) => process.exit(code ?? 0));

/** Opens a URL in the default browser of the current OS. */
const openBrowser = (url) => {
  const command = process.platform === 'win32' ? `start "" "${url}"` : process.platform === 'darwin' ? `open "${url}"` : `xdg-open "${url}"`;
  exec(command, (error) => {
    if (error) console.log(`Could not open the browser, open ${url} manually.`);
  });
};

/** Polls the dev server until it answers, then opens the browser. */
const openWhenReady = async () => {
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline && server.exitCode === null) {
    try {
      // Requesting the page also compiles it, so the browser opens on a ready page.
      await fetch(URL);
      openBrowser(URL);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
};

if (!process.env.NO_OPEN) openWhenReady();
