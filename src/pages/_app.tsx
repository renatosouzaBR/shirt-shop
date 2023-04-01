import Image from 'next/image'
import type { AppProps } from 'next/app'

import logoImage from '@/assets/logo.svg'
import { globalStyles } from '@/styles/global';
import { AppContainer, Header } from '@/styles/pages/app';
import { ShoppingCart } from '@/components/ShoppingCart';
import { ShoppingCartProvider } from '@/contexts/shoppingCart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <ShoppingCartProvider>
        <Header>
          <Image src={logoImage} alt='' />
          <ShoppingCart />
        </Header>

        <Component {...pageProps} />
      </ShoppingCartProvider>
    </AppContainer>
  )
}
