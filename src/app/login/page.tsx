'use client';

import BasicTextField from "@/components/ui/form/form";
import Layout from "../layout";

const Page = () => {

    return (
        <Layout>
            <div className="flex">
                <div className="basis-1/2 pt-20 pl-16">
                    <form action='POST'>
                        <div>
                            <h2 className="text-green-500 text-bold text-3xl">Meet a new meal</h2> {/**このタイトルコンポーネントにした方がいいかも */}
                            <p>お帰りなさい。ログインしてください。</p>
                            <div className="w-full">
                                <ul>
                                    <li>
                                        <BasicTextField
                                            label='メールアドレス'
                                        />
                                    </li>
                                    <li>
                                        <BasicTextField
                                            label='パスワード'
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div>

                            </div>
                        </div>
                    </form>
                </div>
                <aside className="basis-1/2">

                </aside>
            </div>
        </Layout>
    )
};

export default Page;