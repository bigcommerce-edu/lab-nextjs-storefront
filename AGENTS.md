# Next.js Storefront Example Lab Project

This is an example developer project demonstrating how to build a basic Next.js storefront for a BigCommerce store.

## Terminology and Git Model

This repository maintains two kinds of history **separately**:

- **Traditional branch** (`main`): a normal Git branch with stable, append-only history. Custom-code changes are made on feature branches, reviewed via pull request, and merged here. `main`'s history is never rewritten.
- **Progressive history**: a tutorial-shaped commit chain (clean framework install → step commits → end metadata) that represents the step-by-step lab progression. It is rebuilt as an independent commit chain and identified by a **project-version tag** (plain semver) at its tip plus the step tags along it.

`main` and the latest progressive history have **different tip commits but identical file trees**. Every change must be replicated across both, using the `bcedu-lab-sync` skill, and verified with its `validate-sync` command:

- **Framework/dependency upgrades**: rebuild a new progressive history with `bcedu-lab-upgrade`, then `sync-to-main` (a reviewed PR) brings it onto `main`.
- **Custom lab-code changes**: make them on a branch off `main` and merge via PR, then `sync-to-progressive` folds them into a rebuilt progressive history.
- **Publishing** a progressive history (moving step tags + creating the project-version tip tag) is done with `bcedu-lab-publish`; it does **not** advance `main`.

## Project Version and Changelogs

- The **project version** (plain semver, separate from the Next.js framework version) is held in `package.json`'s `version` field and tagged on the tip of the corresponding progressive history.
- Each version has a changelog entry in `CHANGELOG.md`.
- **Metadata at the end**: the project-version bump and the addition of changelog entries and tutorial docs are folded into the final commit(s) of each rebuilt progressive history (amended on each rebuild rather than accumulating new commits).
- The lab steps and GitHub diff links live in `docs/TUTORIAL.md`, which carries a "Based on version X" banner matching the latest progressive history.

## Tag Conventions

- **Project-version tag**: plain semver (e.g. `1.0.0`) at a progressive history's tip. Created fresh per history; never migrated.
- **Framework anchor**: `framework-<semver>` (e.g. `framework-16.2.3`) marks a base-framework release point. Permanent; never migrated.
- **Step tags**: `<prefix>-NN-pre` / `<prefix>-NN-post`, plus `<prefix>-start` / `<prefix>-complete`. Migrated onto a new history by the Main Tags publish.
- **eLearning tags**: `e-` prefixed. Migrated by the eLearning publish.

## Commit History Structure

- The first commit is a clean Next.js install.
- **Strict 1:1 TODO → code**: each commit that introduces `TODO:` comments is immediately followed by the code commit that resolves them (one TODO commit per code commit). Avoid bundling many TODOs into a single early commit.

### Lab Exercises

| Exercise | Description | Tag Prefix |
| ------ | ----------- | ---------- |
| Lab 1 | Catalog Pages | `catalog` |
| Lab 2 | Cart Management | `cart` |
| Lab 3 | Customer Session | `cust` |

### Lab Step Breakdown

Each step is a `<tag>-pre` (TODO placeholders) commit immediately followed by a `<tag>-post` (implementation) commit. eLearning state is represented by the same base tags in `e-<tag>-pre`/`e-<tag>-post` format.

**Lab 1 — Catalog Pages (`catalog`)** — start: `catalog-start`, complete: `catalog-complete`

| Step | Tag Base | Description |
| ---- | --- | ----------- |
| 1 | `catalog-01` | Add top-level categories to main nav |
| 2 | `catalog-02` | Implement category query |
| 3 | `catalog-03` | Implement category page details |
| 4 | `catalog-04` | Add pagination to category page |
| 5 | `catalog-05` | Implement product query |
| 6 | `catalog-06` | Implement product page |

**Lab 2 — Cart Management (`cart`)** — start: `cart-start`, complete: `cart-complete`

| Step | Tag Base | Description |
| ---- | --- | ----------- |
| 1 | `cart-01` | Add to Cart button on product page |
| 2 | `cart-02` | Implement Add to Cart logic |
| 3 | `cart-03` | Add mini-cart to header |
| 4 | `cart-04` | Implement cart details query |
| 5 | `cart-05` | Implement cart page |
| 6 | `cart-06` | Implement redirect to checkout |

**Lab 3 — Customer Session (`cust`)** — start: `cust-start`, complete: `cust-complete`

| Step | Tag Base | Description |
| ---- | --- | ----------- |
| 1 | `cust-01` | Implement register page |
| 2 | `cust-02` | Implement customer registration logic |
| 3 | `cust-03` | Implement login page |
| 4 | `cust-04` | Implement login logic |
| 5 | `cust-05` | Add account links in header |
| 6 | `cust-06` | Implement logout logic |
| 7 | `cust-07` | Pass current customer ID for global data and on catalog pages |

## File Removal - Protected Paths

When creating a clean orphan branch, the following additional file paths should be protected from removal:

* `.env.local`

## Framework Install Command

The base framework is Next.js. Use `pnpm create`:

```
pnpm create next-app@<version> tmp-nextjs-test --ts --no-linter --tailwind --no-src-dir --app --no-turbopack --no-import-alias
```

After re-installing the framework, make sure an appropriate version of Node.js is installed according to `.nvmrc` and use `pnpm install` to install dependencies.
