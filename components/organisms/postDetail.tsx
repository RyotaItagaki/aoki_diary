import Image from 'next/image';
import parse from 'html-react-parser';
import { Content } from '../../types';

type Props = {
  propsContent: Content;
};

const PostDetail = ({ propsContent }: Props) => {
  const { title, updatedAt, content, eyecatch } = propsContent;

  return (
    <div className="w-full bg-indigo-100 flex flex-col items-center py-8 gap-y-8">
      <Image
        src={eyecatch.url}
        alt="アイキャッチ画像"
        width={500}
        height={300}
      />
      <p>{title}</p>
      <p>{updatedAt}</p>
      {parse(content)}
    </div>
  );
};

export default PostDetail;
