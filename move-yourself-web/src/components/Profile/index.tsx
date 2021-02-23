import { ProfileContainer } from "./styles"

export default function Profile() {
    return(
        <ProfileContainer>
            <img src="http://github.com/gusdecante.png" alt="Gustavo Decante"/>
            <div>
                <strong>Gustavo de Campos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </ProfileContainer>
    )
}