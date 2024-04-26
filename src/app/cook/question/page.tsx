"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";

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

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

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
    };

    return (
        <div className={styles.App}>

            {/* 3. Show results or show the question game  */}

            /* 5. Question Card  */
            {showResults ? (
                <div>
                    <Link href="/cook/result">
                        <BlackRoundButton>料理を見る</BlackRoundButton>
                    </Link>

                </div>) : (
                <div className={styles.questionCard}>
                    {/* Current Question  */}
                    <h2>
                        質問: {currentQuestion + 1} / {questions.length}
                    </h2>
                    <h3 className={styles.question}>{questions[currentQuestion].text}</h3>

                    {/* List of possible answers  */}
                    <ul className={styles.ul}>
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li
                                    className={styles.list}
                                    key={option.id}
                                    onClick={() => optionClicked(option.id)}
                                >
                                    {option.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>)}
        </div>
    );
}