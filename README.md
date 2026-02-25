# VibeGuard Vulnerable Test App

This is an intentionally vulnerable Node.js application designed to test the detection capabilities of VibeGuard.

## Vulnerabilities Included

### Secret-Based Vulnerabilities
- Hardcoded API keys (Stripe, OpenAI, AWS) in `config/secrets.js`
- Exposed RSA private key in `keys/private.key`
- Hardcoded DB credentials in `database/db.js`
- Environment secrets exposed in `.env`
- Frontend secret exposure in `frontend/app.js`

### Logic-Based Vulnerabilities
- IDOR (Insecure Direct Object Reference) in `routes/users.js`
- Missing backend authorization for admin panel in `routes/admin.js`
- UI-only authorization in `frontend/admin.js`
- Predictable user identifiers in `models/users.js`
- Plaintext password storage in `storage/users.json`
- Plaintext session storage in `server.js`

### Configuration & Security Flaws
- CORS misconfiguration (origin: "*") in `server.js`
- Weak crypto (MD5) and hardcoded encryption key in `crypto/crypto.js`
- Debug endpoint exposing environment variables in `server.js`
- Missing backend authentication middleware in `middleware/auth.js`

## Total Vulnerability Count: 40+
