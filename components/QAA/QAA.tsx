import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import Paragraph from '../Paragraph';

const QAA = ({ data }): JSX.Element => {
  const styles = {
    accordionButton: {
      backgroundColor: useColorModeValue('gray.100', 'gray.900'),
    },
  };

  return (
    <Accordion allowMultiple>
      {data.map(({ question, answer }, index: number) => (
        <AccordionItem key={index + 1}>
          <AccordionButton
            _expanded={{
              backgroundColor: styles.accordionButton.backgroundColor,
            }}
          >
            <Box textAlign="left" flex="1">
              {question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pt="20px">
            <Paragraph>{answer}</Paragraph>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QAA;
