const formatType = (
  value: string | number,
  type: 'months' | 'days' | 'hours' | 'minutes' | 'seconds'
) => {
  const isMonths = type === 'months';
  const isDays = type === 'days';
  const isHours = type === 'hours';
  const isMinutes = type === 'minutes';
  const isSeconds = type === 'seconds';

  return value === 1
    ? isMonths
      ? 'Miesiąc'
      : isDays
      ? 'Dzień'
      : isHours
      ? 'Godzina'
      : isMinutes
      ? 'Minuta'
      : isSeconds
      ? 'Sekunda'
      : null
    : (value >= 2 && value <= 4) ||
      (value >= 22 && value <= 24) ||
      (value >= 32 && value <= 34) ||
      (value >= 42 && value <= 44) ||
      (value >= 52 && value <= 54)
    ? isMonths
      ? 'Miesiące'
      : isDays
      ? 'Dni'
      : isHours
      ? 'Godziny'
      : isMinutes
      ? 'Minuty'
      : isSeconds
      ? 'Sekundy'
      : null
    : isMonths
    ? 'Miesięcy'
    : isDays
    ? 'Dni'
    : isHours
    ? 'Godzin'
    : isMinutes
    ? 'Minut'
    : isSeconds
    ? 'Sekund'
    : null;
};

export { formatType };
