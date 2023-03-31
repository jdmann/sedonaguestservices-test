import { Box, Container } from '@chakra-ui/react'
import { Outlet, redirect } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const loader = () => {
  redirect('/reviews')
}

export const Root = () => {
  return (
    <Box
      bg="linkedin.50"
      minH="100vh"
    >
      <Navbar />
      <Container maxW="6xl">
        <Outlet />
      </Container>
    </Box>
  )
}
