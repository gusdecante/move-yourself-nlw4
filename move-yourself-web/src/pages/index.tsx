import Head from "next/head"
import { GetServerSideProps } from "next"

import { ChallengeBox, CompletedChallenges, Countdown, ExpecienceBar, Profile } from "../components";
import { Container } from "../styles"

import { CountedownProvider } from "../contexts/CountdownContext"
import { ChallengesProvider } from "../contexts/ChallengesContext";

import { HomeProps } from "../@types/types"

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;  
  
  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
