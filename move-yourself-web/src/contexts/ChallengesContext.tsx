import { createContext, useEffect, useState } from "react" 
import challenges from "../data/challenges.json"

import { ChallengesContextData, ChildrenProviderProps } from "../@types/types"

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children } : ChildrenProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(10);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experinceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio("/notification.mp3").play();

        if(Notification.permission === "granted") {
            new Notification("Novo desafio 🔥", {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return;
        }


        const { amount } = activeChallenge;

        let finalExperince = currentExperience + amount;

        if(finalExperince >= experinceToNextLevel) {
            finalExperince = finalExperince - experinceToNextLevel;
            levelUp();
            setCurrentExperience(finalExperince);
            setActiveChallenge(null);
            setChallengesCompleted(challengesCompleted + 1);
        }
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                levelUp, 
                currentExperience, 
                challengesCompleted, 
                startNewChallenge, 
                activeChallenge,
                resetChallenge,
                experinceToNextLevel,
                completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}