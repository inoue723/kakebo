import { Layout } from '@/components/Layout'
import { Box, Center, Container } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <main>
        <Layout title="top">
          <Center h="100%">
            <Box padding="8" bg="gray.100" color="black" maxW="md">
              Getting started
            </Box>
          </Center>
        </Layout>
      </main>
    </>
  )
}
