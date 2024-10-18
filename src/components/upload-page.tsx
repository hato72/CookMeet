'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CloudUpload } from "lucide-react"

export function UploadPageComponent() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [comment, setComment] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      console.error('No file selected')
      return
    }

    try {
      const formData = new FormData()
      formData.append('icon', selectedFile)
      formData.append('comment', comment)

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cuisines`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log('File uploaded successfully')
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">記録しよう</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 min-w-[300px]">
          <label className="flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-primary rounded-lg cursor-pointer h-full min-h-[300px] transition-colors hover:bg-gray-200">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <CloudUpload className="w-16 h-16 text-primary mb-2" />
            <span className="text-sm text-gray-600 text-center px-4">
              {selectedFile ? selectedFile.name : '写真をアップロード'}
            </span>
          </label>
        </div>

        <div className="flex-1 min-w-[300px]">
          <h2 className="text-lg font-semibold mb-2">コメント</h2>
          <Textarea
            placeholder="コメントを入力してください"
            value={comment}
            onChange={handleCommentChange}
            className="w-full h-full min-h-[300px] resize-none"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/cook/repo/test">
          <Button onClick={handleSubmit} className="px-8 py-2">
            完了
          </Button>
        </Link>
      </div>
    </div>
  )
}