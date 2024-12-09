import Layout from "../components/layout";
import { getIds, getPostById } from "../../../lib/posts";

//パスを生成
export const getStaticPaths = () => {
  return {
    paths: getIds(),
    fallback: false,
  };
};

//指定されたパスに対して、必要なデータを取得する
export const getStaticProps = ({ params }) => {
  return {
    props: {
      post: getPostById(params.id),
    },
  };
};

//投稿の内容を表示する
export default function Post({ post }) {
  return (
    <Layout pageTitle={"Article"}>
      <h2>{post.title}</h2>
      <div>{new Date(post.date).toLocaleDateString()}</div>
      <p>{post.content}</p>
    </Layout>
  );
}
