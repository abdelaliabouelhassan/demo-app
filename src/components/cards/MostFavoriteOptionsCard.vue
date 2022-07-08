<template>
  <div
    class="w-full  py-10 px-10 rounded-lg bg-white relative overflow-hidden"
  >
    <div class="w-full flex items-center justify-between z-10">
      <span class="text-xl font-bold text-tertiary-300 text-opacity-75"
        >Most favorite options
      </span>
      <button>
        <svg
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
            transform="translate(-1096.022 1025.638) rotate(-45)"
          >
            <line
              id="Line_273"
              data-name="Line 273"
              x2="13.446"
              transform="translate(1493.5 72.343)"
              fill="none"
              stroke="#a3a6bc"
              stroke-linecap="round"
              stroke-width="2"
            />
            <g
              id="Group_759"
              data-name="Group 759"
              transform="translate(1497.935 72.346) rotate(-45)"
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
          </g>
        </svg>
      </button>
    </div>

    <div class=" flex flex-col items-start space-y-4 w-full pt-10">
        <div class=" flex flex-col items-start space-y-2 w-full ">
            <div class=" flex justify-between items-center w-full">
                <div>
                    <span class=" text-sm text-tertiary-300 text-opacity-75 font-bold">27“ Wheel</span>
                    <span class=" text-sm text-tertiary-300 text-opacity-75 font-light"> - Wheels group</span>
                </div>
                <span class=" text-sm text-tertiary-300 text-opacity-75 font-light">2.580 times</span>
            </div>
            <div class=" w-full bg-tertiary-400 rounded-full h-4 overflow-hidden p-1">
                <div class=" w-full h-full rounded-full bg-tertiary-300">
                     
                </div>
            </div>
        </div>
         <div class=" flex flex-col items-start space-y-2 w-full ">
            <div class=" flex justify-between items-center w-full">
                <div>
                    <span class=" text-sm text-tertiary-300 text-opacity-75 font-bold">19“ Aluminium rim</span>
                </div>
                <span class=" text-sm text-tertiary-300 text-opacity-75 font-light">1.720 times</span>
            </div>
            <div class=" w-full bg-tertiary-400 rounded-full h-4 overflow-hidden p-1">
                <div class=" w-1/3 h-full rounded-full bg-tertiary-300">
                     
                </div>
            </div>
        </div>
         <div class=" flex flex-col items-start space-y-2 w-full " v-for="n in 6" :key="n">
            <div class=" flex justify-between items-center w-full">
                <div>
                    <span class=" text-sm text-tertiary-300 text-opacity-75 font-bold">27“ Wheel</span>
                    <span class=" text-sm text-tertiary-300 text-opacity-75 font-light"> - Wheels group</span>
                </div>
                <span class=" text-sm text-tertiary-300 text-opacity-75 font-light">2.580 times</span>
            </div>
            <div class=" w-full bg-tertiary-400 rounded-full h-4 overflow-hidden p-1">
                <div class=" w-1/2 h-full rounded-full bg-tertiary-300">
                     
                </div>
            </div>
        </div>
     
       
        
    </div>
  </div>
</template>