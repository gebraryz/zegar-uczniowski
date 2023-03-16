import { Divider as ChakraDivider, useColorModeValue } from '@chakra-ui/react';
import type { Properties } from './Divider.types';

const Divider = ({ ...properties }: Properties): JSX.Element => {
  const styles = {
    divider: {
      backgroundColor: useColorModeValue('gray.200', 'gray.700'),
    },
  };

  return (
    <ChakraDivider
      borderColor={styles.divider.backgroundColor}
      {...properties}
    />
  );
};

export default Divider;
