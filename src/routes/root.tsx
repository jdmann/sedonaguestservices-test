import { Box, Container } from '@chakra-ui/react'
import { Outlet, redirect } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const loader = () => {
  redirect('/reviews')
}

export const Root = () => {
  return (
    <>
      <Navbar />

      <Box
        bg="linkedin.50"
        minH="100vh"
      >
        <Container
          maxW="6xl"
          pt={5}
          pb={10}
        >
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  )
}
