import { IconButton, useColorMode, useColorModeValue, useToken } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface GoBackProps {
    control?: 'custom' | 'product' | 'default';
}

type ControlStylesType = {
    size?: string;
    color?: string;
    bgColor?: string;
    border?: string;
    borderColor?: string;
    _hover: {
        bgColor: string,
        color?: string
    };
}

export const GoBack: FC<GoBackProps> = ({ control = 'default' }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [controlStyles, setControlStyles] = useState<ControlStylesType>()
    const [bgLightColor, bgDarkColor] = useToken("colors", ["primaryL.600", "primaryD.500"]);
    const bgColor = useColorModeValue(bgLightColor, bgDarkColor);

    useEffect(() => {
        stylesState(control)
    }, [colorMode]);

    const stylesState = (key: string) => {
        let styles;
        switch (key) {
            case "product":
                styles = {
                    size: "sm",
                    border: "0.1rem solid",
                    borderColor: bgColor,
                    _hover: { bgColor: bgColor, color: "white", },
                }
                break;
            case "custom":
                styles = {
                    color: colorMode === 'light' ? 'primaryD.50' : 'primaryD.900',
                    bgColor: colorMode === 'light' ? 'teal.500' : 'teal.200',
                    _hover: { bgColor: colorMode === 'light' ? 'teal.600' : 'teal.300' },
                }
                break;
            default:
                styles = {
                    color: "secondaryL.100",
                    bgColor: 'primaryL.700',
                    _hover: { bgColor: 'secondaryL.100', color: 'primaryL.700' },
                }
                break;
        }

        setControlStyles(styles);
    }

    return (
        <IconButton
            aria-label="Click to go Back"
            icon={<FaArrowLeft />}
            onClick={() => router.back()}
            {...controlStyles}
        />
    );
};
