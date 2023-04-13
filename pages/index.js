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

      <section className=" space-y-4 font-sans text-justify text-gray-800 px-20">
        <p className="text-lg">Student of Computer and Data Sciences with a specialization in Economics. I have a strong interest in the intersection of technology and business.</p>
        <small className="text-sm block mb-2">PS : Coffee, travel and gym addict</small>

        <h2 className="text-2xl font-medium text-gray-900">Blog</h2>
        <ul className="text-base list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="py-3 border-b border-gray-300 last:border-0 hover:text-cyan-700" key={id}>
              <Link href={`/posts/${id}`}>
                <p className="hover:text-cyan-700">{title}</p>
              </Link>
              <br />
              <small className="text-sm text-gray-600">

                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>      
    </Layout>
  );
}
