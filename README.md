# LinkForge — Professional URL Shortener Platform

Hostinger-ready PHP + MySQL URL shortener with clean routes, admin/user roles, single and bulk workflows, OG Preview, Domain Control and Abuse Protection.

## Routes
- `/`
- `/login`
- `/admin`
- `/dashboard`
- `/s/{code}`

## Security
CSRF, prepared PDO statements, password_hash/password_verify, secure sessions, role protection, output escaping, and upload validation.

## Hostinger
1. Import `database/schema.sql`.
2. Copy `config/config.php.example` to `config/config.php`.
3. Enter Hostinger MySQL credentials.
4. Upload to `public_html`.
5. Set the real `base_url`.
6. Make `uploads/` writable.

Do not commit production credentials.
