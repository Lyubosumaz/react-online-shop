import { IconButton, useStyleConfig } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
interface GoBackProps {
    control?: 'product' | 'secondaryHeader' | 'default';
}

export const GoBack: FC<GoBackProps> = ({ control = 'default' }) => {
    const router = useRouter();
    const productGoBackButton = useStyleConfig("GoBackButtonProduct");
    const secondaryGoBackButton = useStyleConfig("GoBackButtonSecondary");
    const defaultGoBackButton = useStyleConfig("GoBackButtonDefault");

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

        return styles;
    }

    return (
        <IconButton
            aria-label="Click to go Back"
            icon={<FaArrowLeft />}
            onClick={() => router.back()}
            sx={stylesState(control)}
        />
    );
};
