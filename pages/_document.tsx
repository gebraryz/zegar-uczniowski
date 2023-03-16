import {
  Html as NextHtml,
  Head as NextHead,
  Main as NextMain,
  NextScript,
} from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import Favicons from '../components/Favicons';
import CookiesNotice from '../components/CookiesNotice';
import { theme } from '../helpers/theme';

const Document = (): JSX.Element => (
  <NextHtml lang="pl-PL"  prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
    <NextHead>
      <Favicons />
    </NextHead>
    <body>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <NextMain />
      <CookiesNotice />
      <NextScript />
    </body>
  </NextHtml>
);

export default Document;
