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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from '@chakra-ui/react'
//   import { Logo } from './Logo'
import { MdMenu, MdPhone } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Navbar: React.FC<BoxProps> = (props) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const handlePhone = () => window.open('tel:928.985.0575')

  return (
    <Box
      as="section"
      bg="white"
      {...props}
    >
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow="sm"
      >
        {isDesktop ? (
          <Container
            py={{ base: '4', lg: '5' }}
            maxW="6xl"
          >
            <HStack
              spacing="10"
              justify="space-between"
            >
              <Heading fontSize="lg">Sedona Guest Services</Heading>
              <Flex
                justify="space-between"
                flex="1"
                gap={10}
              >
                <ButtonGroup
                  variant="link"
                  spacing="8"
                >
                  <Button
                    variant="link"
                    as={Link}
                    to="/about"
                  >
                    About Us
                  </Button>
                  <Button
                    variant="link"
                    as={Link}
                    to="/tips"
                  >
                    Tips for Owners
                  </Button>
                  <Button
                    variant="link"
                    as={Link}
                    to="/regulations"
                  >
                    Area Regulations
                  </Button>
                  <Button
                    variant="link"
                    as={Link}
                    to="/cleaning"
                  >
                    Cleaning
                  </Button>
                  <Button
                    variant="link"
                    as={Link}
                    to="/reviews"
                  >
                    Reviews
                  </Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Button
                    leftIcon={<MdPhone />}
                    onClick={handlePhone}
                  >
                    928.985.0575
                  </Button>
                  <Button
                    colorScheme="linkedin"
                    as={Link}
                    to="/contact"
                  >
                    Contact
                  </Button>
                </HStack>
              </Flex>
            </HStack>
          </Container>
        ) : (
          <Flex
            px={5}
            justify="space-between"
            align="center"
          >
            <Heading fontSize="lg">Sedona Guest Services</Heading>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Mobile menu"
                icon={<MdMenu fontSize="3xl" />}
                colorScheme="linkedin"
                variant="ghost"
                borderRadius={0}
              />
              <MenuList>
                <MenuItem
                  as={Link}
                  to="/about"
                  fontSize="2xl"
                >
                  About Us
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="/tips"
                  fontSize="2xl"
                >
                  Tips for Owners
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="/regulations"
                  fontSize="2xl"
                >
                  Area Regulations
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="/cleaning"
                  fontSize="2xl"
                >
                  Cleaning
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="/reviews"
                  fontSize="2xl"
                >
                  Reviews
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="/contact"
                  fontSize="2xl"
                >
                  Contact
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="tel:928.985.0575"
                  fontSize="2xl"
                >
                  Call Now
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Box>
    </Box>
  )
}
