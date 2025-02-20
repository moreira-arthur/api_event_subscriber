import { redis } from '../redis/client'

interface AcessInviteLinkParams {
  subscriberId: string
}

export async function acessInviteLink({ subscriberId }: AcessInviteLinkParams) {
  await redis.hincrby('referral:acess-count', subscriberId, 1)
}
