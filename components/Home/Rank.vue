<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';
const rankdata = reactive([
    { id:1, rank: '1', name:'BOK娛樂城', image:'/image/rankbg.webp', content:'富遊娛樂城以玩家需求為核心，提供順暢、安全、公正、真實、技術，成為玩家在線上賭場最佳合作夥伴，首儲1000送500只要1倍流水，已超過10萬名玩家註冊，真正的頂級台灣娛樂品牌。', star:5, info:{draw:45, safe:98, Welfare:89, store:45, banner:'/image/sport.webp', company:{name: 'RG富遊', create:'2019', oncedraw:'最低1000-100萬', forwho:'18歲以上', pay:'各大銀行、四大超商'}, sale:['娛樂城首儲$1000贈$1000','娛樂城首儲$1000贈$1000','娛樂城首儲$1000贈$1000','娛樂城首儲$1000贈$1000','娛樂城首儲$1000贈$1000','娛樂城首儲$1000贈$1000']}},
    { id:2, rank: '2', name:'RG娛樂城', image:'/image/rankbg.webp', content:'Bet365是一家全球領先的線上賭場公司，成立於2000年，總部位於英國。Bet365台灣提供各種體育賽事的線上投注服務，包括足球，籃球，網球，運彩等等。此外，他們還提供賭場，撲克，彩票等多項賭博遊戲。 Bet365台灣中文版以其全面的運彩賽事，豐富的市場選擇和卓越的客戶服務而享譽全球。', star:4},
    { id:3, rank: '3', name:'AAS娛樂城', image:'/image/rankbg.webp', content:'九州娛樂城又稱LEO娛樂城，宗旨創造一個『安全可靠』、『即時便利』、『公平公正』、『專業營運』的優質娛樂服務平台，能創造出嶄新的線上娛樂城價值以及達到多方普及的目的，成為具有領導指標性的娛樂網站。九州娛樂城、LEO娛樂城、THA娛樂城皆為同間娛樂城。', star:5},
    { id:4, rank: '4', name:'BKK娛樂城', image:'/image/rankbg.webp', content:'亞博娛樂城是全球線上博弈的領導品牌，並擁有數百萬名註冊玩家，持有博弈產業市場的合法營業執照。提供多元的遊戲、完善顧客服務，並致力維護遊戲公正性，多樣的賽事、遊戲，包括運動博彩、電競、真人Casino、電子遊戲，人人都能依照自己的喜好找到合適的遊戲。', star:3},
    { id:5, rank: '5', name:'BFC娛樂城', image:'/image/rankbg.webp', content:'DG娛樂城是一個以百家樂為主的線上娛樂城，吸引了眾多喜愛百家樂的玩家。在這裡，你可以找到各種不同版本的百家樂遊戲，包括經典百家樂、無佣金百家樂等。遊戲選擇豐富，能滿足不同玩家的需求與喜好。', star:2},
    { id:6, rank: '6', name:'BMW娛樂城', image:'/image/rankbg.webp', content:'PM娛樂城，前身為OB體育，在2023年正式改名為PM體育，以百家樂、運彩、電子老虎機為主打，打造出一個多元化的線上娛樂平台，滿足不同玩家的遊戲需求。', star:5},
]);
const moreinfo = ref(false);
const nowstatus = ref(1);
const nowGame = computed(()=>{
    return rankdata.filter(e => e.id == nowstatus.value);
});

function choose(id) {
    nowstatus.value = id;
}

function openinfo() {
    moreinfo.value = true;
}
function handclose() {
    moreinfo.value = false;
}

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
                    <div @click="choose(item.id)" class="w-full bg-black text-white h-52 rounded-lg relative z-10 overflow-hidden hover:cursor-pointer">
                        <img class="w-full h-full object-cover rounded-lg hover:scale-110 duration-300" :src="item.image" alt="">
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
                    <div @click="choose(item.id)" class="w-full bg-black text-white h-52 rounded-lg relative z-10 overflow-hidden hover:cursor-pointer">
                        <img class="w-full h-full object-cover rounded-lg hover:scale-110 duration-300" :src="item.image" alt="">
                        <div class="bg-main w-32 h-16 absolute -top-5 -right-10 rotate-[42deg] z-0"></div>
                        <span class="absolute top-2 right-2 text-2xl font-bold">NO.{{ item.rank }}</span>
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
            <h3 class="text-2xl font-bold text-center mt-4">{{ nowGame[0].name }}</h3>
        </div>
        <div class="w-full px-6 md:py-8 flex flex-col space-y-4 mt-4 md:mt-0">
            <div class="w-full flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 class="text-2xl font-bold">{{ nowGame[0].name }}評價</h3>
                <div class="flex items-center space-x-2">
                    <svg :class="[nowGame[0].star >= 1 ? 'fill-main' : 'fill-white']" class="text-xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg :class="[nowGame[0].star >= 2 ? 'fill-main' : 'fill-white']" class="text-xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg :class="[nowGame[0].star >= 3 ? 'fill-main' : 'fill-white']" class="text-xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg :class="[nowGame[0].star >= 4 ? 'fill-main' : 'fill-white']" class="text-xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg :class="[nowGame[0].star >= 5 ? 'fill-main' : 'fill-white']" class="text-xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                </div>
            </div>
            <div class="space-x-4">
                <button class="bg-main rounded-xl px-6 hover:ring hover:ring-[#FF7744] ring-offset-2 duration-300">立即註冊</button>
                <button @click="openinfo()" class="bg-main rounded-xl px-6 hover:ring hover:ring-[#FF7744] ring-offset-2 duration-300">更多評價</button>
            </div>
            <p class="line-clamp-4 overflow-hidden" v-html="nowGame[0].content"></p>
        </div>
    </div>
    <transition name="nav" mode="out-in">
        <HomeInfo v-if="moreinfo" :data="nowGame[0]" @close="handclose()"></HomeInfo>
    </transition>
</template>



<style scoped>

</style>