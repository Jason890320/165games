<script setup>

function Jumpto(location) {
    document.getElementById(`${location}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
}

</script>

<template>
    <div class="w-full bg-[#f5f5f5]">
        <div class="bg-white mx-80">
            <div class="">
                <img class="w-full" src="/image/sport.webp" alt="">
            </div>
            <div class="px-6 mt-4">
                <h1 class="text-5xl font-bold">娛樂城反詐騙</h1>
                <div class="w-36 mt-2 mb-4 border-2 border-black"></div>
            </div>
            <div class="py-4 border-b border-gray-500 mx-10">
                <div class="flex justify-between items-center">
                    <button @click="Jumpto('rule')" class="bg-main px-12 py-2 text-2xl text-white font-bold">1.娛樂城反詐騙手法</button>
                    <button @click="Jumpto('video')" class="bg-main px-12 py-2 text-2xl text-white font-bold">2.防範不肖娛樂城</button>
                    <button @click="Jumpto('skill')" class="bg-main px-12 py-2 text-2xl text-white font-bold">3.尋找正確管道</button>
                </div>
            </div>
            <div class="py-4 border-b border-gray-500 mx-10">
                <div class="mx-4">
                    <h1 class="text-3xl font-bold">五大娛樂城詐騙手法:您重招了嗎?</h1>
                    <p class="leading-loose text-[#a9a9a9] py-2">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。 持球看的球員必須運動籃球才可以帶著球走，只可以用單手拍球、傳球或投籃。</p>
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
            <div>
                <HomeMore></HomeMore>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>