export async function getAllCategory() {
    const categoryRes= await fetch('https://fakestoreapi.com/products/categories');

    return categoryRes.json();
}


export async function getAllProducts() {
    const ProductsRes= await fetch('https://fakestoreapi.com/products');

    return ProductsRes.json();
}