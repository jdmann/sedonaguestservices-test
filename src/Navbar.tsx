import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
//   import { Logo } from './Logo'
import { FiMenu, FiPhoneCall } from 'react-icons/fi'

export const Navbar: React.FC<BoxProps> = (props) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const handlePhone = () => window.open('tel:928.985.0575')
  const handleEmail = () => window.open('mailto:ohmigom@gmail.com')

  return (
    <Box
      as="section"
      bg="white"
      mb={{ base: 5 }}
      {...props}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow="sm"
      >
        <Container
          py={{ base: '4', lg: '5' }}
          maxW="6xl"
        >
          <HStack
            spacing="10"
            justify="space-between"
          >
            <Heading fontSize="lg">Sedona Guest Services</Heading>
            {isDesktop ? (
              <Flex
                justify="space-between"
                flex="1"
              >
                <ButtonGroup
                  variant="link"
                  spacing="8"
                >
                  <Button variant="link">Reviews</Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Button
                    leftIcon={<FiPhoneCall />}
                    onClick={handlePhone}
                  >
                    Call Now
                  </Button>
                  <Button
                    colorScheme="linkedin"
                    onClick={handleEmail}
                  >
                    Send Email
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}