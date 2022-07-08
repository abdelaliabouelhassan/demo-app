<template>
  <div class="w-full h-full px-10 py-10">
    <div class="flex flex-col items-start space-y-2">
      <span class="text-2xl font-light text-tertiary-300 text-opacity-75"
        >Awesome Bike,</span
      >
      <div>
        <span class="text-5xl font-bold text-tertiary-300">Gazelle 75“ </span>
        <span class="text-5xl font-light text-tertiary-300"
          >- Insights Overview</span
        >
      </div>
      <div class="w-full py-5">
        <div class="w-full h-px bg-tertiary-200 bg-opacity-10"></div>
      </div>
      <div
        class="
          w-full
          grid grid-cols-1
          lg:grid-cols-3
          space-y-4
          lg:space-y-0
          gap-10
        "
      >
        <AppGraphCard class="col-span-2" />
        <FavoriteConfigurationCard />
      </div>
      <div
        class="
          w-full
          grid grid-cols-1
          lg:grid-cols-3
          space-y-4
          lg:space-y-0
          gap-10
          pt-10
        "
      >
        <MostFavoriteOptionsCard />
        <ViewsGraphCard class="col-span-2" />
      </div>
    </div>
  </div>
</template>


<script>
import AppGraphCard from "../components/cards/AppGraphCard.vue";
import FavoriteConfigurationCard from "../components/cards/FavoriteConfigurationCard.vue";
import MostFavoriteOptionsCard from "../components/cards/MostFavoriteOptionsCard.vue";
import ViewsGraphCard from "../components/cards/ViewsGraphCard.vue";
export default {
  components: {
    AppGraphCard,
    FavoriteConfigurationCard,
    MostFavoriteOptionsCard,
    ViewsGraphCard,
  },
};
</script>