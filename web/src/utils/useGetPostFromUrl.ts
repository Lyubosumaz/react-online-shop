import { useItemQuery } from '../generated/graphql';
import { useGetIntId } from './useGetIntId';

export const useGetItemFromUrl = () => {
    const intId = useGetIntId();
    return useItemQuery({
        skip: intId === -1,
        variables: {
            id: intId,
        },
    });
};
