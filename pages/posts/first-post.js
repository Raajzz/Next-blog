import Link from "next/link";
import Image from "next/image"
import Head from "next/head"


const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Inside First Post Route</h1>
      <Image
        src='/images/profile.jpg'
        height={144}
        width={144}
        alt='fritz'
      />
      <h2>
        <Link href="/">Back to home</Link> ?!
      </h2>
    </div>
  );
};

export default FirstPost;
