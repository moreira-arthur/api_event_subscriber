import { redis } from '../redis/client'

interface GetSubscriberInviteParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberInviteParams) {
  const count = await redis.hget('referral:acess-count', subscriberId)
  return { count: count ? Number.parseInt(count) : 0 }
}
