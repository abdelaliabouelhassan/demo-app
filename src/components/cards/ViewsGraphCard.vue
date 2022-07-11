<template>
  <div class="w-full xl:max-h-96 lg:max-h-[37rem] h-full  py-10 px-10 rounded-lg bg-white relative ">
    <div class="w-full flex items-center justify-between z-10">
      <span class="text-xl font-bold text-tertiary-300 text-opacity-75"
        >Views 
        <span class="font-light">in the past 12h</span>
      </span>
      <button>
        <svg
          id="Component_4_1"
          data-name="Component 4 – 1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <rect
            id="Rectangle_505"
            data-name="Rectangle 505"
            width="32"
            height="32"
            rx="8"
            fill="#d6d7e2"
            opacity="0.351"
          />
          <g
            id="Group_760"
            data-name="Group 760"
            transform="translate(-1096.157 1025.638) rotate(-45)"
          >
            <g
              id="Group_759"
              data-name="Group 759"
              transform="translate(1502.177 72.346) rotate(-45)"
            >
              <line
                id="Line_274"
                data-name="Line 274"
                x2="6.396"
                transform="translate(0 6.396)"
                fill="none"
                stroke="#a3a6bc"
                stroke-linecap="round"
                stroke-width="2"
              />
              <line
                id="Line_275"
                data-name="Line 275"
                x2="6.396"
                transform="translate(6.396 6.396) rotate(-90)"
                fill="none"
                stroke="#a3a6bc"
                stroke-linecap="round"
                stroke-width="2"
              />
            </g>
            <g
              id="Group_920"
              data-name="Group 920"
              transform="translate(1498.495 72.346) rotate(135)"
            >
              <line
                id="Line_274-2"
                data-name="Line 274"
                x2="6.396"
                transform="translate(0 6.396)"
                fill="none"
                stroke="#a3a6bc"
                stroke-linecap="round"
                stroke-width="2"
              />
              <line
                id="Line_275-2"
                data-name="Line 275"
                x2="6.396"
                transform="translate(6.396 6.396) rotate(-90)"
                fill="none"
                stroke="#a3a6bc"
                stroke-linecap="round"
                stroke-width="2"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
    <span class=" text-sm text-tertiary-300 font-bold text-opacity-75">1.394 <span class=" font-light">views</span></span>

    <div class=" w-full xl:flex xl:flex-row grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8  xl:space-y-0 items-start xl:justify-between pt-6">
        <div>
            <ViewsGraph time="00:00" :value="25" :percentage="10" />
        </div>
        <div>
            <ViewsGraph time="01:00" :value="0" :percentage="0"  />
        </div>
        <div>
            <ViewsGraph time="02:00" :value="18"  :percentage="6" />
        </div>
        <div>
            <ViewsGraph time="03:00" :value="3"  :percentage="4" />
        </div>
        <div>
            <ViewsGraph time="04:00" :value="150"  :percentage="20" />
        </div>
        <div>
            <ViewsGraph time="05:00" :value="243"  :percentage="40" />
        </div>
        <div>
            <ViewsGraph time="06:00" :value="587"  :percentage="50" />
        </div>
        <div>
            <ViewsGraph time="07:00" :value="812" :percentage="60"/>
        </div>
        <div>
            <ViewsGraph time="08:00" :value="1578"  :percentage="70" />
        </div>
        <div>
            <ViewsGraph time="9:00" :value="1824"  :percentage="100" />
        </div>
        <div>
            <ViewsGraph time="10:00" :value="512"  :percentage="50"/>
        </div>
        <div>
            <ViewsGraph time="11:00" :value="83"  :percentage="15" />
        </div>
         <div>
            <ViewsGraph time="12:00" :value="5"  :percentage="6" />
        </div>
    </div>
    
  </div>
</template>


<script>
import ViewsGraph from '../widgets/ViewsGraph.vue'
export default {
    components:{
        ViewsGraph
    }
}
</script>