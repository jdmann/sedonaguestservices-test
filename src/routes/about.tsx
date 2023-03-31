import { Stack, Text } from '@chakra-ui/react'
import BathtubImage from '../assets/bathtub.jpeg'
import BedroomImage from '../assets/bedroom.jpeg'
import HouseImage from '../assets/house.jpeg'
import { ImageBanner } from '../components/Banners/ImageBanner'
import { PageHeader } from '../components/Headers/PageHeader'

export const About = () => (
  <Stack spacing={5}>
    <PageHeader>Welcome</PageHeader>
    <Text>
      Welcome to Sedona Guest Services! We provide high-quality and reliable management services for
      homeowners and property investors who wish to maximize their rental income while minimizing
      their workload.
    </Text>
    <Text>
      Whether you own a vacation home, a second property, or a series of rental units, we can help
      you manage every aspect of your rental business, from marketing and booking to cleaning and
      maintenance. Our team of experienced professionals is committed to delivering outstanding
      results and providing exceptional customer service.
    </Text>
    <Text>Our services include:</Text>

    <Text>
      <strong>Marketing and Booking:</strong> We will promote your property on top short-term rental
      platforms such as Airbnb, Booking.com, and Expedia. Our team will manage all communication
      with guests, handle booking requests, and coordinate check-ins and check-outs.
    </Text>

    <Text>
      <strong>Guest Services:</strong> Our team will ensure that your guests have a smooth and
      enjoyable experience during their stay. We will handle all inquiries, provide 24/7 support,
      and respond to any issues that may arise.
    </Text>

    <Text>
      <strong>Cleaning and Maintenance:</strong> We know that keeping your property clean and
      well-maintained is crucial to your success. That's why we offer regular cleaning and
      maintenance services to ensure that your property is always in top condition.
    </Text>

    <Text>
      <strong>Revenue Management:</strong> Our team will constantly monitor the rental market and
      adjust prices based on demand, seasonality, and other factors to ensure that you maximize your
      rental income.
    </Text>

    <Text>
      <strong>Legal Compliance:</strong> We will make sure that your property complies with all
      local regulations and requirements, including tax filings and permits.
    </Text>

    <Text>
      At our company, we pride ourselves on our professionalism, attention to detail, and commitment
      to excellence. We know that your property is your investment, and we will treat it with the
      utmost care and respect.
    </Text>
    <Text>
      If you're ready to take your short-term rental business to the next level, contact us today to
      learn more about our services and how we can help you achieve your goals.
    </Text>

    <ImageBanner images={[BedroomImage, BathtubImage, HouseImage]} />
  </Stack>
)
