import Head   from "next/head";
import Layout from "../../components/layout";

/**
 * 自作の二つ目のポスト
 */
export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Second Post</title>
                </Head>
                <h1>Second Page</h1>
                <p>
                    This is Second page that made by next.js.
                </p>
                <img
                    src="/images/profile.jpg"
                    alt="profile"
                />
            </Layout>
        </>
    );
}