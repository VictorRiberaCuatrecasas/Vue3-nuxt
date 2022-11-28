<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products"
    });

    // captures parameters from the url, in this case the id
    // same as const id = useRoute().params.id;
    const { id } = useRoute().params;
    const uri = "https://fakestoreapi.com/products/" + id;
    const {data: product} = await useFetch(uri)

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true })
    }
</script>

<style scoped>

</style>