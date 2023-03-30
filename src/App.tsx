import { Button, Container, Divider, Heading, Image } from '@chakra-ui/react'
import { ElfsightWidget } from 'react-elfsight-widget'
import SedonaHeaderImage from './assets/sedona-header.jpg'

function App() {
  const handleContact = () => window.open('mailto:ohmigom@gmail.com')
  return (
    <Container maxW="6xl">
      <Image src={SedonaHeaderImage} />
      <Heading>Sedona Guest Services</Heading>
      <Button
        colorScheme="linkedin"
        onClick={handleContact}
      >
        Contact
      </Button>
      <Divider my={10} />
      <ElfsightWidget widgetID="d254839d-abb3-4085-b4a1-59a38451e70f" />
    </Container>
  )
}

export default App
