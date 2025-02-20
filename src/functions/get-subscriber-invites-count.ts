import { redis } from '../redis/client'

interface GetSubscriberInviteCount {
  subscriberId: string
}

export async function getSubscriberInviteCount({
  subscriberId,
}: GetSubscriberInviteCount) {
  const count = await redis.zscore('referral:ranking', subscriberId)
  return { count: count ? Number.parseInt(count) : 0 }
}
