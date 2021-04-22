import { CSSWithMultiValues, IconButton, useColorMode, useStyleConfig } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface GoBackProps {
    control?: 'secondaryHeader' | 'product' | 'default';
}

export const GoBack: FC<GoBackProps> = ({ control = 'default' }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [controlStyles, setControlStyles] = useState<CSSWithMultiValues>();
    const productGoBackButton = useStyleConfig("GoBackButtonProduct");
    const secondaryGoBackButton = useStyleConfig("GoBackButtonSecondary");
    const defaultGoBackButton = useStyleConfig("GoBackButtonDefault");

    useEffect(() => {
        stylesState(control)
    }, [colorMode]);

    const stylesState = (key: string) => {
        let styles;
        switch (key) {
            case "product":
                styles = productGoBackButton;
                break;
            case "secondaryHeader":
                styles = secondaryGoBackButton;
                break;
            default:
            case "default":
                styles = defaultGoBackButton;
                break;
        }

        setControlStyles(styles);
    }

    return (
        <IconButton
            aria-label="Click to go Back"
            icon={<FaArrowLeft />}
            onClick={() => router.back()}
            sx={controlStyles}
        />
    );
};
