<template>
  <div class="">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="relative z-40 md:hidden" role="dialog" aria-modal="true" v-if="show">
      <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

      <div class="fixed inset-0 flex z-40">
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
        <div
          class="relative flex-1 flex flex-col max-w-xs w-full bg-tertiary-100"
        >
          <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
             @click="CloseSidebar"
              type="button"
              class="
                ml-1
                flex
                items-center
                justify-center
                h-10
                w-10
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-white
              "
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 px-2 overflow-y-auto">
            <div class="flex-shrink-0 flex items-center px-4">
              <LogoIcon />
            </div>
            <nav class="mt-5 px-2 space-y-1">
              <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
            <router-link
              :to="item.to"
              v-for="(item, index, key) in navItems"
              :key="key"
              :href="item.to"
              class="
                group
                flex flex-col
                items-start
                px-2
                py-2
                text-lg
                font-sans font-light
                rounded-lg
              "
              :class="{
                'bg-primary-100 text-white': item.active,
                'text-tertiary-300 hover:bg-gray-50 hover:text-gray-900':
                  !item.active,
                'text-opacity-75 font-bold':
                  item.isDropdownOpen && item.children.length > 0,
              }"
            >
              <!-- icon name: ex DashboardIcon -->

              <div
                class="w-full flex justify-between items-center"
                @click="toggleDropdown(item)"
              >
                <div class="w-full flex items-center space-x-2">
                  <component
                    :is="item.icon"
                    :class="{
                      'text-white': item.active,
                      'text-tertiary-300 text-opacity-50': !item.active,
                      'text-opacity-75':
                        item.isDropdownOpen && item.children.length > 0,
                    }"
                    :color="item.active ? '#fff' : '#020731'"
                  />
                  <span>{{ item.name }}</span>
                </div>
                <IconChevron
                  v-if="item.children.length > 0"
                  :class="{ 'top text-opacity-75': item.isDropdownOpen }"
                />
              </div>

              <div
                v-show="item.isDropdownOpen && item.children.length > 0"
                class="w-full flex flex-col items-start space-y-4 pl-10 py-2"
              >
                <router-link
                  :to="child.to"
                  @click="setChildeActive(item, child)"
                  v-for="(child, chindex, chkey) in item.children"
                  :key="chkey"
                  class="text-xl font-light text-opacity-50"
                  :class="{
                    'hover:text-primary-100': !item.active,
                    'hover:text-white': item.active,
                  }"
                >
                  {{ child.name }}
                </router-link>
              </div>
            </router-link>
            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" class="
                w-full
                group
                flex
                items-center
                justify-between flex-shrink-0 group ">
             <div class="flex items-center space-x-2">
                <div class="w-9 h-9 rounded-lg flex bg-secondary-100">
                  <span class="m-auto text-xl font-normal text-white">H</span>
                </div>

                <p
                  class="
                    text-xl
                    font-light
                    text-tertiary-300 text-opacity-50
                    group-hover:text-gray-900
                  "
                >
                  Heinz Hübner
                </p>
              </div>
              <div class=" pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.142"
                  height="14.142"
                  viewBox="0 0 14.142 14.142"
                >
                  <path
                    id="Path_879"
                    data-name="Path 879"
                    d="M4059.6,1153.975h-7.944a1.027,1.027,0,0,1-.726-1.753l7.944-7.944a1.027,1.027,0,0,1,1.753.726v7.944A1.027,1.027,0,0,1,4059.6,1153.975Z"
                    transform="translate(-3673.136 2062.382) rotate(-45)"
                    fill="#f8581c"
                  />
                </svg>
              </div>
            </a>
          </div>
          
          
        </div>

        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="
          flex-1 flex flex-col
          min-h-0
          border-r border-gray-200
          bg-tertiary-100
        "
      >
        <div class="flex-1 flex flex-col px-2 pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4 py-10">
            <LogoIcon />
          </div>
          <div class="flex flex-col items-start space-y-4 px-4">
            <div class="w-full h-px bg-tertiary-200 bg-opacity-10"></div>
            <a href="#" class="flex items-center space-x-8">
              <ArrowLeftIcon />
              <span
                class="
                  text-xl
                  font-sans font-light
                  text-opacity-50 text-tertiary-300
                "
                >All Projects</span
              >
            </a>
            <div class="w-full h-px bg-tertiary-200 bg-opacity-10"></div>
          </div>
         <nav class="mt-5 flex-1 px-2 bg-tertiary-100 space-y-1">
            <router-link
              :to="item.to"
              v-for="(item, index, key) in navItems"
              :key="key"
              :href="item.to"
              class="
                group
                flex flex-col
                items-start
                px-2
                py-2
                text-lg
                font-sans font-light
                rounded-lg
              "
              :class="{
                'bg-primary-100 text-white': item.active,
                'text-tertiary-300 hover:bg-gray-50 hover:text-gray-900':
                  !item.active,
                'text-opacity-75 font-bold':
                  item.isDropdownOpen && item.children.length > 0,
              }"
            >
              <!-- icon name: ex DashboardIcon -->

              <div
                class="w-full flex justify-between items-center"
                @click="toggleDropdown(item)"
              >
                <div class="w-full flex items-center space-x-2">
                  <component
                    :is="item.icon"
                    :class="{
                      'text-white': item.active,
                      'text-tertiary-300 text-opacity-50': !item.active,
                      'text-opacity-75':
                        item.isDropdownOpen && item.children.length > 0,
                    }"
                    :color="item.active ? '#fff' : '#020731'"
                  />
                  <span>{{ item.name }}</span>
                </div>
                <IconChevron
                  v-if="item.children.length > 0"
                  :class="{ 'top text-opacity-75': item.isDropdownOpen }"
                />
              </div>

              <div
                v-show="item.isDropdownOpen && item.children.length > 0"
                class="w-full flex flex-col items-start space-y-4 pl-10 py-2"
              >
                <router-link
                  :to="child.to"
                  @click="setChildeActive(item, child)"
                  v-for="(child, chindex, chkey) in item.children"
                  :key="chkey"
                  class="text-xl font-light text-opacity-50"
                  :class="{
                    'hover:text-primary-100': !item.active,
                    'hover:text-white': item.active,
                  }"
                >
                  {{ child.name }}
                </router-link>
              </div>
            </router-link>
          </nav> 
        </div>
        <div class="w-full">
          <div class="px-4 w-full">
            <div class="w-full h-px bg-tertiary-200 bg-opacity-10"></div>
          </div>
          <div class="flex-shrink-0 flex border-gray-200 p-4">
            <a
              href="#"
              class="
                flex-shrink-0
                w-full
                group
                flex
                items-center
                justify-between
              "
            >
              <div class="flex items-center space-x-2">
                <div class="w-9 h-9 rounded-lg flex bg-secondary-100">
                  <span class="m-auto text-xl font-normal text-white">H</span>
                </div>

                <p
                  class="
                    text-xl
                    font-light
                    text-tertiary-300 text-opacity-50
                    group-hover:text-gray-900
                  "
                >
                  Heinz Hübner
                </p>
              </div>
              <div class=" pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.142"
                  height="14.142"
                  viewBox="0 0 14.142 14.142"
                >
                  <path
                    id="Path_879"
                    data-name="Path 879"
                    d="M4059.6,1153.975h-7.944a1.027,1.027,0,0,1-.726-1.753l7.944-7.944a1.027,1.027,0,0,1,1.753.726v7.944A1.027,1.027,0,0,1,4059.6,1153.975Z"
                    transform="translate(-3673.136 2062.382) rotate(-45)"
                    fill="#f8581c"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="md:pl-64 flex flex-col flex-1 h-screen">
      <div
        class="
          sticky
          top-0
          z-10
          md:hidden
          pl-1
          pt-1
          sm:pl-3 sm:pt-3
          bg-tertiary-100
          h-full
        "
      >
        <button
         @click="OpenSideBar"
          type="button"
          class="
            -ml-0.5
            -mt-0.5
            h-12
            w-12
            inline-flex
            items-center
            justify-center
            rounded-md
            text-gray-500
            hover:text-gray-900
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-indigo-500
          "
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main class="flex-1">
        <slot name="content"></slot>
      </main>
    </div>
  </div>
</template>


<script>
import LogoIcon from "../components/icons/LogoIcon.vue";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon.vue";
import DashboardIcon from "../components/icons/DashboardIcon.vue";
import ContentIcon from "../components/icons/ContentIcon.vue";
import VariantOptionIcon from "../components/icons/VariantOptionIcon.vue";
import InsightsIcon from "../components/icons/InsightsIcon.vue";
import UserManagementIcon from "../components/icons/UserManagementIcon.vue";
import ReferenceIcon from "../components/icons/ReferenceIcon.vue";
import SecurityIcon from "../components/icons/SecurityIcon.vue";
import IconChevron from "../components/icons/IconChevron.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    LogoIcon,
    ArrowLeftIcon,
    IconChevron,
  },
  setup() {
    let navItems = ref([
      {
        name: "Dashboard",
        icon: DashboardIcon,
        to: "/dashboard",
        active: true,
        children: [],
        isDropdownOpen: false,
      },
      {
        name: "Content",
        icon: ContentIcon,
        to: "",
        active: false,
        children: [
          {
            name: "Overview",
            to: "",
            active: false,
          },
          {
            name: "Variant Options",
            to: "",
            active: false,
          },
          {
            name: "Locations",
            to: "",
            active: false,
          },
          {
            name: "Technology",
            to: "",
            active: false,
          },
        ],
        isDropdownOpen: false,
      },
      {
        name: "Variant Options",
        icon: VariantOptionIcon,
        to: "",
        active: false,
        children: [
          {
            name: "Overview",
            to: "",
            active: false,
          },
          {
            name: "Variant Options",
            to: "",
            active: false,
          },
          {
            name: "Locations",
            to: "",
            active: false,
          },
          {
            name: "Technology",
            to: "",
            active: false,
          },
        ],
        isDropdownOpen: false,
      },
      {
        name: "Insights",
        icon: InsightsIcon,
        to: "",
        active: false,
        children: [
          {
            name: "Overview",
            to: "",
            active: false,
          },
          {
            name: "Variant Options",
            to: "",
            active: false,
          },
          {
            name: "Locations",
            to: "",
            active: false,
          },
          {
            name: "Technology",
            to: "",
            active: false,
          },
        ],
        isDropdownOpen: false,
      },
      {
        name: "User Management",
        icon: UserManagementIcon,
        to: "",
        active: false,
        children: [
          {
            name: "Overview",
            to: "user-management",
            active: false,
          },
          {
            name: "Variant Options",
            to: "",
            active: false,
          },
          {
            name: "Locations",
            to: "",
            active: false,
          },
          {
            name: "Technology",
            to: "",
            active: false,
          },
        ],
        isDropdownOpen: false,
      },
      {
        name: "API Reference",
        icon: ReferenceIcon,
        to: "",
        active: false,
        children: [
          {
            name: "Overview",
            to: "",
            active: false,
          },
          {
            name: "Variant Options",
            to: "",
            active: false,
          },
          {
            name: "Locations",
            to: "",
            active: false,
          },
          {
            name: "Technology",
            to: "",
            active: false,
          },
        ],
        isDropdownOpen: false,
      },
      {
        name: "Security",
        icon: SecurityIcon,
        to: "",
        active: false,
        children: [],
        isDropdownOpen: false,
      },
    ]);
    const toggleDropdown = (item) => {
      if (item.children.length == 0) {
        navItems.value.forEach((item) => {
          item.active = false;
        });
        item.active = true;
        return;
      }
      if (item.isDropdownOpen) {
        item.isDropdownOpen = false;
      } else {
        navItems.value.forEach((item) => {
          item.isDropdownOpen = false;
        });
        item.isDropdownOpen = true;
      }
    };
    const setChildeActive = (item, child) => {
      item.children.forEach((item) => {
        item.active = false;
      });
      navItems.value.forEach((item) => {
        item.active = false;
      });
      item.active = true;
      item.isDropdownOpen = false;
      child.active = true;
    };
    let show = ref(false);
    const CloseSidebar = () => {
      show.value = false;
    };
    const OpenSideBar = () => {
      show.value = true;
    };
    return {
      navItems,
      toggleDropdown,
      setChildeActive,
      show,
      CloseSidebar,
      OpenSideBar,
    };
  },
};
</script>


<style scoped>
.top {
  transform: rotate(50deg);
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>