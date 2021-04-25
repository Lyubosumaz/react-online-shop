import { Box, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';

export type SiteTooltipVariants = 'link' | 'default';

interface SiteTooltipProps {
    label: string;
    variants?: SiteTooltipVariants;
}

export const SiteTooltip: FC<SiteTooltipProps> = ({ children, label, variants = "default" }) => {
    return (
        variants === "default"
            ? (
                <Tooltip label={label} fontSize="1.2rem" hasArrow>{children}</Tooltip >
            )
            : (
                <Tooltip label={label} fontSize="1.2rem" hasArrow>
                    <Box>{children}</Box>
                </Tooltip >
            )
    );
};
