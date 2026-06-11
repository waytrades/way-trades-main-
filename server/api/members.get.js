export default defineEventHandler(async () => {
  const key = process.env.WHOP_API_KEY

  if (!key) {
    return { count: null, error: 'WHOP_API_KEY not set' }
  }

  try {
    // Fetch valid memberships with limit=1 — we only need total_count from pagination
    const res = await fetch(
      'https://api.whop.com/api/v2/memberships?valid=true&limit=1',
      { headers: { Authorization: `Bearer ${key}` } }
    )

    if (!res.ok) {
      return { count: null, error: `Whop API error: ${res.status}` }
    }

    const data = await res.json()
    const count = data?.pagination?.total_count ?? null
    return { count }
  } catch (e) {
    return { count: null, error: e.message }
  }
})
