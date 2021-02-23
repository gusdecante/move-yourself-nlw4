import { CompletedChallenges, Countdown, ExpecienceBar, Profile } from "../components";
import { Container } from "../styles"

import Head from "next/head"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | move.yourself</title>
      </Head>
      <ExpecienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
        </div>
      </section>
    </Container>
  )
}
