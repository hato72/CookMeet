'use client';

import GreenQuadButton from "@/components/ui/buttun/GreenQuadButtun";
import PasswordInput from "@/components/ui/form/PasswordInput";
import TextInput from "@/components/ui/form/TextInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";

const Page = () => {

    type FormError = {
        error: boolean;
        message: string;
    };

    type SigninFormInput = {
        newname: string;
        newemail: string;
        newpassword: string;
    };

    type ValidationCheck = (targetInput?: string) => boolean;

    const [signinFormInput, setSigninFormInput] = React.useState<SigninFormInput>({
        newname: '',
        newemail: '',
        newpassword: '',
    });

    const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('');
    const [nameError, setNameError] = React.useState<FormError>({ error: false, message: '' })
    const [emailError, setEmailError] = React.useState<FormError>({ error: false, message: '' });
    const [passwordError, setPasswordError] = React.useState<FormError>({ error: false, message: '' });
    const [passwordConfirmationError, setPasswordConfirmationError] = React.useState<FormError>({ error: false, message: '' });
    const [serverError, setServerError] = React.useState<FormError>({ error: false, message: '' });
    const router = useRouter();

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSigninFormInput({
            ...signinFormInput,
            newname: e.target.value
        });

        // 一度エラーを出してしまったときだけ、都度バリデーションを行う
        if (nameError.error) {
            validateName(e.target.value);
        }
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSigninFormInput({
            ...signinFormInput,
            newemail: e.target.value
        });

        // 一度エラーを出してしまったときだけ、都度バリデーションを行う
        if (emailError.error) {
            validateEmail(e.target.value);
        }
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSigninFormInput({
            ...signinFormInput,
            newpassword: e.target.value
        });

        // 一度エラーを出してしまったときだけ、都度バリデーションを行う
        if (passwordError.error) {
            validatePassword(e.target.value);
        }
    };

    const handleChangePasswordConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(e.target.value);

        // 一度エラーを出してしまったときだけ、都度バリデーションを行う
        if (passwordConfirmationError.error) {
            validatePasswordConfirmation(e.target.value);
        }
    };

    const validateName: ValidationCheck = (name: string = signinFormInput.newname) => {
        if (name === '') {
            setNameError({ ...nameError, error: true, message: 'ユーザー名を入力してください' });
            return true;
        }
        setNameError({ ...nameError, error: false, message: '' });
        return false;
    };

    const validateEmail: ValidationCheck = (email: string = signinFormInput.newemail) => {
        if (email === '') {
            setEmailError({ ...emailError, error: true, message: 'メールアドレスを入力してください' });
            return true;
        }

        if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
            setEmailError({ ...emailError, error: true, message: 'メールアドレスの形式が正しくありません' });
            return true;
        }

        setEmailError({ ...emailError, error: false, message: '' });
        return false;
    };

    const validatePassword: ValidationCheck = (password: string = signinFormInput.newpassword) => {
        if (signinFormInput.newpassword === '') {
            setPasswordError({ ...passwordError, error: true, message: 'パスワードを入力してください' });
            return true;
        }

        if (signinFormInput.newpassword.length < 6 || signinFormInput.newpassword.length > 30) {
            setPasswordError({ ...passwordError, error: true, message: 'パスワードは6文字以上30文字以下で入力してください' });
            return true;
        }

        setPasswordError({ ...passwordError, error: false, message: '' });
        return false;
    };

    const validatePasswordConfirmation: ValidationCheck = (password: string = passwordConfirmation) => {
        if (password === '') {
            setPasswordConfirmationError({ ...passwordConfirmationError, error: true, message: '確認用のパスワードを入力してください' });
            return true;
        }
        if (signinFormInput.newpassword !== password) {
            setPasswordConfirmationError({ ...passwordConfirmationError, error: true, message: 'パスワードが一致しません' })
            return true;
        }
        setPasswordConfirmationError({ ...passwordConfirmationError, error: false, message: '' })
        return false;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // バリデーション
        const isNameError = validateName();
        const isEmailError = validateEmail();
        const isPasswordError = validatePassword();
        const isPasswordConfirmationError = validatePasswordConfirmation();

        if (isNameError || isEmailError || isPasswordError || isPasswordConfirmationError) {
            console.log('バリデーションエラー');
            return;
        }

        // 以下ログイン処理
        try {
            await axios.put(`${process.env.API_URL}/update`, {
                name: signinFormInput.newname,
                email: signinFormInput.newemail,
                password: signinFormInput.newpassword
            });

            // ログイン処理が成功した場合、トップページにリダイレクト
            // router.replace('/');

        } catch (err) {
            console.log(err);
            setServerError({ ...serverError, error: true, message: 'サーバーエラーが発生しました' });
        }
    };



    return (
        <div className="flex">
            <div className="basis-1/2 pt-16 pl-16 pr-5">
                <hgroup>
                    <h2 className="text-4xl text-green-700 font-bold">Meet a new meal.</h2>
                    <p>登録情報変更</p>
                </hgroup>
                <form onSubmit={onSubmit} className="mt-10">
                    <div>
                        <div className="flex flex-col gap-y-4">
                            <fieldset>
                                <TextInput
                                    label="新しいユーザー名"
                                    type="text"
                                    helperText={nameError.message}
                                    error={nameError.error}
                                    placeholder="例: クックミート"
                                    value={signinFormInput.newname}
                                    onChange={handleChangeName}
                                />
                            </fieldset>
                            <fieldset>
                                <TextInput
                                    label="新しいメールアドレス"
                                    type="email"
                                    helperText={emailError.message}
                                    error={emailError.error}
                                    placeholder="例: sample@example.com"
                                    value={signinFormInput.newemail}
                                    onChange={handleChangeEmail}
                                />
                            </fieldset>
                            <fieldset>
                                <PasswordInput
                                    helperText={passwordError.message}
                                    error={passwordError.error}
                                    value={signinFormInput.newpassword}
                                    placeholder="パスワードを入力してください"
                                    onChange={handleChangePassword}
                                />
                            </fieldset>
                            <fieldset>
                                <PasswordInput
                                    label="新しいパスワード（再入力）"
                                    helperText={passwordConfirmationError.message}
                                    error={passwordConfirmationError.error}
                                    value={passwordConfirmation}
                                    placeholder="確認のため、もう一度パスワードを入力してください"
                                    onChange={handleChangePasswordConfirmation}
                                />
                            </fieldset>
                            {/* <p>すでにアカウントをお持ちですか？  <Link href="/login" className="underline text-green-700">ログイン</Link></p> */}
                        </div>
                        <div className="mt-16">
                            <menu className="flex gap-x-8">
                                <li>
                                    <Link href="/mypage/settings/test">
                                        <GreenQuadButton type="submit">変更完了</GreenQuadButton>
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