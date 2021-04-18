import { useDeleteItemMutation, useMeQuery } from '@/generated/graphql';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, IconButton, Link, Text, useStyleConfig } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC, useRef, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface ActionButtonsProps {
    id: number;
    creatorId: number;
}

export const ActionButtons: FC<ActionButtonsProps> = ({ id, creatorId }) => {
    const { data: meData } = useMeQuery();
    const [deleteItem] = useDeleteItemMutation();
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef<HTMLButtonElement>(null);

    const styles = useStyleConfig("ActionButtons");

    if (meData?.me?.id !== creatorId) return null;

    console.log(styles)
    return (
        <Box>
            <NextLink href="/product/edit/[id]" as={`/product/edit/${id}`}>
                <IconButton
                    as={Link}
                    icon={<FaEdit style={{ marginLeft: "0.275rem" }} />}
                    aria-label="Edit Item"
                    {...{ ...styles, mr: "1.25rem" }}
                />
            </NextLink>

            <IconButton
                icon={<FaTrashAlt />}
                aria-label="Delete Item"
                onClick={() => setIsOpen(true)}
                {...styles}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader>Deleting Item</AlertDialogHeader>
                        <AlertDialogBody px={6} py={4}>
                            <Text>Are you sure about that?</Text>
                            <Text>You would never undo this action afterwards.</Text>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button
                                mr={4}
                                ref={cancelRef}
                                onClick={onClose}
                            >Cancel</Button>

                            <Button
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
