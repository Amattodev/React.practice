import path from "path";
import fs from "fs";
import matter from "gray-matter";

//投稿ファイルが格納されているディレクトリのパスを取得
const postsDirPath = path.join(process.cwd(), "posts");

// 投稿を取得して返すもの
export function getPosts() {
  // ファイル名の全てを取得する（配列として返される）
  const postNames = fs.readdirSync(postsDirPath);

  //各ファイルに対して、メタデータを取得する
  return postNames.map((postName) => {
    //各投稿ファイルのパスを作成
    const postPath = path.join(postsDirPath, postName);
    //ファイルを読み込んで、メタデータを解析
    const result = matter(fs.readFileSync(postPath, "utf8"));
    return result.data;
  });
}

//各投稿ファイルのIdを取得する
export function getIds() {
  // 投稿ファイル全てを取得する（配列として返される）
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    return {
      //paramsというプロパティへ
      params: {
        //正規表現で.mdを消去したものをidとする
        id: postName.replace(/\.md$/, ""),
      },
    };
  });
}

//idごとの投稿内容を取得する
export function getPostById(id) {
  //指定されたIdのファイルのパスを作成
  const postPath = path.join(postsDirPath, `${id}.md`);
  //mdファイルの解析（（メタデータとコンテンツを分ける）
  const result = matter(fs.readFileSync(postPath, "utf8"));

  return {
    id,
    ...result.data, //メタデータ
    content: result.content, //コンテンツ
  };
}
