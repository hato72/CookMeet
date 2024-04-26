"use client"

import React from "react";

const Result: React.FC = () => {
    /* アンケートの結果が入っている. answersはnumber型の配列 */
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">生成結果</h1>
            </div>
        </>
    );
}

export default Result;