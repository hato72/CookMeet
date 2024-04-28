import { atom } from "jotai";

type Step = {
    index: number;
    step: string;
};

export const stepsAtom = atom<Step[]>([]);