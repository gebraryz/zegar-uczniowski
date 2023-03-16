import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import type { Properties } from './ModeChanger.types';

const ModeChanger = ({ ...properties }: Properties): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      aria-label={`Zmiana obecnego motywu strony na kolor ${
        colorMode === 'light' ? 'czarny' : 'biały'
      }`}
      {...properties}
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ModeChanger;
