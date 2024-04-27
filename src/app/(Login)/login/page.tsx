'use client';

import GreenQuadButton from "@/components/ui/buttun/GreenQuadButtun";
import WhiteQuadButton from "@/components/ui/buttun/WhiteQuadButtun";
import PasswordInput from "@/components/ui/form/PasswordInput";
import TextInput from "@/components/ui/form/TextInput";
import { userAtom } from "@/states/store/authAtom";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FormError = {
    error: boolean;
    message: string;
}

const Page = () => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [emailError, setEmailError] = React.useState<FormError>({ error: false, message: '' });
    const [passwordError, setPasswordError] = React.useState<FormError>({ error: false, message: '' });
    const [serverError, setServerError] = React.useState<FormError>({ error: false, message: '' })
    const [user, setUser] = useAtom(userAtom);

    const Login = async () => {
        console.log(user);
        setUser(true);
        console.log(user);
        console.log("ログイン");
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
    };



    return (
        <div className="flex">
            <div className="basis-1/2 pt-16 pl-16 pr-5">
                <hgroup>
                    <h2 className="text-4xl text-green-700 font-bold">Meet a new meal.</h2>
                    <p className="mt-10 text-green-700">おかえりなさい。ログインしてください。</p>
                </hgroup>
                <form action="POST" onSubmit={onSubmit} className="mt-10">
                    <div>
                        <div>
                            <fieldset>
                                <TextInput
                                    label="メールアドレス"
                                    type="email"
                                    helperText={emailError.message}
                                    error={emailError.error}
                                    placeholder="例: sample@example.com"
                                    value={email}
                                    onChange={handleChangeEmail}
                                />
                            </fieldset>
                            <fieldset className="mt-5">
                                <PasswordInput
                                    helperText={passwordError.message}
                                    error={passwordError.error}
                                    value={password}
                                    onChange={handleChangePassword}
                                    placeholder="パスワードを入力してください"
                                />
                            </fieldset>
                        </div>
                        <div className="mt-16">
                            <menu className="flex gap-x-8">
                                <li>
                                    <GreenQuadButton type="submit" href="./" onClick={() => Login()}>ログイン</GreenQuadButton>
                                </li>
                                <li>
                                    <Link href={'./createaccount'}>
                                        <WhiteQuadButton>新規登録</WhiteQuadButton>
                                    </Link>
                                </li>
                            </menu>
                        </div>
                    </div>
                </form>
            </div>
            <aside className="basis-1/2">
                <br></br><br></br><br></br>
                <Image src={"/images/meal.png"} alt="料理のイメージ画像" className="w-full object-center object-fill" width={100} height={100} />
            </aside>

        </div>
    );
};

export default Page;