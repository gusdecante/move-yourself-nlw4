import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import { CountdownContext } from "../../contexts/CountdownContext";
import { ChallengeBoxContainer, ButtonFailSucceed } from "./styles"

export default function ChallengeBox() {
    const { 
        activeChallenge, 
        resetChallenge, 
        completeChallenge
    } = useContext(ChallengesContext);
    const {
        resetCountdown,
    } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return(
        <ChallengeBoxContainer active={activeChallenge ? true : false}>
            {activeChallenge ? (
                <div>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <ButtonFailSucceed 
                            type="button"
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </ButtonFailSucceed>
                        <ButtonFailSucceed 
                            type="button"
                            succeed
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </ButtonFailSucceed>
                    </footer>
                </div>
            ) : (
                <div>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            )}
        </ChallengeBoxContainer>
    )
}