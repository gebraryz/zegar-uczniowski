import { Text } from '@chakra-ui/react';

const Paragraph = ({ children, ...properties }): JSX.Element => (
  <Text as="p" color="gray.500" {...properties}>
    {children}
  </Text>
);

export default Paragraph;
