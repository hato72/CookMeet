"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import BlackRoundButton from '@/components/ui/buttun/BlackRoundButton';

// function MainComponent() {
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       // process the image here, e.g., display or send to an API
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
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
    <div className="container mx-auto p-4">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">記録しよう</h1>
      </div>

      {/* <section className="grid grid-cols-2 gap-4"> */}
      <div className="w-[427px] h-[207.48px] left-[200px] top-[200px] absolute">
        <label className="flex flex-col items-center justify-center bg-[#f0f0f0] border-2 border-dashed border-[#0066CC] rounded-lg cursor-pointer w-[350px] h-[200px]">
          <i className="fa fa-cloud-upload-alt text-3xl text-[#0066CC]"></i>
          <img src="cloudimage/cloud.jpeg" alt="Cloud Image"></img>
          
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

        {/* <textarea
          className="border-2 border-[#f0f0f0] rounded-lg p-3 w-full h-[250px] resize-none"
          placeholder="コメントを入力してください"
          value={comment}
          onChange={handleCommentChange}
        ></textarea> */}
      {/* </section> */}
      </div>

      <div className="left-[763px] top-[200px] absolute text-black/opacity-60 text-lg font-normal font-['Roboto']">コメント</div>
        <div className="Rectangle7 w-[554px] h-[350px] left-[738px] top-[200px] absolute bg-white border border-stone-300">
            <textarea
                className="comment-input w-full h-full p-4"
                placeholder="コメントを入力してください"
                value={comment}
                onChange={handleCommentChange}
            />
        </div>
      
      {/* <Link href='./repo'> */}
      <Link href='/repo/test'>
          <BlackRoundButton type="button" className="submit-button absolute left-[600px] top-[600px]" onClick={handleSubmit}>
              完了
          </BlackRoundButton>
      </Link>

    </div>
  );
}

export default UploadPage;