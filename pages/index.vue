<script setup>

</script>

<template>
    <div>
        <HomeBanner></HomeBanner>
    </div>
    <div class="mx-4 sm:mx-16 lg:mx-32 xl:mx-40 2xl:mx-64 py-4">
        <HomeRank></HomeRank>
        <div class="py-8 border-b-2 border-gray-400">
            <div class="flex justify-between items-center md:text-2xl font-bold text-gray-500 mx-4 md:mx-14">
                <div class="flex flex-col items-center">
                    <span class="mb-2">今日瀏覽數</span>
                    <div class="">
                        <img class="opacity-60 select-none" src="https://www.f-counter.net/j/62/1688908509/" alt="アクセスカウンター">
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <span class="mb-2">總瀏覽數</span>
                    <div class="">
                        <img class="opacity-60 select-none" src="https://www.f-counter.net/j/62/1688908438/" alt="アクセスカウンター">
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <span class="mb-2">平台點閱率</span>
                    <div class="">
                        <img class="opacity-60 select-none" src="https://www.f-counter.net/j/62/1688908438/" alt="アクセスカウンター">
                    </div>
                </div>
            </div>
        </div>
        <HomeGames></HomeGames>
        <HomeMore></HomeMore>
    </div>
</template>



<style scoped>

</style>