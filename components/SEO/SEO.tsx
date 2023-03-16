import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { WEBSITE_DATA } from '../../helpers/constants';
import type { Properties } from './SEO.types';

const SEO = ({ ...properties }: Properties): JSX.Element => {
  const { asPath } = useRouter();

  const URL = `${WEBSITE_DATA.baseURL}${asPath}`;

  return <NextSeo canonical={URL} openGraph={{ url: URL }} {...properties} />;
};

export default SEO;
