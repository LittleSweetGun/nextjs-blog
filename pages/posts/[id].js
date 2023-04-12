import Layout from 'C:/Users/jeann/Next/nextjs-blog/components/layout';
import { getAllPostIds, getPostData } from 'C:/Users/jeann/Next/nextjs-blog/lib/posts';
import Head from 'next/head';
import Date from 'C:/Users/jeann/Next/nextjs-blog/components/date';
import utilStyles from 'C:/Users/jeann/Next/nextjs-blog/styles1/utils.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
} 

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
      );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}