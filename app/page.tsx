import styles from "./page.module.css";
import Image from "next/image";
import localImage from "../public/img-mv.jpg";
import ButtonLink from "./_components/ButtonLink";

type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
};

const data: { contents: News[] } = {
    contents: [
        {
            id: "1",
            title: "渋谷にオフィスを移転しました",
            category: {
                name: "更新情報 ",
            },
            publishedAt: "2023/05/19",
            createdAt: "2023/05/19",
        },
        {
            id: "2",
            title: "当社のCEOが業界リーダーTOP30に選出されました",
            category: {
                name: "更新情報 ",
            },
            publishedAt: "2023/05/19",
            createdAt: "2023/05/19",
        },
        {
            id: "3",
            title: "テスト記事です",
            category: {
                name: "更新情報",
            },
            publishedAt: "2023/04/19",
            createdAt: "2023/04/19",
        },
    ],
};

export default function Home() {
    const sliceData = data.contents.slice(0, 2);
    const name = "世界";
    return (
        <>
            <section className={styles.top}>
                <div>
                    <h1 className={styles.title}>テクノロジーの力で{name}を変える!</h1>
                    <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
                </div>
                <Image className={styles.bgimg} src={localImage} alt="" />
            </section>
            <section className={styles.news}>
                <h2 className={styles.newsTitle}>News</h2>
                <ul>
                    {sliceData.map((article) => {
                        return (
                            <li key={article.id} className={styles.list}>
                                <div className={styles.link}>
                                    <Image className={styles.image} src="/no-image.png" alt="No Image" width={1200} height={630} />
                                    <dl className={styles.content}>
                                        <dt className={styles.newsItemTitle}>{article.title}</dt>
                                        <dd className={styles.meta}>
                                            <span className={styles.tag}>{article.category.name}</span>
                                            <span className={styles.date}>
                                                <Image src="/clock.svg" alt="" width={16} height={16} priority />
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.newsLink}>
                    <ButtonLink href="/news">もっとみる</ButtonLink>
                </div>
            </section>
        </>
    );
}
