import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import parse from 'html-react-parser';
import { ParsedUrlQuery } from 'node:querystring';
import { Content } from '../../types';

import { getDetail, getIds } from '../../lib/posts'; // 読み込みパス直したい

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

  const { id, title, updatedAt, content, eyecatch } = propsContent;

  return (
    <>
      <Image
        src={eyecatch.url}
        alt="アイキャッチ画像"
        width={300}
        height={100}
      />
      <p>{id}</p>
      <p>{title}</p>
      <p>{updatedAt}</p>
      {parse(content)}
    </>
  );
};

export default Post;
