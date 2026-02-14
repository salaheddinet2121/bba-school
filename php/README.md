# PHP Mail Forms (Hostinger + PHPMailer)

This folder is meant to be uploaded next to your static site output.

## 1) Install dependencies

Run inside `php/`:

```bash
composer install --no-dev --optimize-autoloader
```

This creates `php/vendor/` (required by PHPMailer).

## 2) Configure SMTP secrets

Edit `php/secrets.php` with your Hostinger SMTP credentials:

- `smtp_host`
- `smtp_port`
- `smtp_secure` (`ssl` or `tls`)
- `smtp_username`
- `smtp_password`
- `from_email`
- `from_name`
- `to_email`
- `to_name`

## 3) Upload

Upload:

- Built site files (e.g. `dist/*`)
- Full `php/` folder (including `vendor/`)

Expected endpoints:

- `/php/contact.php`
- `/php/demo-request.php`
- `/php/reclamation.php`
- `/php/devis.php`

## 4) Quick test

Submit each website form once and verify you receive emails at `to_email`.

