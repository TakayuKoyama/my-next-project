import styles from "./page.module.css";
import Image from "next/image";
import localImage from "../public/img-mv.jpg";
import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";

export const revalidate = 60;

export default async function Home() {
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });
    return (
        <>
            <section className={styles.top}>
                <div>
                    <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
                    <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
                </div>
                <Image className={styles.bgimg} src={localImage} alt="" />
            </section>
            <section className={styles.news}>
                <h2 className={styles.newsTitle}>News</h2>
                <NewsList news={data.contents} />
                <div className={styles.newsLink}>
                    <ButtonLink href="/news">もっとみる</ButtonLink>
                </div>
            </section>
        </>
    );
}
