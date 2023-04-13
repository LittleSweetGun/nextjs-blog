import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';


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
            <article className='space-y-3'>
                <h1 className='font-bold'>{postData.title}</h1>
                <div className='text-xs'>
                    <Date dateString={postData.date} />
                </div>
                <div className='text-justify space-y-1'dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
