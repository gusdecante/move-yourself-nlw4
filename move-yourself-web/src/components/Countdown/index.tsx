import { useContext } from "react"
import { CountdownContainer, GenericButton } from "./styles"
import { CountdownContext } from "../../contexts/CountdownContext"

export default function Countdown() {

    const { minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


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