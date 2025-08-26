export async function getAllCategory() {
    const categoryRes= await fetch('https://fakestoreapi.com/products/categories');

    return categoryRes.json();
}


export async function getAllProducts() {
    const ProductsRes= await fetch('https://fakestoreapi.com/products');

    return ProductsRes.json();
}

export async function getProduct(id:string) {
    const ProductRes= await fetch(`https://fakestoreapi.com/products/${id}`);

    return ProductRes.json();
}

export async function getCategory(category:string) {
    const CategoryRes= await fetch(`https://fakestoreapi.com/products/category/${category}`);

    return CategoryRes.json();
}