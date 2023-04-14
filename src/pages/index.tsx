import React from 'react'
import Head from 'next/head'
import {FaUser ,FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagram, FaFileAlt} from 'react-icons/fa'

import Link from '@/components/Link'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Luca Merighi | Links</title>
      </Head>

      <main className="
        w-full max-w-screen-lg
        flex flex-col gap-6 items-center">
        <header className="
          flex flex-col gap-4 items-center">
          <img 
          src="https://avatars.githubusercontent.com/u/73050019?v=4"
          alt="Foto de Perfil" className="rounded-full w-1/3" />

          <h1 className="text-2xl text-slate-800 font-bold text-center">
            Luca Merighi
          </h1>
          <p className="text-xl text-slate-700 font-normal text-center">
            Desenvolvedor & Designer Web
          </p>
        </header>

        <section className="w-full flex flex-col gap-4 items-center">
          <Link
            url=""
            icon={<FaUser />}
            text="Portfólio (TODO)" />
          <Link
            url="https://www.linkedin.com/in/luca-merighi-8305b4248/"
            icon={<FaLinkedin />}
            text="LinkedIn" />
          <Link
            url="https://github.com/luca-merighi"
            icon={<FaGithubSquare />}
            text="GitHub" />
          <Link
            url="https://www.facebook.com/profile.php?id=100091594221299"
            icon={<FaFacebookSquare />}
            text="Facebook" />
          <Link
            url="https://www.instagram.com/luca.merighii/"
            icon={<FaInstagram />}
            text="Instagram" />
          <Link
            url="https://docs.google.com/forms/d/1YYNyZQlnCgsWYUolu40Mf1BZ80Bgw4lJF9_RnqKGEmg/edit"
            icon={<FaFileAlt />}
            text="Solicitar um Orçamento" />
        </section>
      </main>
    </React.Fragment>
  )
}