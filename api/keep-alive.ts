export default async function handler(req: Request) {
  if (req.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return Response.json({ ok: false, error: 'Supabase environment variables are not configured' }, { status: 500 })
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/products?select=id&limit=1`, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      const detail = await response.text()
      return Response.json({ ok: false, status: response.status, detail }, { status: 502 })
    }

    return Response.json({ ok: true, service: 'shins-empire-supabase-health-check', checkedAt: new Date().toISOString() })
  } catch (error) {
    return Response.json({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 502 })
  }
}
