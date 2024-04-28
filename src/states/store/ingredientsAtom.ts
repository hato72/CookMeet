import { atom } from "jotai";

type Ingredient = {
    name: string;
    amount: number;
};

export const ingredientsAtom = atom<Ingredient[]>([]);