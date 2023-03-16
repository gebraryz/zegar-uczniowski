import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Paragraph from '../Paragraph';

const Footer = (): JSX.Element => {
  const { pathname } = useRouter();

  const styles = {
    footer: {
      borderColor: useColorModeValue('gray.200', 'gray.700'),
    },
  };

  return (
    <Flex
      as="footer"
      padding="10px"
      justifyContent="flex-end"
      textAlign="right"
      borderTopWidth={'1px'}
      backgroundColor={pathname === '/' ? '#000' : null}
      borderColor={styles.footer.borderColor}
      color={pathname === '/' ? '#fff' : null}
    >
      <Paragraph color="black">
        &copy; {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.
      </Paragraph>
    </Flex>
  );
};

export default Footer;
