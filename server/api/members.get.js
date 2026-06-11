export default defineEventHandler(async () => {
  const key = process.env.WHOP_API_KEY

  if (!key) {
    return { count: null, error: 'WHOP_API_KEY not set' }
  }

  const headers = { Authorization: `Bearer ${key}` }

  try {
    // Step 1: Get all products to find the VIP product ID
    const productsRes = await fetch(
      'https://api.whop.com/api/v2/products?limit=20',
      { headers }
    )

    if (!productsRes.ok) {
      return { count: null, error: `Products API error: ${productsRes.status}` }
    }

    const productsData = await productsRes.json()
    const products = productsData?.data ?? []

    // Find the VIP product by matching the slug/name
    const vipProduct = products.find(p =>
      p.slug?.includes('vip') ||
      p.name?.toLowerCase().includes('vip') ||
      p.id?.includes('vip')
    )

    // Step 2: Fetch memberships — filtered by product ID if we found it
    const url = vipProduct
      ? `https://api.whop.com/api/v2/memberships?valid=true&product_id=${vipProduct.id}&limit=1`
      : `https://api.whop.com/api/v2/memberships?valid=true&limit=1`

    const membersRes = await fetch(url, { headers })

    if (!membersRes.ok) {
      return { count: null, error: `Memberships API error: ${membersRes.status}` }
    }

    const membersData = await membersRes.json()
    const count = membersData?.pagination?.total_count ?? null

    return { count, productId: vipProduct?.id ?? null }
  } catch (e) {
    return { count: null, error: e.message }
  }
})
