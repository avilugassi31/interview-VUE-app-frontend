import { httpService } from './http.service';
const PRODUCTS_URL = 'product/';
export const productService = {
    getProducts,
    removeProduct,
    getEmptyProduct,
    saveProduct,
    getById
};

async function getProducts() {
    const products = await httpService.get(PRODUCTS_URL);
    return products;
}
function getById(id) {
    return httpService.get(PRODUCTS_URL + id);
}

function removeProduct(id) {
    return httpService.delete(PRODUCTS_URL + id);
}

function saveProduct(product) {
    if (product._id) {
        return httpService.put(PRODUCTS_URL + product._id, product);
    } else {
        return httpService.post(PRODUCTS_URL, product);
    }
}
function getEmptyProduct() {
    return {
        name: '',
        price: '',
    };
}
