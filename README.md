# A BigCommerce / Next.js Proof of Concept

This project supports guided lab exercises to create a basic implementation of a Next.js storefront for BigCommerce.

## Prerequisites

* Node.js 18.18 or later

This storefront is built on Next.js 15.

## Getting Started

Install the _starter_ state.

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/starter /path/to/working/directory
```

## Labs

### Lab 1

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-catalog-complete)

* [Step 1: Add main nav](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-start...lab-catalog-01?diff=split)
* [Step 2: Category query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-01...lab-catalog-02?diff=split)
* [Step 3: Basic category page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-02...lab-catalog-03?diff=split)
* [Step 4: Pagination support on category page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-03...lab-catalog-04?diff=split)
* [Step 5: Product query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-04...lab-catalog-05?diff=split)
* [Step 6: Product page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-05...lab-catalog-06?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-start...lab-catalog-complete?diff=split)

### Lab 2

Fresh setup:

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cart-start /path/to/working/directory
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cart-complete)

* [Step 1: Add to Cart button](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-start...lab-cart-01?diff=split)
* [Step 2: Add to Cart logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-01...lab-cart-02?diff=split)
* [Step 3: Header mini-cart](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-02...lab-cart-03?diff=split)
* [Step 4: Cart details query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-03...lab-cart-04?diff=split)
* [Step 5: Cart page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-04...lab-cart-05?diff=split)
* [Step 6: Checkout redirect](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-05...lab-cart-06?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-start...lab-cart-complete?diff=split)

### Lab 3

Fresh setup:

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cust-start /path/to/working/directory
```

[Completed Lab 3 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cust-complete)

* [Step 1: Register page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-start...lab-cust-01?diff=split)
* [Step 2: Register logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-01...lab-cust-02?diff=split)
* [Step 3: Login page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-02...lab-cust-03?diff=split)
* [Step 4: Login logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-03...lab-cust-04?diff=split)
* [Step 5: Header account links](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-04...lab-cust-05?diff=split)
* [Step 6: Logout logic](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-05...lab-cust-06?diff=split)
* [Step 7: Pass customer context in queries](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-06...lab-cust-07?diff=split)

[Full Lab 3 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-start...lab-cust-complete?diff=split)

### Finished State

Set up with all features complete:

```shell
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cust-complete /path/to/working/directory
```
