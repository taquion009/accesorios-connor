import Header from 'components/Header'
import SectionCustom from 'components/SectionCustom'
import SectionFavoriteMonth from 'components/SectionFavoriteMonth'
import SectionListCard from 'components/SectionListCard'
import SectionSlider from 'components/SectionSlider'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SectionSlider />
        <SectionListCard />
        <SectionCustom />
        <SectionFavoriteMonth />
      </main>
    </>
  )
}

export default Home
