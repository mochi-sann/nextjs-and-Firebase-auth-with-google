// import Link from "next/link";
import Layout from "../components/Layout";
import { Login, Logout, auth } from "~/src/lib/firebase";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div>
      <button onClick={() => Login()}>ログイン</button>
      <button onClick={() => Logout()}>ログアウト</button>
    </div>
    <div>
      <pre>
        {auth.currentUser
          ? auth.currentUser.displayName + "でログインしています"
          : "ログインしていません"}
      </pre>
    </div>
  </Layout>
);

export default IndexPage;
