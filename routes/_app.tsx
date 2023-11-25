import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="max-w-5xl mx-auto">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Monopoly Go</title>
        <link rel="manifest" href="/manifest.webmanifest"></link>
        <link rel="icon" href="/favicon.ico" sizes="32x32"></link>
        <link rel="icon" href="/icon.svg" type="image/svg+xml"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
