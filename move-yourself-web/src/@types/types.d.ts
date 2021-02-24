import { ReactNode } from "react";

export interface Active {
    active?: Boolean; 
}

export interface Succeed {
    succeed?: Boolean;
}

export interface ChallengesProviderProps {
    children: ReactNode;
}

interface Challenge {
    type: 'body' | 'eye';
    description: String;
    amount: number;
}

export interface ChallengesContextData {
    level: number;
    levelUp:  () => void;
    currentExperience: number;
    challengesCompleted: number; 
    startNewChallenge: () => void; 
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experinceToNextLevel: number;
}