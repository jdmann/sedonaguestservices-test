import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import { ElfsightWidget } from 'react-elfsight-widget'
import SedonaHeaderImage from './assets/sedona-header.jpg'
import { Navbar } from './Navbar'

function App() {
  return (
    <Box bg="linkedin.50">
      <Navbar />
      <Container maxW="6xl">
        <Flex
          borderTopRadius="24px"
          backgroundImage={`url(${SedonaHeaderImage})`}
          backgroundSize="cover"
          height="300px"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Heading
            size="2xl"
            textShadow="dark-lg"
          >
            Reviews
          </Heading>
        </Flex>

        <ElfsightWidget widgetID="d254839d-abb3-4085-b4a1-59a38451e70f" />
      </Container>
    </Box>
  )
}

export default App
