import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from 'C:/Users/jeann/Next/nextjs-blog/components/layout';
import utilStyles from 'C:/Users/jeann/Next/nextjs-blog/styles1/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from 'C:/Users/jeann/Next/nextjs-blog/components/date';

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

      <section className={utilStyles.headingMd}>
        <p>Student of Computer and Data Sciences with a specialization in Economics. I have a strong interest in the intersection of technology and business.</p>
        <small>PS : Coffee, travel and gym addict</small>
      </section> 

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>      
    </Layout>
  );
}