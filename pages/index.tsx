import Link from 'next/link';
import {
  SlideFade,
  Box,
  Stack,
  Flex,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import DefaultLayout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import SEO from '../components/SEO';
import { WEBSITE_DATA } from '../helpers/constants';

const HomePage = (): JSX.Element => (
  <>
    <SEO title="Strona główna" />
    <DefaultLayout>
      <Box
        as="section"
        background={`#000 url("/images/new-year.jpg") no-repeat center center fixed`}
        backgroundSize="cover"
        sx={{
          '&::after': {
            content: "''",
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.685)',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
          },
        }}
      >
        <Flex
          p="20px"
          minHeight="100vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing="10px" zIndex={1}>
            <SlideFade offsetY="20px" in>
              <Heading
                as="h1"
                fontWeight="800"
                color="white"
                textTransform="uppercase"
              >
                <Text
                  as="span"
                  bgGradient="linear(to-l, #EFF1FF, #666) no-repeat center center fixed"
                  bgSize="100% 20%"
                  bgClip="text"
                >
                  {WEBSITE_DATA.title}
                </Text>
              </Heading>
            </SlideFade>
            <SlideFade offsetY="40px" delay={0.5} in>
              <Paragraph color="white">{WEBSITE_DATA.description}</Paragraph>
            </SlideFade>
            <SlideFade offsetY="40px" delay={0.75} in>
              <Flex justifyContent="flex-end">
                <Link href={WEBSITE_DATA.routes.allEvents} passHref>
                  <a title="Wyszukaj odliczanie">
                    <Button>Wyszukaj odliczanie</Button>
                  </a>
                </Link>
              </Flex>
            </SlideFade>
          </Stack>
        </Flex>
      </Box>
    </DefaultLayout>
  </>
);

export default HomePage;
