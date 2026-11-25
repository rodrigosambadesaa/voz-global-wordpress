# PHP runtime security

## CVE-2026-128064 (2026-11-19)

Native PHP HTTP and FTP stream wrappers can send data unencrypted for mixed-case HTTPS/FTPS schemes, including redirect targets. Upgrade to PHP 8.2.36, 8.3.37, 8.4.28, 8.5.13 or a later supported, patched release. Vendor-supported backports are acceptable when the vendor confirms this CVE is fixed. Updating Composer dependencies alone does not patch PHP.

This repository contains a snapshot of WordPress and plugins, not a PHP runtime. Do not edit WordPress core to fix this native PHP vulnerability. Update the actual web-server PHP SAPI (FPM/Apache), confirm the version in the hosting control panel or WordPress Site Health, restart workers, and update WordPress/plugins separately. Check outbound HTTP integrations, including plugin stream transports.

Verify with `php -v` for CLI and the hosting configuration for the web SAPI. Rebuild or restart the relevant service, test the application, and never disable TLS peer/hostname verification. Do not expose phpinfo publicly. Until upgrading, disable automatic redirects for sensitive requests and normalize/validate every allowed target.

Official advisory: https://github.com/php/php-src/security/advisories/GHSA-f6gg-rchx-xw8j
