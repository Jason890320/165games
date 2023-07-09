<script setup>

const rankdata = reactive([
    { id:1, rank: '1', name:'BOK娛樂城', content:'富遊娛樂城以玩家需求為核心，提供順暢、安全、公正、真實、技術，成為玩家在線上賭場最佳合作夥伴，首儲1000送500只要1倍流水，已超過10萬名玩家註冊，真正的頂級台灣娛樂品牌。'},
    { id:2, rank: '2', name:'RG娛樂城', content:'Bet365是一家全球領先的線上賭場公司，成立於2000年，總部位於英國。Bet365台灣提供各種體育賽事的線上投注服務，包括足球，籃球，網球，運彩等等。此外，他們還提供賭場，撲克，彩票等多項賭博遊戲。 Bet365台灣中文版以其全面的運彩賽事，豐富的市場選擇和卓越的客戶服務而享譽全球。'},
    { id:3, rank: '3', name:'AAS娛樂城', content:'九州娛樂城又稱LEO娛樂城，宗旨創造一個『安全可靠』、『即時便利』、『公平公正』、『專業營運』的優質娛樂服務平台，能創造出嶄新的線上娛樂城價值以及達到多方普及的目的，成為具有領導指標性的娛樂網站。九州娛樂城、LEO娛樂城、THA娛樂城皆為同間娛樂城。'},
    { id:4, rank: '4', name:'BKK娛樂城', content:'亞博娛樂城是全球線上博弈的領導品牌，並擁有數百萬名註冊玩家，持有博弈產業市場的合法營業執照。提供多元的遊戲、完善顧客服務，並致力維護遊戲公正性，多樣的賽事、遊戲，包括運動博彩、電競、真人Casino、電子遊戲，人人都能依照自己的喜好找到合適的遊戲。'},
    { id:5, rank: '5', name:'BFC娛樂城', content:'DG娛樂城是一個以百家樂為主的線上娛樂城，吸引了眾多喜愛百家樂的玩家。在這裡，你可以找到各種不同版本的百家樂遊戲，包括經典百家樂、無佣金百家樂等。遊戲選擇豐富，能滿足不同玩家的需求與喜好。'},
    { id:6, rank: '6', name:'BMW娛樂城', content:'PM娛樂城，前身為OB體育，在2023年正式改名為PM體育，以百家樂、運彩、電子老虎機為主打，打造出一個多元化的線上娛樂平台，滿足不同玩家的遊戲需求。'},
]);
</script>

<template>
    <div class="py-4 border-b border-gray-500 mx-4 md:mx-10">
        <h1 class="text-2xl lg:text-3xl font-bold"><slot name="title"></slot></h1>
        <div class="mx-2 md:mx-6">
            <img class="w-full h-full object-cover rounded-xl my-4" src="/image/sport.webp" alt="">
            <div v-for="i in rankdata" :key="i" class="w-full py-2 group relative">
                <h1 class="text-xl lg:text-2xl font-bold text-gray-500 group-hover:text-main duration-300">NO.{{ i.rank }} {{ i.name }}:</h1>
                <p class="leading-loose text-justify text-[#a9a9a9] group-hover:text-black duration-300">{{ i.content }}</p>
                <div class="flex justify-end text-white group-hover:cursor-pointer select-none mt-2 md:mt-0">
                    <div class="w-6 h-6 bg-gray-500 group-hover:bg-main rounded-full text-center duration-300">
                        <span>出</span>
                    </div>
                    <div class="w-6 h-6 bg-gray-500 group-hover:bg-main rounded-full text-center duration-300">
                        <span>發</span>
                    </div>
                    <div class="w-6 h-6 bg-gray-500 group-hover:bg-main rounded-full text-center duration-300">
                        <span>前</span>
                    </div>
                    <div class="w-6 h-6 bg-gray-500 group-hover:bg-main rounded-full text-center duration-300">
                        <span>往</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>