import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className="shadow-lg">
    <Link href="/">
      <h1 className="text-3xl font-bold underline">
        <Image
          src="/images/mithra_logo_white.png"
          alt=""
          width={100}
          height={100}
        />
      </h1>
    </Link>
  </header>
);

export default Header;
