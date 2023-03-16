import { SlideFade, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import CounterInformation from './Information';
import Loader from '../Loader';
import Paragraph from '../Paragraph';
import { useTime } from '../../hooks/useTime';
import { formatNumber } from '../../helpers/functions/formatNumber';
import { formatType } from '../../helpers/functions/formatType';
import { MESSAGES } from '../../helpers/constants';
import type { Properties } from './Counter.types';

const Counter = ({ time, isDependent }: Properties): JSX.Element => {
  const {
    months,
    days,
    hours,
    minutes,
    seconds,
    isLoaded,
    isEventEnd,
    isError,
  } = useTime(time);

  useEffect(() => {
    document.body.style.overflowY = isLoaded ? 'visible' : 'hidden';
  }, [isLoaded]);

  const styles = {
    card: {
      backgroundColor: useColorModeValue('gray.100', 'gray.900'),
      borderColor: useColorModeValue('gray.200', 'gray.700'),
    },
  };

  const informations: {
    value: string | number;
    type: string;
  }[] = [
    { value: months, type: formatType(months, 'months') },
    { value: days, type: formatType(days, 'days') },
    { value: hours, type: formatType(hours, 'hours') },
    { value: minutes, type: formatType(minutes, 'minutes') },
    { value: seconds, type: formatType(seconds, 'seconds') },
  ];

  return (
    <>
      {isError ? (
        <CounterInformation>
          Wystąpił problem, przez co nie możemy rozpoznać konkretnej daty.
        </CounterInformation>
      ) : isLoaded === false ? (
        <Loader />
      ) : (
        <>
          {isEventEnd ? (
            <CounterInformation>
              {isDependent
                ? MESSAGES.eventEnd.dependent
                : MESSAGES.eventEnd.notDependent}
            </CounterInformation>
          ) : (
            <>
              <SlideFade offsetY="40px" in>
                {informations.map(({ value, type }, index: number) => (
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    backgroundColor={styles.card.backgroundColor}
                    borderWidth="1px"
                    borderColor={styles.card.borderColor}
                    padding="10px"
                    boxShadow="base"
                    sx={{
                      '&:not(:last-of-type)': {
                        marginBottom: '20px',
                      },
                    }}
                    key={index + 1}
                  >
                    <Heading as="h3">{formatNumber(value)}</Heading>
                    <Paragraph>{type}</Paragraph>
                  </Flex>
                ))}
              </SlideFade>
            </>
          )}
        </>
      )}
      {/* {isLoaded === false ? (
        <Loader />
      ) : isError ? (
        <CounterInformation>
          Wystąpił problem, przez co nie możemy rozpoznać konkretnej daty.
        </CounterInformation>
      ) : (
        <>
          {isEventEnd ? (
            <CounterInformation>
              {isDependent ? dependentEventEnd : notDependentEventEnd}
            </CounterInformation>
          ) : (
            <>
              <SlideFade offsetY="40px" in>
                {timeInformations.map(({ value, type }, index: number) => (
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    backgroundColor={useColorModeValue('gray.100', 'gray.900')}
                    borderWidth="1px"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    padding="10px"
                    boxShadow="base"
                    sx={{
                      '&:not(:last-of-type)': {
                        marginBottom: '20px',
                      },
                    }}
                    key={index + 1}
                  >
                    <Heading as="h3">{formatNumber(value)}</Heading>
                    <Paragraph>{type}</Paragraph>
                  </Flex>
                ))}
              </SlideFade>
            </>
          )}
        </>
      )} */}
    </>
  );
};

export default Counter;
