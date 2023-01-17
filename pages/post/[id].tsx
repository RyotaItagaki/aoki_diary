import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticProps: GetStaticProps = ({ params }) => {
  console.log('');
  // const { id } = params;

  // ここらへん気になる（なぜ型ガード必要？）
  if (!params) {
    return {
      props: {
        id: '',
      },
    };
  }

  return {
    props: {
      id: params.id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    {
      params: {
        id: 'a',
      },
    },
    {
      params: {
        id: 'b',
      },
    },
    {
      params: {
        id: 'c',
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
};

const Post = ({ id }: { id: string }) => <p>{id}</p>;

export default Post;
