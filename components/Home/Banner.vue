<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination, Autoplay } from 'swiper';


const imagesdata = reactive([
    // { title: 'mike'},
    // { title: 'minshi'},
    { src: '/image/banner.webp'},
    { src: '/image/banner.webp'},
]);
</script>

<template>
    <div class="flex flex-col gap-4">
        <div>
            <Swiper :pagination="{ el: '#dating-processes', bulletClass: 'bullet', bulletActiveClass: 'is-active', clickable: true, }" :autoplay="{ delay: 2500, disableOnInteraction: false,}" loop :modules="[Pagination, Autoplay]">
                <SwiperSlide v-for="(item, i) in imagesdata" :key="i">
                    <!-- <div class="w-full bg-black text-white h-[650px]">
                        {{ item.title }}
                    </div> -->
                    <div>
                        <img class="min-h-[400px] w-full h-full object-cover" :src="item.src" alt="">
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div id="dating-processes" class="swiper-pagination my-2"></div>
    </div>
</template>



<style scoped>

</style>