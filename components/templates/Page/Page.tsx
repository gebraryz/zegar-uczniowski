import { Box, Heading } from '@chakra-ui/react';
import Divider from '../../Divider';
import type { Properties } from './Page.types';

const PageTemplate = ({ type, children }: Properties): JSX.Element => (
  <Box
    as="main"
    marginLeft="auto"
    marginRight="auto"
    padding="25px"
    minHeight="100vh"
    maxWidth="85ch"
  >
    <Box>
      <Heading as="h2">{type}</Heading>
      <Divider marginBottom="20px" marginTop="20px" />
    </Box>
    {children}
  </Box>
);

export default PageTemplate;
