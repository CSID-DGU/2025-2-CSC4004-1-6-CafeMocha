import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

export default redis

export const redisUtils = {
  setWithTTL: async (key: string, value: any, ttlSeconds: number) => {
    try {
      await redis.setex(key, ttlSeconds, JSON.stringify(value))
    } catch (error) {
      console.error('Redis setWithTTL 오류:', error)
      throw error
    }
  },

  get: async <T>(key: string): Promise<T | null> => {
    try {
      const value = await redis.get(key)
      if (value === null) return null
      return JSON.parse(value as string) as T
    } catch (error) {
      console.error('Redis get 오류:', error)
      return null
    }
  },

  set: async (key: string, value: any) => {
    try {
      await redis.set(key, JSON.stringify(value))
    } catch (error) {
      console.error('Redis set 오류:', error)
      throw error
    }
  },

  listPush: async (key: string, value: any, ttlSeconds?: number) => {
    try {
      await redis.rpush(key, JSON.stringify(value))
      if (ttlSeconds !== undefined) {
        await redis.expire(key, ttlSeconds)
      }
    } catch (error) {
      console.error('Redis listPush 오류:', error)
      throw error
    }
  },

  listGet: async <T>(key: string): Promise<T[]> => {
    try {
      const values = await redis.lrange(key, 0, -1)
      return values.map((v) => JSON.parse(v as string) as T)
    } catch (error) {
      console.error('Redis listGet 오류:', error)
      return []
    }
  },

  listDelete: async (key: string) => {
    try {
      await redis.del(key)
    } catch (error) {
      console.error('Redis listDelete 오류:', error)
    }
  },

  delete: async (key: string) => {
    try {
      await redis.del(key)
    } catch (error) {
      console.error('Redis delete 오류:', error)
    }
  },
}

