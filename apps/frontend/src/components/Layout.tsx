import { ReactNode } from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'kakebo' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px" h="100vh">
      {children}
    </Container>
  </div>
)
