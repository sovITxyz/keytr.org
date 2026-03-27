# keytr.org

Marketing site and primary WebAuthn passkey gateway for [keytr](https://github.com/sovITxyz/keytr). Hosted on Cloudflare Pages.

## What this is

- **Landing page** explaining the keytr passkey login protocol for Nostr
- **WebAuthn gateway** — serves `/.well-known/webauthn` so Nostr clients can register passkeys under the `keytr.org` rpId via [Related Origin Requests](https://w3c.github.io/webauthn/#sctn-related-origins)

No server logic. No backend. Just static files.

## Gateway

Passkeys registered against `keytr.org` are bound to this domain. The `/.well-known/webauthn` file lists authorized client origins that can use `keytr.org` as their rpId for cross-client login.

To add your Nostr client as an authorized origin, open a PR adding your domain to `.well-known/webauthn`.

## Related

- [keytr](https://github.com/sovITxyz/keytr) — the library (`@sovit.xyz/keytr` on npm)
- [nostkey.org](https://github.com/sovITxyz/nostkey.org) — alternative gateway on GitHub Pages
- [NIP-K1](https://github.com/sovITxyz/keytr/blob/main/nip/nip-k1.md) — the protocol spec

## License

AGPL-3.0-or-later
