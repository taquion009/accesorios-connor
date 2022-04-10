import SectionFAQ from 'components/SectionFAQ'
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
      <SectionSlider />
      <SectionListCard />
      <SectionCustom />
      <SectionFavoriteMonth />
      <SectionFAQ
        questions={[
          {
            question: '¿Qué es el coronavirus?',
            answer:
              'El coronavirus es una enfermedad infecciosa causada por una ' +
              'subclase de la influenza que se ha descubierto más recientemente. ' +
              'Esta enfermedad se ha asociado con muchos otros virus, incluyendo ' +
              'la influenza A y la influenza B. El nombre del virus se debe a que ',
            id: 1,
          },
          {
            question: '¿Qué es el universo?',
            answer:
              'El universo es una enorme cantidad de cosa. ' +
              'Por ejemplo, una persona puede tener una vida de una sola ' +
              'vez, pero puede tener una vida de mil millones de veces. ' +
              'El universo es una cantidad enorme de cosas. Por ejemplo, ' +
              'un humano puede tener una vida de una sola vez, pero puede ',
            id: 2,
          },
          {
            question: '¿Qué es un auto?',
            answer:
              'Un auto es un vehículo automotor de uso particular, ' +
              'comercial o de servicio, que tiene un motor eléctrico, ' +
              'que tiene una o más ruedas, una o más asientos, una o más ',
            id: 3,
          },
          {
            question: '¿Qué es un vaso?',
            answer:
              'Un vaso es un recipiente de una solución, ' +
              'es decir, un recipiente que contiene una solución, ' +
              'como una bebida, un jugo, una crema, una salsa, una salsa, ',
            id: 4,
          },
        ]}
      />
    </>
  )
}

export default Home
