import Link from 'next/link';
import Image from 'next/image';

const PostLink = () => (
  <Link href="/" className="block w-full">
    <Image src="/images/fujisan.jpeg" alt="" width={300} height={100} />
    <div>
      <p>更新日：2022/12/10</p>
      <p>タイトルが入ります</p>
    </div>
  </Link>
);

export default PostLink;
