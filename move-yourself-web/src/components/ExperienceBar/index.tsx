import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import { PageHeader, CurrentExperience } from "./styles"

export default function ExperienceBar() {
    const { currentExperience, experinceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experinceToNextLevel
    return(
        <PageHeader>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
                <CurrentExperience style={{ left: `${percentToNextLevel}%` }}> {currentExperience} xp</CurrentExperience>
            </div>
            <span>{experinceToNextLevel} xp</span>
        </PageHeader>
    )
}