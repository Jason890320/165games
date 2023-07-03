<script setup>
const props = defineProps({
    data: {
        type: Object,
        default: {},
    },
});
const emit = defineEmits(["close"]);
const loading = ref(true);

onMounted(()=>{
    console.log(props.data, 'prop');
    loading.value = false;
})

function close() {
    emit("close");
}
function clickclose(e){
    const a = document.getElementById("temp");
    if (a == null) {
        close()
    }else{
        if (e.target == a || a.contains(e.target)) {
            
        }else{
            close()
        }
    };
}
</script>

<template>
    <div v-if="!loading" @click="clickclose" class="fixed top-0 left-0 w-full h-full z-[60] bg-[#c4c4c4cc] flex justify-center items-center px-4 py-8">   
        <div id="temp" class="bg-main py-8 px-4 md:px-8 w-[850px] max-h-[900px] rounded-xl flex flex-col items-center relative overflow-y-scroll noscrollbar">
            <button @click="close()" class="absolute top-3 right-3 fill-white text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
            <h1 class="text-white font-bold text-3xl underline underline-offset-8">{{ props.data.name }}</h1>
            <div class="mt-5">
                <img class="w-full h-full object-cover" :src="props.data.info.banner" alt="">
            </div>
            <div class="py-4 md:w-full flex flex-wrap md:flex-row justify-between">
                <HomeInfo_Circle :value="props.data.info.draw">
                    <template v-slot:title>出金速度</template>
                    <template v-slot:descr>{{props.data.info.draw}}秒</template>
                </HomeInfo_Circle>
                <HomeInfo_Circle :value="props.data.info.safe">
                    <template v-slot:title>安全指數</template>
                    <template v-slot:descr>{{props.data.info.safe}}%</template>
                </HomeInfo_Circle>
                <HomeInfo_Circle :value="props.data.info.Welfare">
                    <template v-slot:title>遊戲福利</template>
                    <template v-slot:descr>{{props.data.info.Welfare}}分</template>
                </HomeInfo_Circle>
                <HomeInfo_Circle :value="props.data.info.store">
                    <template v-slot:title>存款速度</template>
                    <template v-slot:descr>{{props.data.info.store}}秒</template>
                </HomeInfo_Circle>
            </div>
            <p class="leading-loose text-neutral-100 py-4">{{ props.data.content }}</p>
            <div class="w-full grid grid-row-2 md:grid-cols-2 gap-4">
                <div class="row-span-1 md:col-span-1 bg-white flex flex-col px-4 py-2 text-main font-semibold space-y-1">
                    <span>娛樂城品牌資訊:</span>
                    <span>品牌名稱:{{ props.data.info.company.name }}</span>
                    <span>創立時間:{{ props.data.info.company.create }}</span>
                    <span>存款速度:平均{{ props.data.info.store }}秒</span>
                    <span>提款速度:平均{{ props.data.info.draw }}秒</span>
                    <span>單筆提款:{{ props.data.info.oncedraw }}</span>
                    <span>遊戲對象:{{ props.data.info.company.forwho }}</span>
                    <span>支付平台:{{ props.data.info.company.pay }}</span>
                </div>
                <div class="row-span-1 md:col-span-1 bg-white flex flex-col px-4 py-2 text-main font-semibold space-y-1">
                    <span>娛樂城優惠活動:</span>
                    <span v-for="i in props.data.info.sale" :key="i">{{ i }}</span>
                </div>
            </div>
            <button class="bg-white text-main text-xl font-bold px-8 py-0.5 rounded-xl mt-5">立即註冊</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.noscrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.noscrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>