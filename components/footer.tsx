import Image from 'next/image';

const Footer = () => (
  <footer className="text-lg bg-indigo-200 text-center py-32">
    <Image
      src="/images/mithra_logo_white.png"
      alt=""
      width={100}
      height={100}
      className="inline-block"
    />
  </footer>
);

export default Footer;
