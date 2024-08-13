'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import BlackRoundButton from '@/components/ui/buttun/BlackRoundButton';
import Image from 'next/image';

const UploadPage: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [comment, setComment] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('icon', selectedFile);

            // コメントを追加する場合は以下のように FormData に追加
            //formData.append('comment', comment);

            // サーバーに POST リクエストを送信
            //await axios.post('http://localhost:8080/cuisines', formData, {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cuisines`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // 成功した場合の処理をここに追加

            console.log('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <>
        <div className="container">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">記録しよう</h1>
            </div>
            
            {/* File upload section */}
            <div className="w-[427px] h-[207.48px] left-[220px] top-[200px] absolute">
                {/* <div className="Rectangle1 w-[427px] h-[207px] left-0 top-0 absolute bg-sky-600/opacity-10 rounded-xl border-2 border-sky-600" />
                <div className="Group2 w-[160.40px] h-40 left-[134.03px] top-[47.52px] absolute">
                    <label htmlFor="photo" className="OrSelectFilesFromDevice w-[160.40px] h-[13.64px] left-0 top-[79.98px] absolute text-center text-white/opacity-30 text-2xl font-normal font-['SF Pro']">
                        写真アップロード
                    </label>
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        className="hidden" // Hide default input style
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div> */}
                <label className="flex flex-col items-center justify-center bg-[#f0f0f0] border-2 border-dashed border-[#0066CC] rounded-lg cursor-pointer w-[400px] h-[200px]">
                    <i className="fa fa-cloud-upload-alt text-3xl text-[#0066CC]"></i>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnJOlPK-v8K6V0Ealvw5DodaU1FPwsm-YRpCFXq3DnA&s" alt="cloud image" width={200} height={100} />
                    
                    <span className="font-roboto text-base text-[#121212] mt-2">
                        写真アップロード
                    </span>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            </div>

            {/* Comment section */}
            <div className="left-[763px] top-[200px] absolute text-black/opacity-60 text-lg font-normal font-['Roboto']">コメント</div>
            <div className="Rectangle7 w-[554px] h-[350px] left-[738px] top-[200px] absolute bg-white border border-stone-300">
                <textarea
                    className="comment-input w-full h-full p-4"
                    placeholder="コメントを入力してください"
                    value={comment}
                    onChange={handleCommentChange}
                />
            </div>

            {/* Submit button */}
            <Link href={'/cook/repo'}>
                <BlackRoundButton type="button" className="submit-button absolute left-[650px] top-[600px]" onClick={handleSubmit}>
                    完了
                </BlackRoundButton>
            </Link>
        </div>
        </>
    );
};

export default UploadPage;

//どっちも同じくらい