import Link from 'next/link';
import {
  UnorderedList,
  ListItem,
  Stack,
  Input,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { sortBy } from 'lodash';
import type { Properties } from './Search.types';

const Search = ({ events }: Properties): JSX.Element => {
  const [providedValue, setProvidedValue] = useState<string>('');

  const styles = {
    box: {
      borderBottomColor: useColorModeValue('gray.200', 'gray.700'),
      backgroundColorOnHover: useColorModeValue('gray.100', 'gray.900'),
    },
  };

  return (
    <Box>
      <Stack spacing="10px">
        <Input
          type="text"
          aria-label="Wyszukaj wydarzenie"
          marginBottom="20px"
          value={providedValue}
          onChange={(event) => setProvidedValue(event.target.value)}
        />
      </Stack>
      <UnorderedList margin={0} listStyleType="none">
        {sortBy(events, ({ name }) => name.toLowerCase())
          .filter(({ name }) =>
            name.toLowerCase().includes(providedValue.toLowerCase())
          )
          .map(({ name, slug }, index: number) => (
            <ListItem key={index + 1}>
              <Link href={`wydarzenie/${slug}`} passHref>
                <a title={name}>
                  <Box
                    p="10px"
                    cursor="pointer"
                    borderBottomWidth="1px"
                    borderBottomColor={styles.box.borderBottomColor}
                    _hover={{
                      backgroundColor: styles.box.backgroundColorOnHover,
                    }}
                  >
                    {name}
                  </Box>
                </a>
              </Link>
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default Search;
