import Head                   from 'next/head';
import Layout, { siteTitle }  from "../components/layout";
import utilStyles             from "../styles/utils.module.css";
import Link                   from 'next/link';
import Date                   from "../components/date";
import { getSortedPostsData } from "../lib/posts";

/**
 * StaticGenerate
 * 開発環境ではリクエストごとに実行される。
 * 本番環境では、ビルド時に実行される。
 * ※ ビルド時に実行されるため、クエリパラメータや HTTP ヘッダなど、
 * リクエスト時にしか利用できないデータを使用することはできません。
 * ※ getStaticPropsはページからしかエクスポートできません。
 */
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData
        }
    }
}

/**
 * ServerSideRendering
 * クライアントからのリクエストを取得してからビルドが必要な場合
 * @param {*} context 
 */
// export async function getServerSideProps(context) {
//     // const allPostsData = getSortedPostsData(request); 例
//     return {
//         props: {
//             // props for your component
//         }
//     }
// }

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href="/posts/[id]" as={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
