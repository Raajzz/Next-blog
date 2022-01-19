import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// import Script from "next/script";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
          {/* BAD */}
          {/* <script src="https://connect.facebook.net/en_US/sdk.js"/> */}
        </Head>
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`);
        }}
      /> */}
        <h1>Inside First Post Route</h1>
        <Image src="/images/profile.jpg" height={144} width={144} alt="fritz" />
        <h2>
          <Link href="/">Back to home</Link> ?!
        </h2>
      </div>
    </Layout>
  );
};

export default FirstPost;
