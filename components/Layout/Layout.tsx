import Header from '../Header';
import Footer from '../Footer';
import type { Properties } from './Layout.types';

const DefaultLayout = ({ children }: Properties): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
