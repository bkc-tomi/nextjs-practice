import Head   from "next/head";
import Layout from "../../components/layout";

/**
 * pages内のディレクトリ構成がそのままリンクパスになる。
 * Linkコンポーネントを使うことで内部リンクは相対パスで指定できる。
 * 外部リンクに関しては、通常通りaタグで出来る。
 */
export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Page</h1>
                <p>
                    This is first page that made by next.js.
                </p>
            </Layout>
        </>
    );
}

