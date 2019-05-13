import Layout from "../components/layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto
      ducimus odio voluptatibus exercitationem tempora porro ad unde suscipit
      sint sunt quod totam sed ipsa consectetur, ratione culpa veniam fugit!
    </p>
  </Layout>
);

export default withRouter(Post);
