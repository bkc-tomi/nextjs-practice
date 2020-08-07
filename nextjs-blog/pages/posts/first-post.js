import Link from "next/link";

/**
 * pages内のディレクトリ構成がそのままリンクパスになる。
 * Linkコンポーネントを使うことで内部リンクは相対パスで指定できる。
 * 外部リンクに関しては、通常通りaタグで出来る。
 */
export default function FirstPost() {
    return (
        <>
            <h1>First Page</h1>
            <h2>
                <Link href="/"> 
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}

