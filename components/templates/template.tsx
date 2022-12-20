import { ReactNode } from 'react';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

type Props = {
  children: ReactNode;
};

const Template = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Template;
