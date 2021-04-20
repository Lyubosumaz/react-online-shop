import { SiteUtilitiesVariants } from "@/layouts/SiteUtilities";
import { IconButton, useColorMode, useStyleConfig } from '@chakra-ui/react';
import { FC } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
interface ColorModeProps {
    appearance: SiteUtilitiesVariants;
}

export const ColorMode: FC<ColorModeProps> = ({ appearance }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const mainColorModeButton = useStyleConfig("ColorModeButtonMain");
    const secondaryColorModeButton = useStyleConfig("ColorModeButtonSecondary");

    return (
        <IconButton
            key="color_mode_button"
            aria-label="Color Mode"
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            sx={appearance === 'secondaryHeader'
                ? secondaryColorModeButton
                : mainColorModeButton}
        />
    );
};
