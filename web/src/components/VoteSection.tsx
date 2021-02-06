import { ApolloCache } from '@apollo/client';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { ItemSnippetFragment, useVoteMutation, VoteMutation } from '../generated/graphql';


interface VoteSectionProps {
    item: ItemSnippetFragment;
}

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
        if (data.voteStatus === value) {
            return;
        }
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

export const VoteSection: React.FC<VoteSectionProps> = ({ item }) => {
    const [loadingState, setLoadingState] = useState<'star-loading' | 'downdoot-loading' | 'not-loading'>('not-loading');
    const [vote] = useVoteMutation();
    return (
        <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
            <IconButton
                onClick={async () => {
                    if (item.voteStatus === 1) {
                        return;
                    }
                    setLoadingState('star-loading');
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
                isLoading={loadingState === 'star-loading'}
                aria-label="star item"
                icon={<ChevronUpIcon />}
            />
            {item.rating}
            <IconButton
                onClick={async () => {
                    if (item.voteStatus === -1) {
                        return;
                    }
                    setLoadingState('downdoot-loading');
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
                isLoading={loadingState === 'downdoot-loading'}
                aria-label="downdoot item"
                icon={<ChevronDownIcon />}
            />
        </Flex>
    );
};
