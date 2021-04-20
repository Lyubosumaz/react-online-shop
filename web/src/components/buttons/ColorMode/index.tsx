import { SiteUtilitiesVariants } from "@/layouts/SiteUtilities";
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
interface ColorModeProps {
    appearance: SiteUtilitiesVariants;
}

export const ColorMode: FC<ColorModeProps> = ({ appearance }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            key="color_mode_button"
            aria-label="Color Mode"
            fontSize="1.5rem"
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            color="inherit"
            bgColor="inherit"
            _hover={appearance === 'secondaryHeader'
                ? { bgColor: colorMode === 'light' ? 'teal.600' : 'teal.300' }
                : { bgColor: 'secondaryL.100', color: 'primaryL.700' }
            }
        />
    );
};
