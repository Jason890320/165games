<script setup>

function handjump(id){
    document.getElementById(`${id}`).scrollIntoView({ behavior: 'smooth', block: 'center' })
}

</script>

<template>
    <ArticleTemp :title="false" @jump="handjump($event)">
        <template v-slot:banner>
            <img class="w-full h-full object-cover" src="/image/thor.png" alt="">
        </template>
        <template v-slot:btn1>1.遊戲玩法</template>
        <template v-slot:btn2>2.遊戲影片</template>
        <template v-slot:btn3>3.技巧規則</template>
        <template v-slot:descr>雷神之錘》是《RSG電子》以電影雷神索爾為主題，以全版倍數、消除掉落方式進行遊戲的線上老虎機，版面上任意位置均支付，倍數符號最高500倍，遊戲最大獎51000倍。</template>
        <template v-slot:content>
            <ArticleContent>
                <template v-slot:title>《雷神之錘》老虎機介紹</template>
                <template v-slot:content>
                    <div class="text-[#a9a9a9]">
                        <p class="leading-loose py-2">《雷神之錘》是一款無賠付線的老虎機，遊戲中隨處支付可在任意位置的相同符號總數量決定可獲得獎金。</p>
                        <ul class="list-disc list-inside space-y-2 indent-4">
                            <li>遊戲規則 : 隨處支付</li>
                            <li>最大倍數 : 51000倍</li>
                            <li>獎金方式 : 全盤倍數、消除掉落</li>
                            <li>獎金遊戲 : 選轉觸發+購買特色</li>
                            <li>返還率 : 97.90% </li>
                        </ul>
                    </div>
                </template>
            </ArticleContent>
            <ArticleContent id="1">
                <template v-slot:title>《雷神之錘》老虎機玩法規則說明</template>
                <template v-slot:content>
                    <h1 class="text-xl lg:text-2xl font-bold text-main">玩法1 : 隨處支付規則與倍數特色</h1>
                    <div class="flex flex-wrap space-x-4 py-4">
                        <img class="object-cover" src="/image/property6.png" alt="">
                        <img class="object-cover" src="/image/property2.png" alt="">
                        <img class="object-cover" src="/image/property10.png" alt="">
                        <img class="object-cover" src="/image/property9.png" alt="">
                    </div>
                    <ul class="list-disc list-inside space-y-2 indent-4">
                        <li>版面只要出現倍數符號，<span class="text-main">即可獲得2倍到500倍</span> 的隨機倍數。</li>
                        <li>當不再進行掉落消除時，版面上所有倍數符號的倍數會被加總起來，然後<span class="text-main">乘上得分作為最終得贏分</span>。</li>
                        <li><span class="text-main">最小投注20分時</span>才會出現隨處支付倍數特色。</li>
                    </ul>
                </template>
            </ArticleContent>
            <ArticleContent>
                <template v-slot:title>《雷神之錘》玩法與道具賠率</template>
                <template v-slot:content>
                    <h1 class="text-xl lg:text-2xl font-bold text-main">玩法2 : 通過累積道具獲得高賠率</h1>
                </template>
            </ArticleContent>
            <ArticleContent>
                <template v-slot:title>《雷神之錘》購買免費遊戲特色 免費遊戲</template>
                <template v-slot:content>
                    <h1 class="text-xl lg:text-2xl font-bold text-main">玩法3 : 以免費遊戲累積更多獎金</h1>
                </template>
            </ArticleContent>
            <ArticleContent id="2">
                <template v-slot:title>《雷神之錘》老虎機爆分影片 感受爆分威力</template>
                <template v-slot:content>
                    
                </template>
            </ArticleContent>
            <ArticleContent id="3">
                <template v-slot:title>《雷神之錘》技巧規則</template>
                <template v-slot:content>
                    
                </template>
            </ArticleContent>
        </template>
    </ArticleTemp>
</template>

<style lang="scss" scoped>

</style>