import { useRouter } from 'next/router';
import OGImageTemplate from '../../components/templates/OGImage';

const OpenGraphImagePage = (): JSX.Element => {
  const {
    query: { title },
  } = useRouter();

  return <OGImageTemplate heading={title} />;
};

export default OpenGraphImagePage;
