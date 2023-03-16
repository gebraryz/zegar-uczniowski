import {
  CloseButton,
  Text,
  Portal,
  Alert,
  AlertIcon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Paragraph from '../Paragraph';
import { getCookie } from '../../helpers/functions/getCookie';

const CookiesNotice = (): JSX.Element => {
  const [isBannerClosed, setIsBannerClosed] = useLocalStorage(
    'is-banner-closed',
    false
  );

  useEffect(() => {
    if (getCookie('_ga') === undefined) {
      setIsBannerClosed(true);
    }
  });

  const styles = {
    alert: {
      backgroundColor: useColorModeValue('gray.200', 'gray.700'),
    },
  };

  return isBannerClosed ? null : (
    <Portal>
      <Alert
        zIndex={2}
        status="info"
        position="fixed"
        p="20px"
        backgroundColor={styles.alert.backgroundColor}
        bottom={0}
        left={0}
        right={0}
      >
        <AlertIcon />
        <Paragraph>
          Używamy{' '}
          <Link
            href="https://pl.wikipedia.org/wiki/HTTP_cookie"
            title="Informacja na temat plików cookies (ciasteczek)"
            aria-label="Informacja na temat plików cookies (ciasteczek)"
          >
            plików cookies (ciasteczek)
          </Link>
          , aby móc analizować działania na naszej stronie internetowej —
          pozwoli to na zapewnienie Ci lepszych doświadczeń z nią związanych.
          <br />
          Dalsze korzystanie z witryny{' '}
          <Text as="strong">oznacza ich akceptację</Text>.
        </Paragraph>
        <CloseButton
          position="absolute"
          right="5px"
          top="5px"
          aria-label="Zaakceptuj pliki cookies (ciasteczka)"
          onClick={() => setIsBannerClosed(true)}
        />
      </Alert>
    </Portal>
  );
};

export default CookiesNotice;
