import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useDeleteItemMutation, useMeQuery } from '../generated/graphql';

interface EditDeleteItemButtonsProps {
    id: number;
    creatorId: number;
}

export const EditDeleteItemButtons: React.FC<EditDeleteItemButtonsProps> = ({ id, creatorId }) => {
    const { data: meData } = useMeQuery();
    const [deleteItem] = useDeleteItemMutation();

    if (meData?.me?.id !== creatorId) {
        return null;
    }

    return (
        <Box>
            <NextLink href="/item/edit/[id]" as={`/item/edit/${id}`}>
                <IconButton as={Link} mr={4} icon={<EditIcon />} aria-label="Edit Item" />
            </NextLink>
            <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete Item"
                onClick={() => {
                    deleteItem({
                        variables: { id },
                        update: (cache) => {
                            // Item:77
                            cache.evict({ id: 'Item:' + id });
                        },
                    });
                }}
            />
        </Box>
    );
};
