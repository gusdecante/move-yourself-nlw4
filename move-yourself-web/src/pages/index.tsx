import { ChallengeBox, CompletedChallenges, Countdown, ExpecienceBar, Profile } from "../components";
import { Container } from "../styles"

import { CountedownProvider } from "../contexts/CountdownContext"

import Head from "next/head"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | move.yourself</title>
      </Head>
      <ExpecienceBar />

      <CountedownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountedownProvider>
    </Container>
  )
}
