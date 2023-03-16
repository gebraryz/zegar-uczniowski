import { WEBSITE_DATA } from './helpers/constants';

export const SEOConfig = {
  title: WEBSITE_DATA.title,
  titleTemplate: `%s | ${WEBSITE_DATA.title}`,
  description: WEBSITE_DATA.description,
  canonical: WEBSITE_DATA.baseURL,
  openGraph: {
    url: WEBSITE_DATA.baseURL,
    title: WEBSITE_DATA.title,
    description: WEBSITE_DATA.description,
    type: 'website',
    locale: 'pl_PL',
    images: [
      {
        url: `${WEBSITE_DATA.baseURL}/api/og-image/${WEBSITE_DATA.title}`,
        width: 1280,
        height: 627,
        type: 'image/jpg',
      },
    ],
  },
};
