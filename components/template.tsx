import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

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
