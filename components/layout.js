import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Jeanne Zak';
export const siteTitle = 'Blog';

export default function Layout({ children, home }) {
  return (
    <div className=''>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Vercel blog"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className='flex flex-col items-center'>
        {home ? (
          <>
            <Image
              priority
              src="/images/img1.jpg"
              className='rounded-full'
              width = {144}
              height={144}
              alt=""
            />
            <h1 className='text-3xl font-black'>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/img1.jpg"
                className='rounded-full'
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className='hover:text-cyan-700 text-xl font-black'>
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='text-base hover:text-cyan-700'>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}