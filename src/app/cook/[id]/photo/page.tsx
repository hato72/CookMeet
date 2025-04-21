'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CloudUpload } from "lucide-react"
import BlackRoundButton from '@/components/ui/buttun/BlackRoundButton'
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

export default function UploadPage({params}: {params: {id: number}}) {
  const { id } = params;

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [comment, setComment] = useState('')
  const [title, setTitle] = useState('')
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError('写真を選択してください')
      return
    }

    if (!title) {
      setError('タイトルを入力してください')
      return
    }

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('icon', selectedFile)
      formData.append('comment', comment)
      formData.append('title', title)
      formData.append('url', `https://recipe.rakuten.co.jp/recipe/${id}`)

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cuisines`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      })

      console.log('File uploaded successfully', response.data)
      // 成功したらリポジトリページに遷移
      router.push('/cook/repo')
    } catch (error) {
      console.error('Error uploading file:', error)
      setError('アップロード中にエラーが発生しました')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">記録しよう</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 py-8">
        <div className="flex-1 min-w-[300px]">
          <label className="flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-primary rounded-lg cursor-pointer h-[300px] transition-colors hover:bg-gray-200">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {selectedFile && URL.createObjectURL(selectedFile) ? (
              <img 
                src={URL.createObjectURL(selectedFile)} 
                alt="プレビュー" 
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <>
                <CloudUpload className="w-16 h-16 text-primary mb-2" />
                <span className="text-sm text-gray-600 text-center px-4">
                  写真をアップロード
                </span>
              </>
            )}
          </label>
        </div>

        <div className="flex-1 min-w-[300px] flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">タイトル</h2>
            <Input
              placeholder="料理のタイトルを入力してください"
              value={title}
              onChange={handleTitleChange}
              className="w-full"
            />
          </div>

          <div className="flex-grow">
            <h2 className="text-lg font-semibold mb-2">コメント</h2>
            <Textarea
              placeholder="コメントを入力してください"
              value={comment}
              onChange={handleCommentChange}
              className="w-full h-[200px] resize-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <BlackRoundButton 
          type="button" 
          onClick={handleSubmit}
          disabled={uploading}
        >
          {uploading ? '保存中...' : '完了'}
        </BlackRoundButton>
      </div>
    </div>
  )
}