# Changelog

## 1.1.0

_Based on Next.js 16.4.6_

### Summary

Upgraded the base framework from Next.js 16.2.3 to 16.4.6, upgraded dependencies, and upgraded lab code to current Next.js and React patterns.

### Changes

- Upgraded `next` to 16.4.6 and `react` / `react-dom` to 19.3.0.
- Updated the Node.js version in `.nvmrc` from 18 to 22 (Next.js 16 requires Node.js 20.9 or later).
- Upgraded pnpm from 8.15.9 to 11.28.12 (`packageManager`).
- Re-installed `jsonwebtoken` (9.0.3) and `@types/jsonwebtoken` (9.0.10) at their latest versions, now pinned to exact versions.
- The framework install is committed unaltered; a separate commit then disables the scaffold's default `cacheComponents` and `partialPrefetching` options in `next.config.ts`, keeping all routes dynamically rendered as before (the lab code is not structured for Cache Components).
- Moved the Next.js-generated agent rules into `AGENTS-Next.md`. 
- Removed cookie deletions from Server Component rendering in `getCurrentCustomer()` and the mini-cart. Next.js only allows modifying cookies in Server Actions or Route Handlers.
- Login, registration, logout, and Add to Cart now invoke their Server Actions through `<form action>` with React's `useActionState`, replacing click/submit handlers with manual loading state.
- Category and product pages use the generated `PageProps` route types instead of hand-written prop types.
- The header logo link uses `<Link>` for client-side navigation instead of a plain `<a>`.
- Marked the BigCommerce GraphQL client, cookie helpers, and `getCurrentCustomer()` as `server-only` so they cannot be bundled into client code.
- Fixed the secure cookie name prefix from `_Secure-` to `__Secure-`, so browsers enforce the prefix's requirements.

## 1.0.1

_Based on Next.js 16.2.3_

### Summary

Restructured commit history to place TODO comments immediately before the code that resolves them.

## 1.0.0

_Based on Next.js 16.2.3_

### Summary

First project-versioned progressive history. Establishes the project's own version line (separate from the base-framework version) and the supporting structure: a dedicated tutorial document, a changelog, and the traditional-branch / progressive-history Git model.

### Changes

- Introduced project versioning in `package.json` (`version`), tagged on the progressive history tip.
- Moved the lab step listing and GitHub diff links out of `README.md` into `docs/TUTORIAL.md`, with a "Based on version" banner.
- Added this changelog and its entry format.
- Re-tagged legacy base-framework version tags to the `framework-<semver>` convention (e.g. `framework-16.2.3`), freeing plain semver for project versions.
- Documented the traditional-branch vs progressive-history model and the strict 1:1 TODO → code commit convention in `AGENTS.md` / `CLAUDE.md`.
- No lab code changes — identical in code to the prior history.
