import { Flex, SlideFade } from '@chakra-ui/react';
import Paragraph from '../../Paragraph';

const CounterInformation = ({ children, isDependent = false }): JSX.Element => {
  const sliderProperties = { offsetY: '20px', in: true };

  return isDependent ? (
    <Flex justifyContent="flex-end" textAlign="right">
      <SlideFade {...sliderProperties}>
        <Paragraph>{children}</Paragraph>
      </SlideFade>
    </Flex>
  ) : (
    <SlideFade {...sliderProperties}>
      <Paragraph>{children}</Paragraph>
    </SlideFade>
  );
};

export default CounterInformation;
