import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Jeanne Zak";
export const siteTitle = "Blog";

export default function Layout({ children, home }) {
  return (
    <div className="max-w-2xl mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Skidau blog" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="bg-black flex flex-col items-center pt-7">
        {home ? (
          <>
            <div className="relative w-28 h-28 overflow-hidden rounded-full">
              <Image
                priority
                src="/images/img1.jpg"
                width={144}
                height={144}
                alt=""
              />
            </div>
            <h1 className="absolute pt-12 text-3xl text-gray-200 font-semibold tracking-tight">
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <div className="w-16 h-16 overflow-hidden rounded-full">
                <Image
                  priority
                  src="/images/img1.jpg"
                  width={108}
                  height={108}
                  alt=""
                />
              </div>
            </Link>
          </>
        )}
      </header>
      <main className="mt-10">
        <div className="max-w-2xl mx-auto">{children}</div>
      </main>
      {!home && (
        <div className="bg-black text-base text-white hover:text-cyan-700 mt-10 mb-4">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
