import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req) {

        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== 'admin') {
            return NextResponse.redirect(new URL('/?message=admin_only', req.url))
        }

    }
)


export const config = { matcher: ['/products/:path*', '/admin/:path*', '/users'] }