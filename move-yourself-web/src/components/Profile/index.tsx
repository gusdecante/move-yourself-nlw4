import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import { ProfileContainer } from "./styles"

export default function Profile() {
    const { level } = useContext(ChallengesContext)
    return(
        <ProfileContainer>
            <img src="http://github.com/gusdecante.png" alt="Gustavo Decante"/>
            <div>
                <strong>Gustavo de Campos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    )
}