<script setup>
useSeoMeta({
 title: "NBA運動賽事表 - 165娛樂城評價",
 description: "NBA運動賽事表 - 165娛樂城評價",
 ogDescription: "NBA運動賽事表 - 165娛樂城評價",
 ogTitle: "NBA運動賽事表 - 165娛樂城評價",
});

function handjump(id){
    var top = document.getElementById(id).offsetTop- 85;
    window.scrollTo({ top: top, behavior: 'smooth'});
}

</script>

<template>
    <ArticleTemp @jump="handjump($event)">
        <template v-slot:title>NBA運動賽事評價</template>
        <template v-slot:banner>
            <img class="w-full h-full object-cover" src="/image/sport.webp" alt="">
        </template>
        <template v-slot:btn1>1.基本規則</template>
        <template v-slot:btn2>2.賽事評價</template>
        <template v-slot:btn3>3.下注賠率</template>
        <template v-slot:content>
            <ArticleContent id="1">
                <template v-slot:title>NBA基本規則介紹:看懂球賽</template>
                <template v-slot:content>
                    <p class="leading-loose text-[#a9a9a9] py-2">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。 持球看的球員必須運動籃球才可以帶著球走，只可以用單手拍球、傳球或投籃。</p>
                    <p class="leading-loose text-[#a9a9a9] py-2">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。 持球看的球員必須運動籃球才可以帶著球走，只可以用單手拍球、傳球或投籃。</p>
                </template>
            </ArticleContent>
            <ArticleContent>
                <template v-slot:title>NBA賽賽事介紹:一次了解NBA大小事</template>
                <template v-slot:content>
                    <div class="flex flex-col items-center mt-2">
                        <img class="w-full h-full object-cover" src="/image/sport.webp" alt="">
                        <span class="py-2">2022-2023年完整NBA賽事紀錄表。</span>
                    </div>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">NBA例行賽</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">NBA季後賽</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">NBA總決賽</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                </template>
            </ArticleContent>
            <ArticleContent id="2">
                <template v-slot:title>賽事評價整體大局走向</template>
                <template v-slot:content>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">NBA例行賽</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">NBA季後賽</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">NBA總決賽</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                </template>
            </ArticleContent>
            <ArticleRank id="3">
                <template v-slot:title>娛樂城下注賠率評價:該怎麼下最划算?</template>
            </ArticleRank>
        </template>
    </ArticleTemp>
</template>

<style lang="scss" scoped>

</style>