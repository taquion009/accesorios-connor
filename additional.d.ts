declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

interface Product {
  title: string
  image: string
  price: number
  id: number
}