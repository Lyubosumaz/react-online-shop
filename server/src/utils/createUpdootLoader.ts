import DataLoader from 'dataloader';
import { Star } from '../entities/Star';

export const createUpdootLoader = () =>
    new DataLoader<{ postId: number; userId: number }, Star | null>(async (keys) => {
        const stars = await Star.findByIds(keys as any);
        const updootIdsToUpdoot: Record<string, Star> = {};
        stars.forEach((star) => {
            updootIdsToUpdoot[`${star.userId}|${star.postId}`] = star;
        });

        const sortedUpdoot = keys.map((key) => updootIdsToUpdoot[`${key.userId}|${key.postId}`]);
        return sortedUpdoot;
    });
