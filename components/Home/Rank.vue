<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';
const rankdata = reactive([
    { rank: '1', name:'', image:'', content:'', star:''},
    { rank: '2', name:'', image:'', content:'', star:''},
    { rank: '3', name:'', image:'', content:'', star:''},
    { rank: '4', name:'', image:'', content:'', star:''},
    { rank: '5', name:'', image:'', content:'', star:''},
    { rank: '6', name:'', image:'', content:'', star:''},
]);
</script>

<template>
    <h1 class="text-3xl font-bold mb-2">娛樂城評價排名</h1>
    <div class="relative mb-5">
        <div id="rank-processes" class="swiper-pagination-progressbar mb-5 hidden md:flex"></div>
        <div id="rank-processes2" class="swiper-pagination-progressbar mb-5 flex md:hidden"></div>
        <div class="z-20 hidden md:flex">
            <Swiper
                :slidesPerView="3" :spaceBetween="30" :pagination="{ el: '#rank-processes',clickable: true, type: 'progressbar', }" :navigation="true" :modules="[Pagination, Navigation]" >
                <SwiperSlide v-for="(item, i) in rankdata" :key="i">
                    <div class="w-full bg-black text-white h-52 rounded-lg relative z-10 overflow-hidden">
                        <img class="w-full h-full object-cover rounded-lg" src="/image/rankbg.webp" alt="">
                        <div class="bg-main w-32 h-16 absolute -top-5 -right-10 rotate-[42deg] z-0"></div>
                        <span class="absolute top-2 right-2 text-2xl font-bold">NO.{{ item.rank }}</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="flex md:hidden">
            <Swiper
                :slidesPerView="1" :pagination="{ el: '#rank-processes2',clickable: true, type: 'progressbar', }" :navigation="true" :modules="[Pagination, Navigation]" >
                <SwiperSlide v-for="(item, i) in rankdata" :key="i">
                    <div class="w-full bg-black text-white h-52 rounded-lg">
                        {{ item.rank }}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    <div class="w-full bg-black md:flex md:justify-between items-center text-white py-8 md:py-0">
        <div class="px-6 md:py-8">
            <div class="w-full h-full md:w-[200px] md:h-[200px]">
                <img class="w-full h-full object-cover rounded-xl" src="/image/game.webp" alt="">
            </div>
            <h3 class="text-2xl font-bold text-center mt-4">BOK娛樂城</h3>
        </div>
        <div class="w-full px-6 md:py-8 flex flex-col space-y-4 mt-4 md:mt-0">
            <div class="w-full flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 class="text-2xl font-bold">BOK娛樂城評價</h3>
                <div class="flex items-center space-x-2">
                    <div v-for="i in 5" :key="i">
                        <svg class="fill-white text-xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    </div>
                </div>
            </div>
            <div class="space-x-4">
                <button class="bg-main rounded-xl px-6">立即註冊</button>
                <button class="bg-main rounded-xl px-6">更多評價</button>
            </div>
            <p class="line-clamp-4 overflow-hidden">富遊娛樂城以玩家需求為核心，提供順暢、安全、公正、真實、技術，成為玩家在線上賭場最佳合作夥伴，首儲1000送500只要1倍流水，已超過10萬名玩家註冊，真正的頂級台灣娛樂品牌。</p>
        </div>
    </div>
</template>



<style scoped>

</style>