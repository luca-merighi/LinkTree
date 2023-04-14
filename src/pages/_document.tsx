import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <body className="
      font-roboto md:bg-[url('/blob.svg')] bg-no-repeat bg-center bg-cover 
      bg-slate-50 h-screen w-screen flex items-center justify-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
