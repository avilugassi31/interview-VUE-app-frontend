<template>
    <div class="edit-page">
        <el-form v-if="productToEdit" action="">
            <h2>Edit Product</h2>
            <el-form-item>
                <label for="name">Name</label>
                <el-input
                    require
                    id="name"
                    v-model="productToEdit.name"
                    placeholder=""
                    type="text"
                />
            </el-form-item>
            <el-form-item>
                <label for="price">Price</label>
                <el-input
                    require
                    id="price"
                    v-model="productToEdit.price"
                    placeholder=""
                    type="number"
                />
            </el-form-item>
            <el-button
                @click="saveProduct(productToEdit)"
                v-if="productToEdit._id"
                >Update Product</el-button
            >
            <el-button @click="saveProduct(productToEdit)" v-else
                >Add Product</el-button
            >
        </el-form>
    </div>
</template>
<script>
import { productService } from '../services/product.service';
export default {
    data() {
        return {
            productToEdit: null,
        };
    },
    created() {
        const id = this.$route.params.productId;
        this.loadProduct(id);
    },
    methods: {
        async loadProduct(id) {
            if (!id) {
                const product = await productService.getEmptyProduct();
                const productCopy = JSON.parse(JSON.stringify(product));
                this.productToEdit = productCopy;
                console.log('this.productToEdit:', this.productToEdit);
            } else {
                const product = await productService.getById(id);
                const productEdit = JSON.parse(JSON.stringify(product));
                this.productToEdit = productEdit;
                console.log(' this.productToEdit:', this.productToEdit);
            }
        },
        async saveProduct(product) {
            if (product._id) {
                await productService.saveProduct(product);
                this.$message('Your Product Updated Successfully');
                this.$router.push('/table1');
            } else {
                await productService.saveProduct(product);
                this.$message('Your Product Added Successfully');
                this.$router.push('/table1');
            }
        },
    },
};
</script>
