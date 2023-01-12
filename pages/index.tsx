import { GetStaticProps } from 'next';
import { getList } from '../lib/posts';
import PostsList from '../components/organisms/postsList';
import Template from '../components/templates/template';
import { Content } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const postData = await getList();
  const { contents } = postData;

  return {
    props: {
      contents,
    },
  };
};

const Home = ({ contents }: { contents: Content[] }) => (
  <Template>
    <PostsList contents={contents} />
  </Template>
);

export default Home;
