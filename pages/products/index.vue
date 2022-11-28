<!-- subfolders names are added to round: eg: /products, index serves as landing for that route -->
<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products"
    });

    //fetch products
    const {data: products} = await useFetch("https://fakestoreapi.com/products")
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
    }
    p {
        margin: 20px 0;
    }
</style>