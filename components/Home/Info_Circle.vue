<script setup>
const props = defineProps({
    value: {
        type: Number,
        default: 0,
    },
});

</script>

<template>
    <div class="flex flex-col items-center space-y-3">
        <div class="text-white font-bold text-2xl"><slot name="title"></slot></div>
        <div class="circle">
            <div class="circle-inside">
                <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>
            </div>
        </div>
        <div class="text-white font-bold text-2xl"><slot name="descr"></slot></div>

    </div>
</template>

<style lang="scss" scoped>
.circle{
  --width: 120px;
  --percent: v-bind(props.value);
  --deg: calc(360deg * calc(var(--percent) / 100));
  width: var(--width);
  height: var(--width);
  border-radius: 50%;
  margin: 0px auto;
  background-image: conic-gradient(rgb(255, 187, 0) var(--deg), #ffff var(--deg));
  position: relative;
}
.circle-inside{
  --bar-width: 40px;
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ef5924;
  width: calc(var(--width) - var(--bar-width));
  height: calc(var(--width) - var(--bar-width));
  align-items: center;
  justify-content: center;
  font-size: 40px;
}
</style>