import Link from 'next/link';
import Image from 'next/image';
import { Content } from '../../types';

type Props = {
  content: Content;
};

const PostLink = ({ content }: Props) => {
  const { title, updatedAt, eyecatch } = content;

  return (
    <Link href="/" className="block w-full">
      <Image src={eyecatch.url} alt="" width={300} height={100} />
      <div>
        <p>更新日：{updatedAt}</p>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default PostLink;
