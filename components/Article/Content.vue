<script setup>

</script>

<template>
    <div class="py-4 border-b border-gray-500 mx-4 md:mx-10">
        <h1 class="text-2xl lg:text-3xl font-bold"><slot name="title"></slot></h1>
        <div class="mx-2 md:mx-6">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>