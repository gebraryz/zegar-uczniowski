const cropText = (value: string): string => {
  const maxLength = 150;

  return value.length > maxLength
    ? `${value.slice(0, Math.max(0, maxLength - 1))}...`
    : value;
};

export { cropText };
