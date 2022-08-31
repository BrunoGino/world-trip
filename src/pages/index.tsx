import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner';
import { CallToAction } from '../components/CallToAction';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { continents } from '../utils/continents';

const Home: NextPage = () => {

  return (
    <Flex direction="column" w="100%" bg="gray.50" align="center">
      <Header />
      <Banner />
      <TravelTypes />
      <CallToAction continents={continents} />
    </Flex>
  )
}

export default Home
