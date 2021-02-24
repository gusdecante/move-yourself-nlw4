import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import { CompletedChallegesContainer } from "./styles"

export default function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return(
        <CompletedChallegesContainer>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </CompletedChallegesContainer>
    )
}