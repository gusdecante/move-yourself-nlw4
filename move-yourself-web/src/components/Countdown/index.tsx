import { useState, useEffect, useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContainer, GenericButton } from "./styles"

let countdownTimeout: NodeJS.Timeout

export default function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(!isActive);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(!isActive);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time === 0) {
            console.log("finalizou...")
            setHasFinished(!hasFinished);
            setIsActive(!isActive);
            startNewChallenge();
        }
    }, [isActive, time])


    return(
        <div>
            <CountdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </CountdownContainer>
            { hasFinished ? (
                <GenericButton disabled>
                    Ciclo encerrado
                </GenericButton>
            ) : (
                <>
                    {
                        isActive ? (
                            <GenericButton active onClick={resetCountdown}>
                                Abandonar ciclo
                            </GenericButton>
                        ) : (
                            <GenericButton onClick={startCountdown}>
                                Iniciar um ciclo
                            </GenericButton>
                        )
                    }
                </>
            )
            
            }
        </div>
    )
}