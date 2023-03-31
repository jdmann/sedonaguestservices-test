import { Box, BoxProps, Container, Text } from '@chakra-ui/react'

export const Footer: React.FC<BoxProps> = (props) => {
  return (
    <Box
      as="section"
      bg="linkedin.500"
      boxShadow="sm"
      textAlign="center"
      {...props}
    >
      <Container
        py={{ base: '4', lg: '5' }}
        maxW="6xl"
      >
        <Text>&copy; 2023 Sedona Guest Services LLC; All Rights Reserved. </Text>
      </Container>
    </Box>
  )
}
