"use client"

import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import { useAtom } from 'jotai';
import { userAtom } from '../states/store/authAtom';

import Link from "next/link";
import { useEffect, useState } from "react";
import { authenticate, getName } from "@/states/utils/auth";

export default function Home() {
  const [userName, setUserName] = useAtom(userAtom);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = "user1@example.com";
    const password = "password1";
    const isLoggedIn = authenticate(email, password);
    setIsLoggedIn(isLoggedIn);
    const userName = getName(email, password);
    if (isLoggedIn) {
      setUserName(userName);
    }
  }, [setUserName]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      </div>
      <div className="text-4xl text-black text-center font-serif">
        <h1>Meet a new meal.</h1>
        <p>毎日同じメニュー...</p>
        <p>献立を決めるのが面倒...</p>
        <p>そんな食卓に革命を。</p>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      </div>
      <div className="text-center">
        <Link href="/cook/question">
          <GreenRoundButton>質問に回答して料理を生成→</GreenRoundButton></Link>
      </div>
      <p className="mt-2 text-lg text-gray-600 text-center">
        {isLoggedIn ? `${userName}` : 'No user logged in'}
      </p>
    </>
  );
}