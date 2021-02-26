import { ReactNode } from "react";

export interface Active {
    active?: Boolean; 
}

export interface Succeed {
    succeed?: Boolean;
}

export interface ChildrenProviderProps {
    children: ReactNode;
}

export interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
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
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

export interface CountdownContextData {
    minutes: number
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}