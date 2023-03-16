import Image from 'next/image';
import Logo from '../../../public/images/favicons/favicon.ico';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { cropText } from '../../../helpers/functions/cropText';
import type { Properties } from './OGImage.types';

const OGImageTemplate = ({ heading }: Properties): JSX.Element => {
  return (
    <>
      <Box color="white" backgroundColor="gray.800" minHeight="100vh">
        <Flex justifyContent="flex-end" padding="30px">
          <Image
            src={Logo.src}
            width="50px"
            height="50px"
            alt="Logo witryny internetowej"
          />
        </Flex>
        <Box padding="40px 80px">
          <Heading as="h1" size="3xl" textTransform="uppercase">
            {cropText(String(heading))}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default OGImageTemplate;
