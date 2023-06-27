<script setup>

function Jumpto(location) {
    document.getElementById(`${location}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
}

</script>

<template>
    <div class="w-full bg-[#f5f5f5]">
        <div class="bg-white mx-80 px-8 py-6">
            <div class="w-full max-h-[600px] flex justify-center items-center py-4 border-b border-gray-500">
                <div class="flex items-center">
                    <div class="px-4">
                        <img class="object-cover" src="/image/character.png" alt="">
                    </div>
                    <div class="flex flex-col items-center px-4">
                        <h1 class="text-5xl font-bold text-center">雷神之槌</h1>
                        <div class="w-36 mt-2 mb-4 border-2 border-black"></div>
                        <img class="object-cover" src="/image/gameThor.png" alt="">
                    </div>
                </div>
            </div>
            <div class="py-4 border-b border-gray-500">
                <div class="flex justify-between items-center mb-4">
                    <button @click="Jumpto('rule')" class="bg-main px-12 py-2 text-2xl text-white font-bold">1.遊戲玩法</button>
                    <button @click="Jumpto('video')" class="bg-main px-12 py-2 text-2xl text-white font-bold">2.遊戲影片</button>
                    <button @click="Jumpto('skill')" class="bg-main px-12 py-2 text-2xl text-white font-bold">3.技巧規則</button>
                </div>
                <p class="leading-loose">《雷神之錘》是《RSG電子》以電影雷神索爾為主題，以全版倍數、消除掉落方式進行遊戲的線上老虎機，版面上任意位置均支付，倍數符號最高500倍，遊戲最大獎51000倍。</p>
            </div>
            <div class="py-4 border-b border-gray-500">
                <h1 class="text-3xl font-bold">《雷神之錘》老虎機介紹</h1>
                <div class="text-[#a9a9a9]">
                    <p class="leading-loose py-2">《雷神之錘》是一款無賠付線的老虎機，遊戲中隨處支付可在任意位置的相同符號總數量決定可獲得獎金。</p>
                    <ul class="list-disc list-inside space-y-2 indent-6">
                        <li>遊戲規則 : 隨處支付</li>
                        <li>最大倍數 : 51000倍</li>
                        <li>獎金方式 : 全盤倍數、消除掉落</li>
                        <li>獎金遊戲 : 選轉觸發+購買特色</li>
                        <li>返還率 : 97.90% </li>
                    </ul>
                </div>
            </div>
            <div id="rule" class="py-4 border-b border-gray-500">
                <h1 class="text-3xl font-bold">《雷神之錘》老虎機玩法規則說明</h1>
                <h1 class="text-2xl font-bold text-main indent-8">玩法1 : 隨處支付規則與倍數特色  </h1>
                <div class="flex space-x-4 py-4">
                    <img class="object-cover" src="/image/property6.png" alt="">
                    <img class="object-cover" src="/image/property2.png" alt="">
                    <img class="object-cover" src="/image/property10.png" alt="">
                    <img class="object-cover" src="/image/property9.png" alt="">
                </div>
                <ul class="list-disc list-inside space-y-2 indent-6">
                    <li>版面只要出現倍數符號，<span class="text-main">即可獲得2倍到500倍</span> 的隨機倍數。</li>
                    <li>當不再進行掉落消除時，版面上所有倍數符號的倍數會被加總起來，然後<span class="text-main">乘上得分作為最終得贏分</span>。</li>
                    <li><span class="text-main">最小投注20分時</span>才會出現隨處支付倍數特色。</li>
                </ul>
            </div>
            <div class="py-4 border-b border-gray-500">
                <h1 class="text-3xl font-bold">《雷神之錘》玩法與道具賠率</h1>
                <h1 class="text-2xl font-bold text-main indent-8">玩法2 : 通過累積道具獲得高賠率  </h1>

            </div>
            <div class="py-4 border-b border-gray-500">
                <h1 class="text-3xl font-bold">《雷神之錘》購買免費遊戲特色 免費遊戲</h1>
                <h1 class="text-2xl font-bold text-main indent-8">玩法3 : 以免費遊戲累積更多獎金  </h1>

            </div>
            <div id="video" class="py-4 border-b border-gray-500">
                <h1 class="text-3xl font-bold">《雷神之錘》老虎機爆分影片 感受爆分威力</h1>

            </div>
            <div id="skill" class="py-4 border-b border-gray-500">
                <h1 class="text-3xl font-bold">《雷神之錘》技巧規則</h1>

            </div>
            <div class="flex justify-center mt-4">
                <button class="bg-main text-white text-3xl font-bold px-12 py-2 rounded-3xl">立即遊玩</button>
            </div>
            <div>
                <HomeMore></HomeMore>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>