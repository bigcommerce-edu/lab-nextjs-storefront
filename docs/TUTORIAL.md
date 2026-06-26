# Lab Tutorial: Next.js Storefront

> **Based on version 1.0.1** — this tutorial corresponds to the latest progressive history tagged `1.0.1`.

This document lists the lab exercises and their step-by-step diffs. Each step links to a GitHub comparison between the step's `*-pre` (TODO placeholders) and `*-post` (implemented) tags.

## Getting Started

Install the _starter_ state.

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/start /path/to/working/directory
```

## Lab 1: Catalog Pages

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/catalog-complete)

* [Step 1: Add main nav](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/catalog-01-pre...catalog-01-post?diff=split)
* [Step 2: Category query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/catalog-02-pre...catalog-02-post?diff=split)
* [Step 3: Basic category page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/catalog-03-pre...catalog-03-post?diff=split)
* [Step 4: Pagination support on category page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/catalog-04-pre...catalog-04-post?diff=split)
* [Step 5: Product query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/catalog-05-pre...catalog-05-post?diff=split)
* [Step 6: Product page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/catalog-06-pre...catalog-06-post?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/catalog-start...catalog-complete?diff=split)

## Lab 2: Cart Management

Fresh setup:

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/cart-start /path/to/working/directory
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/cart-complete)

* [Step 1: Add to Cart button](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cart-01-pre...cart-01-post?diff=split)
* [Step 2: Add to Cart logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cart-02-pre...cart-02-post?diff=split)
* [Step 3: Header mini-cart](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cart-03-pre...cart-03-post?diff=split)
* [Step 4: Cart details query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cart-04-pre...cart-04-post?diff=split)
* [Step 5: Cart page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cart-05-pre...cart-05-post?diff=split)
* [Step 6: Checkout redirect](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cart-06-pre...cart-06-post?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cart-start...cart-complete?diff=split)

## Lab 3: Customer Session

Fresh setup:

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/cust-start /path/to/working/directory
```

[Completed Lab 3 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/cust-complete)

* [Step 1: Register page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-01-pre...cust-01-post?diff=split)
* [Step 2: Register logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-02-pre...cust-02-post?diff=split)
* [Step 3: Login page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-03-pre...cust-03-post?diff=split)
* [Step 4: Login logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-04-pre...cust-04-post?diff=split)
* [Step 5: Header account links](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-05-pre...cust-05-post?diff=split)
* [Step 6: Logout logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-06-pre...cust-06-post?diff=split)
* [Step 7: Pass customer context in queries](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-07-pre...cust-07-post?diff=split)

[Full Lab 3 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/cust-start...cust-complete?diff=split)

## Finished State

Set up with all features complete:

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/cust-complete /path/to/working/directory
```
