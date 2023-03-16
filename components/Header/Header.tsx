import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ModeChanger from '../ModeChanger';
import { WEBSITE_DATA } from '../../helpers/constants';

const Header = (): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const { pathname } = useRouter();

  const styles = {
    header: {
      borderColor: useColorModeValue('gray.200', 'gray.700'),
    },
  };

  const ALL_PAGES: {
    name: string;
    location: `/${string}`;
  }[] = [
    { name: 'Strona główna', location: WEBSITE_DATA.routes.home },
    { name: 'Wszystkie wydarzenia', location: WEBSITE_DATA.routes.allEvents },
    { name: 'Pytania i odpowiedzi', location: WEBSITE_DATA.routes.QAA },
  ];

  return (
    <Flex
      padding="10px 20px"
      borderBottom={pathname === '/' ? null : '1px'}
      backgroundColor="transparent"
      borderColor={styles.header.borderColor}
      justifyContent="space-between"
      alignItems="center"
      as="header"
      position={pathname === '/' ? 'fixed' : 'sticky'}
      left={0}
      right={0}
      zIndex={2}
    >
      <Link href={WEBSITE_DATA.routes.home}>
        <a title="Strona główna">
          <Image
            src="/images/favicons/favicon.ico"
            width="50px"
            height="50px"
            title="Logo"
            alt="Logo"
          />
        </a>
      </Link>
      <Box>
        <Menu>
          <MenuButton
            aria-label={`${isMenuOpened ? 'Zamknij' : 'Otwórz'} menu`}
            as={Button}
            rightIcon={isMenuOpened ? <ChevronUpIcon /> : <ChevronDownIcon />}
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            Menu
          </MenuButton>
          <MenuList>
            {ALL_PAGES.map(({ name, location }, index: number) => (
              <Link href={location} key={index + 1} passHref>
                <a title={name}>
                  <MenuItem>{name}</MenuItem>
                </a>
              </Link>
            ))}
          </MenuList>
        </Menu>
        {pathname === '/' ? null : <ModeChanger marginLeft="10px" />}
      </Box>
    </Flex>
  );
};

export default Header;
