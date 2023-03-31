import Image from 'next/image'
import { Handbag } from 'phosphor-react';
import type { AppProps } from 'next/app'

import logoImage from '@/assets/logo.svg'
import { globalStyles } from '@/styles/global';
import { AppContainer, Header } from '@/styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header>
        <Image src={logoImage} alt='' />

        <button>
          <Handbag size={22} />
        </button>
      </Header>

      <Component {...pageProps} />
    </AppContainer>
  )
}
