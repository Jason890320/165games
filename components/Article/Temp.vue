<script setup>
const props = defineProps({
    title: {
        type: Boolean,
        default: true,
    },
    more: {
        type: Boolean,
        default: true,
    },
})
const emit = defineEmits(["jump"]);

function jump(id) {
    emit("jump",id);
}

</script>

<template>
    <div class="w-full bg-[#f5f5f5]">
        <div class="bg-white mx-0 md:mx-14 lg:mx-32 xl:mx-64 2xl:mx-80">
            <div class="">
                <slot name="banner"></slot>
            </div>
            <div v-if="props.title" class="mx-6 mt-4">
                <h1 class="text-3xl lg:4xl xl:text-5xl font-bold"><slot name="title"></slot></h1>
                <div class="w-24 xl:w-36 mt-2 mb-4 border-2 border-black"></div>
            </div>
            <div class="mx-4 md:mx-10 py-4 border-b border-gray-500">
                <div class="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 items-center mb-4">
                    <button @click="jump('1')" class="cta text-base lg:text-xl 2xl:text-2xl"><slot name="btn1"></slot></button>
                    <button @click="jump('2')" class="cta text-base lg:text-xl 2xl:text-2xl"><slot name="btn2"></slot></button>
                    <button @click="jump('3')" class="cta text-base lg:text-xl 2xl:text-2xl"><slot name="btn3"></slot></button>
                    <!-- <button @click="jump('1')" class="bg-main h-[50px] w-60 md:w-[180px] lg:w-[200px] 2xl:w-[250px] text-base lg:text-xl 2xl:text-2xl text-white font-bold"><slot name="btn1"></slot></button>
                    <button @click="jump('2')" class="bg-main h-[50px] w-60 md:w-[180px] lg:w-[200px] 2xl:w-[250px] text-base lg:text-xl 2xl:text-2xl text-white font-bold"><slot name="btn2"></slot></button>
                    <button @click="jump('3')" class="bg-main h-[50px] w-60 md:w-[180px] lg:w-[200px] 2xl:w-[250px] text-base lg:text-xl 2xl:text-2xl text-white font-bold"><slot name="btn3"></slot></button> -->
                </div>
                <p class="leading-loose"><slot name="descr"></slot></p>
            </div>
            <slot name="content"></slot>
            <div class="flex justify-center mt-4">
                <button class="bg-main text-white text-3xl font-bold px-12 py-2 rounded-3xl border-2 border-main hover:text-main hover:bg-white duration-500">立即遊玩</button>
            </div>
            <div v-if="props.more">
                <HomeMore></HomeMore>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cta {
    display: flex;
    padding: 10px 30px;
    text-decoration: none;
    color: white;
    background: #ef5924;
    transition: 1s;
    box-shadow: 5px 5px 0 black;
    transform: skewX(-15deg);
}

.cta:focus {
   outline: none; 
}

.cta:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #FBC638;
}

.cta span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0px;
}

.cta:hover  span:nth-child(2) {
    transition: 0.5s;
    margin-right: 40px;
}

  span {
    transform: skewX(15deg) 
  }

  span:nth-child(2) {
    width: 20px;
    margin-left: 20px;
    position: relative;
    top: 10%;
  }
  
</style>