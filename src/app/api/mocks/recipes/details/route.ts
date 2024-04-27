export const GET = async () => {
    return Response.json(
        {
            "recipe_id": 1900015892,
            "ingredients": [
                {
                    "name": "ケチャップ",
                    "amount": "大さじ5"
                },
                {
                    "name": "ソース",
                    "amount": "大さじ5"
                },
                {
                    "name": "バター",
                    "amount": "20ｇ"
                },
                {
                    "name": "砂糖",
                    "amount": "小さじ1"
                }
            ],
            "steps": [
                {
                    "index": 1,
                    "step": "ハンバーグを焼いた後の肉汁の残ってるフライパンで作ります。脂がたくさんすぎる場合はキッチンペーパーで拭き取る。"
                },
                {
                    "index": 2,
                    "step": "材料を全て入れて焦げないように混ぜながら少し（1～2分）煮詰めて出来上がり。"
                },
                {
                    "index": 3,
                    "step": "ハンバーグだけでなく、目玉焼きや付け合わせのにんじんやじゃがいもなどにもお勧めです。"
                }
            ]
        }
    );
}