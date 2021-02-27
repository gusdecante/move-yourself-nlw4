import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenProviderProps, CountdownContextData } from "../@types/types";

import { ChallengesContext } from "./ChallengesContext"

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountedownProvider({children} : ChildrenProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;



    function startCountdown() {
        setIsActive(true); //true
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time === 0) {
            console.log("finalizou...")
            setHasFinished(!hasFinished);
            setIsActive(!isActive); //false
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown

        }}>
            {children}
        </CountdownContext.Provider>
    )
}