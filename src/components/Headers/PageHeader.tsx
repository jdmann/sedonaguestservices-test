import { Flex, FlexProps, Heading } from '@chakra-ui/react'
import SedonaHeaderImage from '../../assets/sedona-header.jpg'

export const PageHeader: React.FC<FlexProps> = ({ children, ...rest }) => (
  <Flex
    borderRadius="24px"
    backgroundImage={`url(${SedonaHeaderImage})`}
    backgroundSize="cover"
    height="300px"
    justifyContent="center"
    alignItems="center"
    color="white"
    {...rest}
  >
    <Heading
      size="2xl"
      textShadow="dark-lg"
    >
      {children}
    </Heading>
  </Flex>
)
