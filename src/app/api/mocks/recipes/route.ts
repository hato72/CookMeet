// 本番はPOSTメソッドなので要注意
// GETメソッドはテスト用です
export const GET = async (request: Request) => {
    return Response.json(
        [{
            "id": 1900015892,
            "title": "びっくりドンキー風秘伝のハンバーグソース",
            "url": "https://recipe.rakuten.co.jp/recipe/1900015892/",
            "description": "たった5分でびっくりドンキーのハンバーグソースを簡単再現！和風ベースで少し酸味のある爽やかな味わいです。",
            "image_url": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/e254e47b0e1abe0deb49170da5878d63e37c7bec.95.2.3.2.jpg",
            "category_id": "34-461",
            "rank": 1
        },
        {
            "id": 1080010720,
            "title": "国産レモンで♪爽やかレモンジャム♥",
            "url": "https://recipe.rakuten.co.jp/recipe/1080010720/",
            "description": "国産レモンが手に入ったら作るジャムです♥スコーン、パン、紅茶に入れて、ハチミツと一緒にお湯で割っても♪",
            "image_url": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/146b28247bc0fcee198705760f86d80aa1a498d9.34.2.3.2.jpg",
            "category_id": "34-461",
            "rank": 2
        },
        {
            "id": 1030024314,
            "title": "三日と開けず食べたくなる！豚肉のレモンクリーム煮",
            "url": "https://recipe.rakuten.co.jp/recipe/1030024314/",
            "description": "豚ヒレ肉＆ほうれん草＆玉ねぎ＆キノコの旨味食材が生クリーム＆バター＆粉チーズ＆レモンの濃厚なのに爽やかなソースに抱かれ～三日と開けずにまた食べたくなる一品です。",
            "image_url": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/29474bf19dfe81eaf84ff05c36e29ba61cbfacdf.45.9.3.3.jpg",
            "category_id": "34-461",
            "rank": 3
        },
        ]);
};

// 本番用はPOSTメソッド
export const POST = async (request: Request) => {
    return Response.json(
        [{
            "id": 1900015892,
            "title": "びっくりドンキー風秘伝のハンバーグソース",
            "url": "https://recipe.rakuten.co.jp/recipe/1900015892/",
            "description": "たった5分でびっくりドンキーのハンバーグソースを簡単再現！和風ベースで少し酸味のある爽やかな味わいです。",
            "image_url": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/e254e47b0e1abe0deb49170da5878d63e37c7bec.95.2.3.2.jpg",
            "category_id": "34-461",
            "rank": 1
        },
        {
            "id": 1080010720,
            "title": "国産レモンで♪爽やかレモンジャム♥",
            "url": "https://recipe.rakuten.co.jp/recipe/1080010720/",
            "description": "国産レモンが手に入ったら作るジャムです♥スコーン、パン、紅茶に入れて、ハチミツと一緒にお湯で割っても♪",
            "image_url": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/146b28247bc0fcee198705760f86d80aa1a498d9.34.2.3.2.jpg",
            "category_id": "34-461",
            "rank": 2
        },
        {
            "id": 1030024314,
            "title": "三日と開けず食べたくなる！豚肉のレモンクリーム煮",
            "url": "https://recipe.rakuten.co.jp/recipe/1030024314/",
            "description": "豚ヒレ肉＆ほうれん草＆玉ねぎ＆キノコの旨味食材が生クリーム＆バター＆粉チーズ＆レモンの濃厚なのに爽やかなソースに抱かれ～三日と開けずにまた食べたくなる一品です。",
            "image_url": "https://image.space.rakuten.co.jp/d/strg/ctrl/3/29474bf19dfe81eaf84ff05c36e29ba61cbfacdf.45.9.3.3.jpg",
            "category_id": "34-461",
            "rank": 3
        },
        ]);
};