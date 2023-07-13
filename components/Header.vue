<script setup>
onMounted(() => {
    window.addEventListener('scroll', handScroll)
})

onUnmounted(() => {
    window.removeEventListener(handScroll)
})

const scrolltop = ref(false)
const gamesDrop = ref(false)
const newsDrop = ref(false)
const nav = ref(false)
const gamesbtn = ref(false)
const sportsbtn = ref(false)

function handScroll() {
    if (window.scrollY >= 40) {
        scrolltop.value = true
    } else {
        scrolltop.value = false
    }
}
function opennav() {
    nav.value = !nav.value
}
function navbtnDrop(btn) {
    if (btn == 'games') {
        gamesbtn.value = !gamesbtn.value
    } else if (btn == 'sports') {
        sportsbtn.value = !sportsbtn.value
    }
}
</script>

<template>
    <div
        :class="[scrolltop ? 'h-[60px]' : 'h-[60px] lg:h-[80px]']"
        class="w-full bg-main flex justify-between items-center px-4 lg:px-10 top-0 z-50 sticky duration-500"
    >
        <NuxtLink to="/">
            <div :class="[scrolltop ? 'w-[150px] lg:w-[170px]' : 'w-[170px] lg:w-[200px]']" class="duration-500">
                <img class="object-cover" src="/image/165.png" alt="" />
            </div>
        </NuxtLink>
        <div class="items-center space-x-4 lg:space-x-10 hidden md:flex">
            <NuxtLink to="/" class="p-2 text-white no-underline hover:bg-orange-700 duration-300 rounded-md"
                >首頁</NuxtLink
            >
            <div
                @mouseover="gamesDrop = true"
                @mouseleave="gamesDrop = false"
                class="relative flex justify-center items-start group cursor-pointer"
            >
                <button class="p-2 text-white no-underline group-hover:bg-orange-700 rounded-md duration-300">
                    電子遊戲
                </button>
                <transition name="navbtn" mode="out-in">
                    <div v-if="gamesDrop" class="absolute text-center text-sm pt-3 top-10 w-[150px] page">
                        <NuxtLink
                            to="/games/thor"
                            class="bg-white hover:bg-orange-400 py-3 px-4 block whitespace-nowrap"
                            >gmae1</NuxtLink
                        >
                        <NuxtLink
                            to="/games/thor"
                            class="bg-white hover:bg-orange-400 py-3 px-4 block whitespace-nowrap"
                            >gmae2</NuxtLink
                        >
                    </div>
                </transition>
            </div>
            <div
                @mouseover="newsDrop = true"
                @mouseleave="newsDrop = false"
                class="relative flex justify-center items-start group cursor-pointer"
            >
                <button class="p-2 text-white no-underline group-hover:bg-orange-700 rounded-md duration-300">
                    運動賽事表
                </button>
                <transition name="navbtn" mode="out-in">
                    <div v-if="newsDrop" class="absolute text-center text-sm pt-3 top-10 w-[150px] page">
                        <NuxtLink
                            to="/Sports/nba"
                            class="bg-white hover:bg-orange-400 py-3 px-4 block whitespace-nowrap"
                            >sport1</NuxtLink
                        >
                        <NuxtLink
                            to="/Sports/nba"
                            class="bg-white hover:bg-orange-400 py-3 px-4 block whitespace-nowrap"
                            >sport2</NuxtLink
                        >
                    </div>
                </transition>
            </div>
            <NuxtLink to="/anti-fraud" class="p-2 text-white no-underline hover:bg-orange-700 duration-300 rounded-md"
                >娛樂城反詐騙</NuxtLink
            >
        </div>
        <div @click="opennav()" class="md:hidden pr-2 hover:cursor-pointer">
            <svg class="text-2xl fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
            </svg>
        </div>
    </div>
    <transition name="nav" mode="out-in">
        <div
            v-if="nav"
            class="fixed top-[60px] z-50 w-screen max-h-[400px] bg-white shadow-xl flex flex-col items-start justify-start px-3 py-2 overflow-y-scroll"
        >
            <div class="w-full flex justify-center text-center">
                <NuxtLink to="/" @click="opennav" class="w-full p-3 border-b border-gray-400 hover:text-main"
                    >首頁</NuxtLink
                >
            </div>
            <div
                @click="navbtnDrop('games')"
                :class="[gamesbtn ? 'text-main' : '']"
                class="w-full text-center p-3 border-b border-gray-400 cursor-pointer relative"
            >
                電子遊戲
                <svg
                    class="fill-main absolute right-7 top-[17px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                </svg>
            </div>
            <transition name="navdrop" mode="out-in">
                <div
                    v-if="gamesbtn"
                    :class="[gamesbtn ? 'w-full bg-white flex flex-col items-start justify-start px-10' : 'hidden']"
                >
                    <NuxtLink to="/games/thor" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >gmae1</NuxtLink
                    >
                    <NuxtLink to="/games/thor" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >gmae2</NuxtLink
                    >
                    <NuxtLink to="/games/thor" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >gmae1</NuxtLink
                    >
                    <NuxtLink to="/games/thor" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >gmae2</NuxtLink
                    >
                    <NuxtLink to="/games/thor" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >gmae1</NuxtLink
                    >
                    <NuxtLink to="/games/thor" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >gmae2</NuxtLink
                    >
                </div>
            </transition>
            <div
                @click="navbtnDrop('sports')"
                :class="[sportsbtn ? 'text-main' : '']"
                class="w-full text-center p-3 border-b border-gray-400 cursor-pointer relative"
            >
                運動賽事表
                <svg
                    class="fill-main absolute right-7 top-[17px]"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                </svg>
            </div>
            <transition name="navdrop" mode="out-in">
                <div
                    v-if="sportsbtn"
                    :class="[sportsbtn ? 'w-full bg-white flex flex-col items-start justify-start px-10' : 'hidden']"
                >
                    <NuxtLink to="/Sports/nba" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >sport1</NuxtLink
                    >
                    <NuxtLink to="/Sports/nba" @click="opennav" class="w-full py-2 hover:text-main cursor-pointer"
                        >sport2</NuxtLink
                    >
                </div>
            </transition>
            <div class="w-full flex justify-center text-center">
                <NuxtLink to="/anti-fraud" @click="opennav" class="w-full p-3 border-b border-gray-400 hover:text-main"
                    >娛樂城反詐騙</NuxtLink
                >
            </div>
        </div>
    </transition>
</template>

<style scoped>
/* .scroller {
  scroll-margin-top: 100px;
} */
</style>
