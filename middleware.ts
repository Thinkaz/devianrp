import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest): Promise<NextResponse> {
    const res = NextResponse.next()
    const supabase: SupabaseClient = createMiddlewareClient({ req, res })
    await supabase.auth.getSession()
    return res
}