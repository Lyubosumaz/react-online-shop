import { Box, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDeleteItemMutation, useMeQuery } from '../../../../generated/graphql';
interface ItemActionButtonsProps {
    id: number;
    creatorId: number;
}

export const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({ id, creatorId }) => {
    const { data: meData } = useMeQuery();
    const [deleteItem] = useDeleteItemMutation();

    if (meData?.me?.id !== creatorId) {
        return null;
    }

    return (
        <Box>
            <NextLink href="/item/edit/[id]" as={`/item/edit/${id}`}>
                <IconButton as={Link} mr={4} icon={<FaEdit />} aria-label="Edit Item" />
            </NextLink>

            <IconButton
                icon={<FaTrashAlt />}
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