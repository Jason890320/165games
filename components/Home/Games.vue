<script setup>
const gamedata = reactive([
    {
        id: 1,
        image: '/image/game1.webp',
        title: '火熱上線【忍】老虎機全網富遊獨家！推出高達51000倍巨獎!',
        content:
            '《忍》是一款由富遊電子開發，以日本忍者風格為主題的線上老虎機，不同於一般的角子老虎機，它沒有賠付線，而是以全版倍數和消除掉落方式進行遊戲。在遊戲中，你可以任意下注，並且最高可獲得500倍的倍數符號，最大獎金更高達51000倍！',
        sort: false,
    },
    {
        id: 2,
        image: '/image/game.webp',
        title: 'RSG電子老虎機《雷神之錘》全版倍數51000倍數，帶你前往致富路!',
        content:
            '《雷神之錘》是《RSG電子》以電影雷神索爾為主題，以全版倍數、消除掉落方式進行遊戲的線上老虎機，版面上任意位置均支付倍數符號最高500倍，遊戲最大獎51000倍。',
        sort: true,
    },
    {
        id: 3,
        image: '/image/game1.webp',
        title: '火熱上線【忍】老虎機全網富遊獨家！推出高達51000倍巨獎!',
        content:
            '《忍》是一款由富遊電子開發，以日本忍者風格為主題的線上老虎機，不同於一般的角子老虎機，它沒有賠付線，而是以全版倍數和消除掉落方式進行遊戲。在遊戲中，你可以任意下注，並且最高可獲得500倍的倍數符號，最大獎金更高達51000倍！',
        sort: false,
    },
    {
        id: 4,
        image: '/image/game.webp',
        title: 'RSG電子老虎機《雷神之錘》全版倍數51000倍數，帶你前往致富路!',
        content:
            '《雷神之錘》是《RSG電子》以電影雷神索爾為主題，以全版倍數、消除掉落方式進行遊戲的線上老虎機，版面上任意位置均支付倍數符號最高500倍，遊戲最大獎51000倍。',
        sort: true,
    },
])
</script>

<template>
    <div
        v-for="i in gamedata"
        :key="i.id"
        :class="[i.sort ? 'flex-row-reverse' : 'flex-row']"
        class="md:flex md:justify-between py-4 border-b border-gray-400 group hover:py-8 duration-300 hover:cursor-pointer"
    >
        <div class="md:w-[400px] md:h-[250px]">
            <img class="w-full h-full object-cover rounded-xl" :src="i.image" alt="" />
        </div>
        <div class="w-full flex flex-col justify-between space-y-4 py-4 md:px-8 md:py-2">
            <h3 class="text-3xl group-hover:text-main font-bold duration-200">{{ i.title }}</h3>
            <p class="text-gray-400">{{ i.content }}</p>
            <div :class="[i.sort ? 'justify-start' : 'justify-end']" class="flex max-[768px]:justify-end">
                <button
                    class="bg-main text-white rounded-xl px-8 py-0.5 hover:scale-125 hover:bg-orange-400 transition ease-in-out duration-300"
                >
                    更多資訊
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
