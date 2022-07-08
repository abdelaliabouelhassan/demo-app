<template>
    <div class=" flex flex-col items-center space-y-2 ">
        <span class=" text-xs font-light text-tertiary-300">{{time}}</span>
        <div class=" rounded-full w-12 h-48 bg-tertiary-400 px-4 py-4 flex flex-col items-center space-y-2 "  :class="{'bg-tertiary-500':percentage == 100}">
            <div class=" w-full  h-full rounded-full bg-white  p-1 rotate-180  ">
                <div class=" w-full  bg-tertiary-300  rounded-full  " :style="{'height':percentage + '%'}">

                </div>
            </div>
            <span class=" text-sm font-semibold text-tertiary-300 text-opacity-50">{{value}} </span>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        time: {
            type: String,
            default: '00:00'
        },
        value: {
            type: Number,
            default: 0
        },
        percentage: {
            type: Number,
            default: 0
        }
    },
    
}
</script>