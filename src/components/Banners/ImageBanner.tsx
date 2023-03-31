import { Flex, Grid, GridProps } from '@chakra-ui/react'

export const ImageBanner: React.FC<GridProps & { images: string[] }> = ({ images, ...rest }) => {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: `repeat(${images.length}, 1fr)` }}
      gap={5}
      {...rest}
    >
      {images.map((image) => (
        <Flex
          borderRadius="0.5rem"
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          height={{ base: '100vw', lg: '300px' }}
          justifyContent="center"
          alignItems="center"
          color="white"
          {...rest}
        ></Flex>
      ))}
    </Grid>
  )
}
