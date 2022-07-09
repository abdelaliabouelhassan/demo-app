<template>
  <div class="w-full h-full px-10 py-10">
    <div class="flex flex-col items-start space-y-2">
      <span class="text-2xl font-light text-tertiary-300 text-opacity-75"
        >Awesome Bike,</span
      >
      <div>
        <span class="text-5xl font-bold text-tertiary-300"
          >User Management
        </span>
      </div>
      <div class="w-full py-5">
        <div class="w-full h-px bg-tertiary-200 bg-opacity-10"></div>
      </div>

      <div class="w-full">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="
                  inline-block
                  min-w-full
                  py-2
                  align-middle
                  md:px-6
                  lg:px-8
                "
              >
                <table class="min-w-full spacing-table"  cellpadding="10">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="
                          py-3.5
                          pl-6
                          pr-3
                          text-left text-xl
                          font-light
                          text-tertiary-300
                          sm:pl-6
                          md:pl-0
                          text-opacity-50
                        "
                      >
                        <div class="pl-20">Name</div>
                      </th>
                      <th
                        scope="col"
                        class="
                          py-3.5
                          px-3
                          text-left text-xl
                          font-light
                          text-tertiary-300 text-opacity-50
                        "
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                      >
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr class="w-full rounded-full bg-white">
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          pl-4
                          pr-3
                          text-sm
                          font-medium
                          text-gray-900
                          sm:pl-6
                          md:pl-0
                          rounded-l-full
                        "
                      >
                        <div class="flex items-center pl-4">
                          <div class="h-10 w-10 flex-shrink-0 relative">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <div class="absolute -bottom-2 -right-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                              >
                                <g
                                  id="Group_942"
                                  data-name="Group 942"
                                  transform="translate(-448.84 -376.84)"
                                >
                                  <circle
                                    id="download"
                                    cx="9"
                                    cy="9"
                                    r="9"
                                    transform="translate(448.84 376.84)"
                                  />
                                  <g
                                    id="Group_940"
                                    data-name="Group 940"
                                    transform="translate(454.045 382.203)"
                                  >
                                    <path
                                      id="Path_1208"
                                      data-name="Path 1208"
                                      d="M596.762,672.161l3.794-2.412,3.794,2.412"
                                      transform="translate(-596.762 -669.749)"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-miterlimit="10"
                                      stroke-width="1.25"
                                    />
                                    <path
                                      id="Path_1209"
                                      data-name="Path 1209"
                                      d="M596.762,726.829l3.794-2.412,3.794,2.412"
                                      transform="translate(-596.762 -721.987)"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-miterlimit="10"
                                      stroke-width="1.25"
                                    />
                                    <path
                                      id="Path_1210"
                                      data-name="Path 1210"
                                      d="M596.762,781.5l3.794-2.412,3.794,2.412"
                                      transform="translate(-596.762 -774.224)"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-miterlimit="10"
                                      stroke-width="1.25"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div class="ml-4">
                            <div
                              class="font-semibold text-tertiary-300 text-xl"
                            >
                              Lindsay Walton
                            </div>
                            <div
                              class="
                                font-light
                                text-sm text-opacity-50 text-tertiary-300
                              "
                            >
                              lindsay.walton@example.com
                            </div>
                          </div>
                          <div class="pl-5">
                            <span
                              class="pl-5 text-secondary-500 text-sm font-light"
                              >last login 31days ago</span
                            >
                          </div>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      >
                        <div class="flex items-center space-x-2">
                          <div class="bg-tertiary-600 rounded-full px-4 py-1">
                            <span class="text-xl text-white font-semibold"
                              >Company Admin</span
                            >
                          </div>
                          <button><AddIcon /></button>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                          pr-10
                          rounded-r-full
                        "
                      >
                        <div class="flex items-center space-x-4">
                          <button class="flex items-center space-x-2">
                            <RestIcon />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Reset Password</span
                            >
                          </button>
                          <button
                            class="
                              flex
                              items-center
                              space-x-2
                              bg-tertiary-700
                              px-4
                              py-1
                              rounded-full
                            "
                          >
                            <IconTrash />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Delete</span
                            >
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="w-full rounded-full bg-white">
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          pl-4
                          pr-3
                          text-sm
                          font-medium
                          text-gray-900
                          sm:pl-6
                          md:pl-0
                          rounded-l-full
                        "
                      >
                        <div class="flex items-center pl-4">
                          <div class="h-10 w-10 flex-shrink-0 relative">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                            <div class="absolute -bottom-2 -right-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                              >
                                <g
                                  id="Group_943"
                                  data-name="Group 943"
                                  transform="translate(-448.84 -376.84)"
                                >
                                  <circle
                                    id="download"
                                    cx="9"
                                    cy="9"
                                    r="9"
                                    transform="translate(448.84 376.84)"
                                    fill="#65b8ff"
                                  />
                                  <g
                                    id="Group_940"
                                    data-name="Group 940"
                                    transform="translate(454.045 383.84)"
                                  >
                                    <path
                                      id="Path_1208"
                                      data-name="Path 1208"
                                      d="M596.762,672.161l3.794-2.412,3.794,2.412"
                                      transform="translate(-596.762 -669.749)"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-miterlimit="10"
                                      stroke-width="1.25"
                                    />
                                    <path
                                      id="Path_1209"
                                      data-name="Path 1209"
                                      d="M596.762,726.829l3.794-2.412,3.794,2.412"
                                      transform="translate(-596.762 -721.987)"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-miterlimit="10"
                                      stroke-width="1.25"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div class="ml-4">
                            <div
                              class="font-semibold text-tertiary-300 text-xl"
                            >
                              Siglinde Malaysia
                            </div>
                            <div
                              class="
                                font-light
                                text-sm text-opacity-50 text-tertiary-300
                              "
                            >
                              sigi@herbert-systems.de
                            </div>
                          </div>
                          <div class="pl-5">
                            <span
                              class="pl-5 text-secondary-500 text-sm font-light"
                            ></span>
                          </div>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      >
                        <div class="flex items-center space-x-2">
                          <div class="bg-[#534D41] rounded-full px-4 py-1">
                            <span class="text-xl text-white font-semibold"
                              >Admin</span
                            >
                          </div>
                          <button><AddIcon /></button>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                          pr-10
                          rounded-r-full
                        "
                      >
                        <div class="flex items-center space-x-4">
                          <button class="flex items-center space-x-2">
                            <RestIcon />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Reset Password</span
                            >
                          </button>
                          <button
                            class="
                              flex
                              items-center
                              space-x-2
                              bg-tertiary-700
                              px-4
                              py-1
                              rounded-full
                            "
                          >
                            <IconTrash />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Delete</span
                            >
                          </button>
                        </div>
                      </td>
                    </tr>

                     <tr class="w-full rounded-full bg-white">
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          pl-4
                          pr-3
                          text-sm
                          font-medium
                          text-gray-900
                          sm:pl-6
                          md:pl-0
                          rounded-l-full
                        "
                      >
                        <div class="flex items-center pl-4">
                          <div class="h-10 w-10 flex-shrink-0 relative">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                           
                          </div>
                          <div class="ml-4">
                            <div
                              class="font-semibold text-tertiary-300 text-xl"
                            >
                              Siglinde Malaysia
                            </div>
                            <div
                              class="
                                font-light
                                text-sm text-opacity-50 text-tertiary-300
                              "
                            >
                              sigi@herbert-systems.de
                            </div>
                          </div>
                          <div class="pl-5">
                            <span
                              class="pl-5 text-secondary-500 text-sm font-light"
                            ></span>
                          </div>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      >
                        <div class="flex items-center space-x-2">
                          <div class="bg-[#F7CCA3] rounded-full px-4 py-1">
                            <span class="text-xl text-white font-semibold"
                              >Author</span
                            >
                          </div>
                          <button><AddIcon /></button>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                          pr-10
                          rounded-r-full
                        "
                      >
                        <div class="flex items-center space-x-4">
                          <button class="flex items-center space-x-2">
                            <RestIcon />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Reset Password</span
                            >
                          </button>
                          <button
                            class="
                              flex
                              items-center
                              space-x-2
                              bg-tertiary-700
                              px-4
                              py-1
                              rounded-full
                            "
                          >
                            <IconTrash />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Delete</span
                            >
                          </button>
                        </div>
                      </td>
                    </tr>

                      <tr class="w-full rounded-full bg-white">
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          pl-4
                          pr-3
                          text-sm
                          font-medium
                          text-gray-900
                          sm:pl-6
                          md:pl-0
                          rounded-l-full
                        "
                      >
                        <div class="flex items-center pl-4">
                          <div class="h-10 w-10 flex-shrink-0 relative">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                           
                          </div>
                          <div class="ml-4">
                            <div
                              class="font-semibold text-tertiary-300 text-xl"
                            >
                              Siglinde Malaysia
                            </div>
                            <div
                              class="
                                font-light
                                text-sm text-opacity-50 text-tertiary-300
                              "
                            >
                              sigi@herbert-systems.de
                            </div>
                          </div>
                          <div class="pl-5">
                            <span
                              class="pl-5 text-secondary-500 text-sm font-light"
                            ></span>
                          </div>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      >
                        <div class="flex items-center space-x-2">
                          <div class="bg-[#75F0AE] rounded-full px-4 py-1">
                            <span class="text-xl text-white font-semibold"
                              >Model Artist</span
                            >
                          </div>
                           <div class="bg-[#75A0F0] rounded-full px-4 py-1">
                            <span class="text-xl text-white font-semibold"
                              >Texture Artist</span
                            >
                          </div>
                          <button><AddIcon /></button>
                        </div>
                      </td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                        "
                      ></td>
                      <td
                        class="
                          whitespace-nowrap
                          py-4
                          px-3
                          text-sm text-gray-500
                          pr-10
                          rounded-r-full
                        "
                      >
                        <div class="flex items-center space-x-4">
                          <button class="flex items-center space-x-2">
                            <RestIcon />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Reset Password</span
                            >
                          </button>
                          <button
                            class="
                              flex
                              items-center
                              space-x-2
                              bg-tertiary-700
                              px-4
                              py-1
                              rounded-full
                            "
                          >
                            <IconTrash />
                            <span
                              class="
                                text-xl
                                font-light
                                text-opacity-50 text-tertiary-300
                              "
                              >Delete</span
                            >
                          </button>
                        </div>
                      </td>
                    </tr>

                    <!-- More people... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AddIcon from "../components/icons/AddIcon.vue";
import RestIcon from "../components/icons/RestIcon.vue";
import IconTrash from "../components/icons/IconTrash.vue";
export default {
  components: {
    AddIcon,
    RestIcon,
    IconTrash,
  },
};
</script>



<style>
.spacing-table {
  
  
  border-collapse: separate;
  border-spacing: 0 15px; /* this is the ultimate fix */
}

</style>