"use client"

import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import { mealAtom } from "@/states/store/mealAtom";
import { useAtom } from "jotai";

export default function Questions() {

    const questions = [
        {
            text: "いつ食べる？",
            options: [
                { id: 0, text: "朝食" },
                { id: 1, text: "昼食" },
                { id: 2, text: "夕食" },
                { id: 3, text: "おやつ" },
            ],
        },
        {
            text: "時短する？",
            options: [
                { id: 0, text: "時短する" },
                { id: 1, text: "凝った料理" },
            ],
        },
        {
            text: "食べたい食べ物のジャンルは？",
            options: [
                { id: 0, text: "イタリアン" },
                { id: 1, text: "中華" },
                { id: 2, text: "麺類" },
                { id: 3, text: "ご飯系" },
                { id: 4, text: "特にない" },
            ],
        },
        {
            text: "今日はどんな日？",
            options: [
                { id: 0, text: "疲れた" },
                { id: 1, text: "嬉しいことがあった！" },
                { id: 2, text: "明日デートなんよね" },
                { id: 3, text: "特に何も！" },
                { id: 4, text: "振られた..." },
            ],
        },
        {
            text: "最近何してる？",
            options: [
                { id: 0, text: "仕事が忙しい" },
                { id: 1, text: "勉強で忙しい" },
                { id: 2, text: "ずっと遊んでるかな！" },
                { id: 3, text: "やることなくて暇..." },
                { id: 4, text: "新しい趣味を見つけた！" },
            ],
        },
    ];

    const snetences = [
        ['朝食', '昼食', '夕食', 'おやつ'],
        ['時短', '凝る'],
        ['今日はイタリアンが食べたい気分だな', '今日は中華が食べたい気分だな', '今は麺類が食べたい気分だ', '今は丼とかのご飯系が食べたい', 'とくに今日これが食べたいってものはないけど、おいしいものが食べたいな'],
        ['今日は疲れたからリフレッシュできる料理が食べたい', '今日はうれしいことがあったから飛び切りおいしいものが食べたい', '明日好きな子とデートだから変な匂いとか口臭つかない料理が食べたいな', '今日は特に何もなかったし、普通においしい料理が食べたい', '今日パートナーに振られた...悲しいからあんま食欲無いけど、おいしいもの食べて回復したい気持ちではある。'],
        ['仕事で忙しくてあんま時間無いから簡単に作れる料理を作りたい', '勉強で忙しいから、集中力の上がる料理が食べたい', '最近遊んでばっかやから、友達にふるまえる料理を練習してみたい', '最近はやることなくて暇だしちょっと凝った料理を作りたい', '最近新しい趣味を見つけて、気分がいいから料理も気分よく楽しく作れるものを作りたいな']
    ]

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [meal, setMeal] = useAtom(mealAtom);

    const optionClicked = (id: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = id;
        setAnswers(newAnswers);

        console.log(newAnswers);

        // Increment the score
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
        setMeal(newAnswers);
    };
    console.log(meal);

    return (
        <div className={styles.App}>

            {showResults ? (
                <div>
                    <Link href="/cook/result">
                        <BlackRoundButton>料理を見る</BlackRoundButton>
                    </Link>

                </div>) : (
                <div className={styles.questionCard}>
                    {/* Current Question  */}
                    <ul className={styles.questionCounter_list}>
                        {questions.map((_, index) => (
                            <li key={index} className={styles.questionCounter_item}>
                                <div className={styles.questionCounter}></div>
                            </li>
                        ))}
                    </ul>
                    <h3 className={styles.question}>{questions[currentQuestion].text}</h3>

                    {/* List of possible answers  */}
                    <ul className={styles.ul}>
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li
                                    className={styles.list}
                                    key={option.id}
                                >
                                    <button className={styles.answer_button} onClick={() => optionClicked(option.id)}>
                                        {option.text}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>)}
        </div>
    );
}