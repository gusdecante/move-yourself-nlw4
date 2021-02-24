import { createContext, useState } from "react" 
import challenges from "../data/challenges.json"

import { ChallengesContextData, ChallengesProviderProps } from "../@types/types"

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children } : ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(10);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experinceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null);
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
                experinceToNextLevel
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}