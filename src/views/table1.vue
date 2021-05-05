<template>
    <div class="table1">
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(product, idx) in this.products" :key="idx">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <el-button :plain="true" @click="removeProduct(product._id)"
                        >Remove</el-button
                    >
                    <el-button @click="updateProduct(product._id)"
                        >Update</el-button
                    >
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { productService } from '../services/product.service';

export default {
    name: 'table1',
    data() {
        return {
            products: '',
            dialogVisible: false,
        };
    },
    methods: {
        async loadProducts() {
            const products = await productService.getProducts();
            this.products = products;
            console.log('this.products:', this.products);
        },
        async removeProduct(id) {
            await productService.removeProduct(id);
            this.loadProducts();
            this.$message('Your Product Removed Successfully');
        },
        updateProduct(id) {
            this.$router.push('/table2/' + id);
        },
    },
    created() {
        this.loadProducts();
    },

    components: {},
};
</script>
