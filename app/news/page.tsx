import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

export default async function Page() {
    // 分割代入
    const { contents: news } = await getNewsList();

    return <NewsList news={news} />;
}
