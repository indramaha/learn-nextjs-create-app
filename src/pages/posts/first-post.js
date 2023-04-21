import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const FirstPost = () => {
    return ( 
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                } 
            />
            <h1>First Post</h1>
            <Link href="/">back to Home</Link>
        </> 
    );
}
 
export default FirstPost;