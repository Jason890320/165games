<script setup>
const props = defineProps({
    value: {
        type: Number,
        default: 0,
    },
    unit: {
        type: String,
        default: "%",
    },
});

const text = computed(()=>{
    if (props.unit == '秒') {
      return '"秒"' ;
    }else if(props.unit == '分'){
      return '"分"' ;
    }else if(props.unit == '%'){
      return '"%"' ;
    }
});

// const text = ref(props.unit)

</script>

<template>
    <div class="flex flex-col items-center space-y-3">
        <div class="text-white font-bold text-2xl"><slot name="title"></slot></div>
        <!-- <div class="circle transform">
            <div class="circle-inside">
                <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>
            </div>
        </div> -->
        <div class="progress-bar css">
            <progress id="css" min="0" max="100" :value="props.value"></progress>
            <svg class="fill-white text-3xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>
        </div>
        <!-- <div class="text-white font-bold text-2xl"><slot name="descr"></slot></div> -->
    </div>
</template>

<style lang="scss" scoped>
// .circle{
//   --width: 120px;
//   --percent: v-bind(props.value);
//   --deg: calc(360deg * calc(var(--percent) / 100));
//   width: var(--width);
//   height: var(--width);
//   border-radius: 50%;
//   margin: 0px auto;
//   background-image: conic-gradient(rgb(255, 187, 0) var(--deg), #ffff var(--deg));
//   position: relative;
// }
// .circle-inside{
//   --bar-width: 40px;
//   position: absolute;
//   display: flex;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 50%;
//   background: #ef5924;
//   width: calc(var(--width) - var(--bar-width));
//   height: calc(var(--width) - var(--bar-width));
//   align-items: center;
//   justify-content: center;
//   font-size: 40px;
// }
@property --progress-value {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}

@keyframes css-progress {
  to { --progress-value: v-bind(props.value); }
}

.progress-bar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  
  /* to center the percentage value */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.progress-bar::before {
  color:white;
  font-weight: 700;
  font-size: 1.5rem;
  position: absolute;
  bottom: -45px;
  counter-reset: percentage var(--progress-value);
  content: counter(percentage) v-bind(text);
}

.css {
  background: 
    radial-gradient(closest-side, #ef5924 69%, transparent 40% 100%, white 0),
    conic-gradient(rgb(255, 187, 0) calc(var(--progress-value) * 1%), white 0);
  animation: css-progress 2s 1 forwards;
}

.css::before {
  animation: css-progress 2s 1 forwards;
}

body {
  font-family: -apple-system, system-ui, Helvetica, Arial, sans-serif;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 600px;
}

h2 {
  text-align: center;
}

progress {
  visibility: hidden;
  width: 0;
  height: 0;
}

</style>