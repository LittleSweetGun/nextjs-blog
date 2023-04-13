import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';


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
            <article className="max-w-prose mx-auto px-5">
                <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
                <div className="text-xs text-gray-500 mb-4">
                    <Date dateString={postData.date} />
                </div>
                <div className="text-gray-800 prose prose-lg px-3" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
