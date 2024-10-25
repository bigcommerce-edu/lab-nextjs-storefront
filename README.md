# A BigCommerce / Next.js Proof of Concept

This project supports guided lab exercises to create a basic implementation of a Next.js storefront for BigCommerce.

## Prerequisites

* Node.js 18.17 or later

This storefront is built on Next.js 14.

## Getting Started

Install the _starter_ state.

```shell
npx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/starter /path/to/working/directory
```

### Next.js Install Reference

Next.js was installed with the following command:

```shell
npx create-next-app@latest ./ --ts --tailwind \
  --no-eslint --no-app --no-src-dir \
  --import-alias '@/*'
```

## Labs

### Lab 1

[Completed Lab 1 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-catalog-complete)

* [Step 2: Add main nav](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-start...lab-catalog-02?diff=split)
* [Step 3.1: Category query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-02...lab-catalog-03-01?diff=split)
* [Step 3.2: Basic category page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-03-01...lab-catalog-03-02?diff=split)
* [Step 3.3: Product listing](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-03-02...lab-catalog-03-03?diff=split)
* [Step 4.1: Pagination support in query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-03-03...lab-catalog-04-01?diff=split)
* [Step 4.2: Pagination on category page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-04-01...lab-catalog-04-02?diff=split)
* [Step 5.1: Product query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-04-02...lab-catalog-05-01?diff=split)
* [Step 5.2: Product page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-05-01...lab-catalog-05-02?diff=split)

[Full Lab 1 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-catalog-start...lab-catalog-complete?diff=split)

### Lab 2

Fresh setup:

```shell
npx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cart-start /path/to/working/directory
```

[Completed Lab 2 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cart-complete)

* [Step 2.1: Add to Cart button](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-start...lab-cart-02-01?diff=split)
* [Step 2.2: Add to Cart mutations and route](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-02-01...lab-cart-02-02?diff=split)
* [Step 3.1: Header mini-cart](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-02-02...lab-cart-03-01?diff=split)
* [Step 3.2: Simple cart query and context](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-03-01...lab-cart-03-02?diff=split)
* [Step 4.1: Cart details query](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-03-02...lab-cart-04-01?diff=split)
* [Step 4.2: Cart page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-04-01...lab-cart-04-02?diff=split)
* [Step 5: Checkout redirect](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-04-02...lab-cart-05?diff=split)

[Full Lab 2 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cart-start...lab-cart-complete?diff=split)

### Lab 3

Fresh setup:

```shell
npx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cust-start /path/to/working/directory
```

[Completed Lab 3 state](https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cust-complete)

* [Step 3.1: Register page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-02...lab-cust-03-01?diff=split)
* [Step 3.2: Register mutation and route](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-03-01...lab-cust-03-02?diff=split)
* [Step 4.1: Login page](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-03-02...lab-cust-04-01?diff=split)
* [Step 4.2: Login mutation and route](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-04-01...lab-cust-04-02?diff=split)
* [Step 5.1: Header account links](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-04-02...lab-cust-05-01?diff=split)
* [Step 5.2: Populate logged-in status in context](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-05-01...lab-cust-05-02?diff=split)
* [Step 5.3: Logout route](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-05-02...lab-cust-05-03?diff=split)
* [Step 6: Pass customer context in queries](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-05-03...lab-cust-06?diff=split)

[Full Lab 3 diff](https://github.com/bigcommerce-edu/lab-nextjs-storefront/compare/lab-cust-start...lab-cust-complete?diff=split)

### Finished State

Set up with all features complete:

```shell
npx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/lab-cust-complete /path/to/working/directory
```
