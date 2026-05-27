const requiredEnv = ['ADMIN_EMAIL', 'ADMIN_PASSWORD']

// Only perform strict environment validation on the server.
// Importing this module in the browser (client component) should not throw.
if (typeof window === 'undefined') {
  requiredEnv.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing environment variable: ${key}`)
    }
  })
}

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL!
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!

export const SESSION_KEY = process.env.SESSION_KEY || 'pe_admin_session'

export const SESSION_VALUE = process.env.SESSION_VALUE || 'authenticated'
