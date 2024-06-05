export type CategoryProduct = {
  
}

export type BasicCategory = {
  
}

export type Category = BasicCategory & {
  products: CategoryProduct[],
}

export type PagedCategory = Category & {
  
}

export type Product = {
  
}
