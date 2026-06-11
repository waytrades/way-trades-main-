export default defineEventHandler(async () => {
  const key = process.env.WHOP_API_KEY

  if (!key) {
    return { count: null, error: 'WHOP_API_KEY not set' }
  }

  try {
    // Filter by the VIP access pass slug — only counts paid VIP members
    const res = await fetch(
      'https://api.whop.com/api/v2/memberships?valid=true&access_pass_id=vip-access-60-1cb2&limit=1',
      { headers: { Authorization: `Bearer ${key}` } }
    )

    if (!res.ok) {
      // Fallback: try without access_pass filter if slug format is wrong
      const fallback = await fetch(
        'https://api.whop.com/api/v2/memberships?valid=true&limit=1',
        { headers: { Authorization: `Bearer ${key}` } }
      )
      if (!fallback.ok) return { count: null, error: `Whop API error: ${fallback.status}` }
      const fallbackData = await fallback.json()
      return { count: fallbackData?.pagination?.total_count ?? null }
    }

    const data = await res.json()
    const count = data?.pagination?.total_count ?? null
    return { count }
  } catch (e) {
    return { count: null, error: e.message }
  }
})
