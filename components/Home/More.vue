<script setup>

const data = reactive([
    { id:1, image:'/image/game.webp', title: 'RSG電子老虎機《雷神之錘》全版倍數51000倍數，帶你前往致富路!'},
    { id:2, image:'/image/game1.webp', title: '火熱上線【忍】老虎機全網富遊獨家！推出高達51000倍巨獎!'},
    { id:3, image:'/image/game2.webp', title: '麻將發了，那你發了嗎?獎金820倍轉換百搭，老虎機倍數提升!'},
]);
</script>

<template>
    <div class="w-full grid grid-row-3 md:grid-cols-3 gap-4 py-8">
        <div v-for="i in data" :key="i.id" class="row-span-1 md:col-span-1">
            <div class="flex flex-col items-center">
                <div class="relative mb-4 group hover:cursor-pointer">
                    <img class="w-full max-h-[250px] object-cover group-hover:opacity-80" :src="i.image" alt="">
                    <div class="bg-main absolute top-3 left-2 text-white text-sm rounded-xl px-2 invisible group-hover:visible">更多資訊</div>
                </div>
                <span class="line-clamp-1">{{ i.title }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>