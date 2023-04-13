import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>        

      <section className="space-y-4 font-mono text-justify">
        <p className="text-lg">Student of Computer and Data Sciences with a specialization in Economics. I have a strong interest in the intersection of technology and business.</p>
        <small className='text-xs'>PS : Coffee, travel and gym addict</small>

        <h2 className="text-xl">Blog</h2>
        <ul className="text-base ">
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-black hover:text-cyan-700" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-xs">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>      
    </Layout>
  );
}
