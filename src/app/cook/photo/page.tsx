import React, { useState } from 'react';
import axios from 'axios';

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
            formData.append('comment', comment);

            // サーバーに POST リクエストを送信
            await axios.post('http://localhost:8080/cuisines', formData, {
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
        <div className="container">
            <h1 className="upload-heading">写真をアップロードする</h1>
            <form className="upload-form" onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="photo"
                    id="photo"
                    className="upload-input"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <div className="comment-section">
                    <textarea
                        className="comment-input"
                        placeholder="コメントを入力してください"
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <button type="submit" className="submit-button">完了</button>
                </div>
            </form>
        </div>
    );
};

export default UploadPage;
