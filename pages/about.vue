<template>
    <div>
        <h2>ABOUT</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi animi repudiandae amet deserunt voluptatum? Eaque, autem iure? Blanditiis, vitae distinctio.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi animi repudiandae amet deserunt voluptatum? Eaque, autem iure? Blanditiis, vitae distinctio.</p>
    </div>
    <div>{{ data }}</div>
</template>

<script setup>
    const { data }  = await useFetch("api/victor?name=victor", {
        method: "post",
        body: { age: 30 }
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
    }
    p {
        margin: 20px 0;
    }
</style>