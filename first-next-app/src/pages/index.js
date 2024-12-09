import Link from "next/link";
import Layout from "./components/layout";
import style from "./index.module.css";

import { getIds, getPosts } from "../../lib/posts";

//ビルドされる際に、必要なデータを取得してページに渡す
export const getStaticProps = async () => {
  const posts = getPosts();
  const ids = getIds();

  const postsWithIds = posts.map((post, index) => ({
    ...post,
    id: ids[index].params.id,
  }));

  return {
    props: {
      posts: postsWithIds,
    },
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Layout pageTitle="Home">
        <h1 className={style.title}>Home</h1>
        <Link href="/about" className={style.navigation}>
          Aboutへ
        </Link>
        <ul className={style.list}>
          {posts.map(({ title, id, date }) => {
            return (
              <li key={id} className={style.listItem}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>{new Date(date).toLocaleDateString()}</small>
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}
