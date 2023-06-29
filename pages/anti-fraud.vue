<script setup>

function handjump(id){
    document.getElementById(`${id}`).scrollIntoView({ behavior: 'smooth', block: 'center' })
}

</script>

<template>
    <ArticleTemp @jump="handjump($event)">
        <template v-slot:title>娛樂城反詐騙</template>
        <template v-slot:banner>
            <img class="w-full h-full object-cover" src="/image/sport.webp" alt="">
        </template>
        <template v-slot:btn1>1.娛樂城反詐騙手法</template>
        <template v-slot:btn2>2.防範不肖娛樂城</template>
        <template v-slot:btn3>3.尋找正確管道?</template>
        <template v-slot:content>
            <ArticleContent id="1">
                <template v-slot:title>五大娛樂城詐騙手法:您重招了嗎?</template>
                <template v-slot:content>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">第一招『娛樂城詐騙』保證獲利招</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                </template>
            </ArticleContent>
            <ArticleContent id="2">
                <template v-slot:title>如何防範不肖娛樂城詐騙? 聽!掛!佐證!</template>
                <template v-slot:content>
                    <div class="py-2">
                        <h1 class="text-xl lg:text-2xl font-bold">第一招『娛樂城詐騙』保證獲利招</h1>
                        <p class="leading-loose text-[#a9a9a9]">在開始球賽時，球員會在籃球場中圈裡進行跳球。 球員就要用一切合法的方法，目的要把球投進籃中。 籃球規則中訂明，球員只可以用手玩籃球，但不可以用拳打，而蓄意用下肢接觸球的更是違例。</p>
                    </div>
                </template>
            </ArticleContent>
        </template>
    </ArticleTemp>
</template>

<style lang="scss" scoped>

</style>