import { ItemSnippetFragment, useVoteMutation, VoteMutation } from '@/generated/graphql';
import { ApolloCache } from '@apollo/client';
import { Flex, IconButton, Text, useColorModeValue, useToken } from '@chakra-ui/react';
import gql from 'graphql-tag';
import { FC, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface RatingSectionProps {
    item: ItemSnippetFragment;
}
// TODO this needs to be reworked
// useVoteMutation should be for users
// an new useRatingMutation should be for items
// using the reworked Star entity
export const RatingSection: FC<RatingSectionProps> = ({ item }) => {
    const [loadingState, setLoadingState] = useState<'up-vote-loading' | 'down-vote-loading' | 'not-loading'>('not-loading');
    const [vote] = useVoteMutation();
    const [lightColor, darkColor] = useToken("colors", ["primaryL.600", "primaryD.500"]);
    const color = useColorModeValue(lightColor, darkColor);

    const updateAfterVote = (value: number, postId: number, cache: ApolloCache<VoteMutation>) => {
        const data = cache.readFragment<{
            id: number;
            rating: number;
            voteStatus: number | null;
        }>({
            id: 'Item:' + postId,
            fragment: gql`
            fragment _ on Item {
                id
                rating
                voteStatus
            }
        `,
        });

        if (data) {
            if (data.voteStatus === value) return;

            const newPoints = (data.rating as number) + (!data.voteStatus ? 1 : 2) * value;
            cache.writeFragment({
                id: 'Item:' + postId,
                fragment: gql`
                fragment __ on Item {
                    rating
                    voteStatus
                }
            `,
                data: { rating: newPoints, voteStatus: value },
            });
        }
    };

    return (
        <Flex>
            <IconButton
                onClick={async () => {
                    if (item.voteStatus === 1) return;

                    setLoadingState('up-vote-loading');
                    await vote({
                        variables: {
                            postId: item.id,
                            value: 1,
                        },
                        update: (cache) => updateAfterVote(1, item.id, cache),
                    });
                    setLoadingState('not-loading');
                }}
                colorScheme={item.voteStatus === 1 ? 'green' : undefined}
                isLoading={loadingState === 'up-vote-loading'}
                aria-label="Positive Vote"
                icon={<FaChevronUp />}
                border="0.1rem solid"
                borderColor={color}
            />

            <Text
                boxSize={10}
                mx={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="0.1rem solid"
                borderColor={color}
                borderRadius="0.375rem"
                lineHeight="0"
            >
                {item.rating}
            </Text>

            <IconButton
                onClick={async () => {
                    if (item.voteStatus === -1) return;

                    setLoadingState('down-vote-loading');
                    await vote({
                        variables: {
                            postId: item.id,
                            value: -1,
                        },
                        update: (cache) => updateAfterVote(-1, item.id, cache),
                    });
                    setLoadingState('not-loading');
                }}
                colorScheme={item.voteStatus === -1 ? 'red' : undefined}
                isLoading={loadingState === 'down-vote-loading'}
                aria-label="Negative Vote"
                icon={<FaChevronDown />}
                border="0.1rem solid"
                borderColor={color}
            />
        </Flex>
    );
};
