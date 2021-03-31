import { useDeleteItemMutation, useMeQuery } from '@/generated/graphql';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    IconButton,
    Link
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
interface ItemActionButtonsProps {
    id: number;
    creatorId: number;
}

export const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({ id, creatorId }) => {
    const { data: meData } = useMeQuery();
    const [deleteItem] = useDeleteItemMutation();
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef<HTMLButtonElement>(null);

    if (meData?.me?.id !== creatorId) {
        return null;
    }

    return (
        <Box>
            <NextLink href="/item/edit/[id]" as={`/item/edit/${id}`}>
                <IconButton as={Link} mr={4} icon={<FaEdit />} aria-label="Edit Item" />
            </NextLink>

            <IconButton icon={<FaTrashAlt />} aria-label="Delete Item" onClick={() => setIsOpen(true)} />
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Item
                        </AlertDialogHeader>

                        <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
                            <Button
                                ml={3}
                                colorScheme="red"
                                onClick={() => {
                                    deleteItem({
                                        variables: { id },
                                        update: (cache) => {
                                            cache.evict({ id: 'Item:' + id });
                                        },
                                    });
                                }}
                            >Delete</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    );
};
