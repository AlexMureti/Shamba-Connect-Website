/**
 * The one place the public origin is defined.
 *
 * shambaconnect.co.ke 308-redirects to www.shambaconnect.co.ke, but metadataBase,
 * the canonical tag, og:url and all 13 sitemap entries pointed at the apex. Every
 * sitemap URL was therefore a redirect, and every page declared a canonical that
 * redirected away from the page serving it.
 *
 * If the host is ever changed so the apex serves directly, change this constant
 * and nothing else.
 */
export const SITE_URL = "https://www.shambaconnect.co.ke"
