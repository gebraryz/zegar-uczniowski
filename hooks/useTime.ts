import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { isNaN } from 'lodash';
import type { QUnitType, OpUnitType } from 'dayjs';

const useTime = (
  time: number
): {
  months: string | number;
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
  isEventEnd: boolean;
  isLoaded: boolean;
  isError: boolean;
} => {
  const [months, setMonths] = useState<string | number>('XX');
  const [days, setDays] = useState<string | number>('XX');
  const [hours, setHours] = useState<string | number>('XX');
  const [minutes, setMinutes] = useState<string | number>('XX');
  const [seconds, setSeconds] = useState<string | number>('XX');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isEventEnd, setIsEventEnd] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const startTime = dayjs(time).format();
    const endTime = dayjs(Date.now()).format();

    const getUnit = (unit: QUnitType | OpUnitType): number =>
      Math.round(dayjs(startTime).diff(dayjs(endTime), unit, true));

    const interval = setInterval(() => {
      setMonths(getUnit('month'));
      setDays(getUnit('day'));
      setHours(getUnit('hour'));
      setMinutes(getUnit('minute'));
      setSeconds(getUnit('second'));
    }, 1000);

    if (
      months === 'XX' &&
      days === 'XX' &&
      hours === 'XX' &&
      minutes === 'XX' &&
      seconds === 'XX'
    ) {
      setIsLoaded(false);
    } else {
      setIsLoaded(true);
    }

    if (
      months <= 0 &&
      days <= 0 &&
      hours <= 0 &&
      minutes <= 0 &&
      seconds <= 0
    ) {
      setIsEventEnd(true);
    } else {
      setIsEventEnd(false);
    }

    if (
      isNaN(months) ||
      isNaN(days) ||
      isNaN(hours) ||
      isNaN(minutes) ||
      isNaN(seconds)
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    return () => clearInterval(interval);
  }, [time, months, days, hours, minutes, seconds]);

  return {
    months,
    days,
    hours,
    minutes,
    seconds,
    isLoaded,
    isEventEnd,
    isError,
  };
};

export { useTime };
