import { IconButton, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface GoBackProps {
    control?: 'custom' | 'regular';
}

type ControlStylesType = {
    color: string;
    bgColor: string;
    _hover: {
        bgColor: string,
        color?: string
    };
}

export const GoBack: FC<GoBackProps> = ({ control = 'regular' }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [controlStyles, setControlStyles] = useState<ControlStylesType>()

    useEffect(() => {
        stylesState(control)
    }, [colorMode]);

    const stylesState = (key: string) => {
        let styles;
        switch (key) {
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
