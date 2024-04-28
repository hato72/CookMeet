'use client';

import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import SocialMediaButton from "@/components/ui/buttun/SocialMediaButton";
import TextInput from "@/components/ui/form/TextInput";
import { userAtom } from "@/states/store/authAtom";
import { CloudUpload, FileCopy } from "@mui/icons-material";
import { Avatar, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useAtomValue } from "jotai";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MyPage() {
    const [userName, setUserName] = useState<string>('');
    const [previewURL, setPreviewURL] = useState<string>('');
    const [iconFile, setIconFile] = useState<File | null>(null);
    const [loadingIcon, setLoadingIcon] = useState<boolean>(false);

    useEffect(() => {
        // アップロードされたアイコン画像のURLを生成
        if (!iconFile) {
            return;
        }
        setLoadingIcon(true);
        const previewResult = window.URL.createObjectURL(iconFile);
        setPreviewURL(previewResult);
        setLoadingIcon(false);
    }, [iconFile]);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleChangeIconFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIconFile(e.target.files?.[0] ?? null);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // ユーザーネーム変更処理
    };

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">アカウント設定</h1>
                <form className="flex w-full mt-10" onSubmit={onSubmit}>
                    <fieldset className="w-96 flex flex-col items-center gap-y-4">
                        <Avatar id="user_icon" sx={{ width: 150, height: 150 }} src={previewURL} />
                        <label htmlFor="user_icon" className="font-bold text-xl">ユーザーの名前</label>
                        <Button role={undefined} component="label" startIcon={<CloudUpload />} color="success">
                            アイコン変更
                            <input type="file" name="" id="" onChange={handleChangeIconFile} style={{
                                clip: 'rect(0 0 0 0)',
                                clipPath: 'inset(50%)',
                                height: 1,
                                overflow: 'hidden',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                whiteSpace: 'nowrap',
                                width: 1,
                            }} /></Button>
                    </fieldset>
                    <div className="grow pr-10">
                        <fieldset>
                            <TextInput
                                label="新しいユーザー名"
                                helperText=""
                                placeholder="例: クックミート"
                                value={userName}
                                error={false}
                                onChange={handleChangeName}
                            />
                        </fieldset>
                        <Link href="" className="inline-block mt-10">
                            <SocialMediaButton>アカウント設定</SocialMediaButton>
                        </Link>
                    </div>
                </form>
                <div className="w-fit mx-auto mt-10">
                    <GreenRoundButton type="submit">
                        保存してマイページへ
                    </GreenRoundButton>
                </div>
            </div>
        </>
    );
}

{/* <RecipeCard
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        width="300px"
        height="450px" /> */}