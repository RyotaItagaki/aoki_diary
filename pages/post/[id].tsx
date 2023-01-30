import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import Template from '../../components/templates/template';
import { Content } from '../../types';

import { getDetail, getIds } from '../../lib/posts'; // 読み込みパス直したい
import PostDetail from '../../components/organisms/postDetail';

type Props = {
  propsContent: Content | undefined;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  // ここらへん気になる（なぜ型ガード必要？）
  if (!params) {
    return {
      props: {
        propsContent: undefined,
      },
    };
  }

  const propsContent = await getDetail(params.id);

  return {
    props: {
      propsContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getIds();

  return {
    paths,
    fallback: false,
  };
};

const Post = ({ propsContent }: Props) => {
  if (!propsContent) {
    return <p>aaa</p>;
  }

  return (
    <Template>
      <PostDetail propsContent={propsContent} />
    </Template>
  );
};

export default Post;
