import { useDeleteItemMutation, useMeQuery } from '@/generated/graphql';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, IconButton, Link, Text, useColorModeValue, useToken } from '@chakra-ui/react';
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
    const [lightColor, darkColor] = useToken("colors", ["primaryL.600", "primaryD.500"]);
    const color = useColorModeValue(lightColor, darkColor);

    if (meData?.me?.id !== creatorId) return null;

    return (
        <Box>
            <NextLink href="/product/edit/[id]" as={`/product/edit/${id}`}>
                <IconButton
                    mr={4}
                    as={Link}
                    icon={<FaEdit />}
                    aria-label="Edit Item"
                    border="1px solid"
                    borderColor={color}
                />
            </NextLink>

            <IconButton
                icon={<FaTrashAlt />}
                aria-label="Delete Item"
                border="1px solid"
                borderColor={color}
                onClick={() => setIsOpen(true)}
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
