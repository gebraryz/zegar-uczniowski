import { Spinner, Flex, Portal, useColorModeValue } from '@chakra-ui/react';

const CounterLoader = (): JSX.Element => {
  const styles = {
    loader: {
      backgroundColor: useColorModeValue('white', 'gray.800'),
    },
  };

  return (
    <Portal>
      <Flex
        backgroundColor={styles.loader.backgroundColor}
        justifyContent="center"
        alignItems="center"
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <Spinner size="xl" />
      </Flex>
    </Portal>
  );
};

export default CounterLoader;
