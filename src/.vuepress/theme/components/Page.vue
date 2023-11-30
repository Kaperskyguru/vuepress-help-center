<template>
  <div class="py-20">
    <section class="pt-20">
      <div class="container max-w-screen-xl mx-auto p-4">
        <!--Search input -->
        <div class="md:max-w-[60%] mx-auto">
          <SearchBar />
        </div>
        <!--End Search input -->
        <Breadcrumb :path="$page.path" />
      </div>
    </section>

    <section class="border-t-gray-800 border-t-2 text-white">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="md:flex mt-8">
          <!-- left-col -->
          <div class="border-r-2 flex-initial w-[20%]">
            <LeftSidebar />
          </div>

          <!-- Right-col -->
          <div class="flex-initial w-[80%] text-white">
            <MainContent />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script>
import SearchBar from "@theme/components/SearchBar.vue";
import LeftSidebar from "@theme/components/LeftSidebar.vue";
import MainContent from "@theme/components/MainContent.vue";
import Breadcrumb from "@theme/components/Breadcrumb.vue";
export default {
  components: {
    SearchBar,
    LeftSidebar,
    MainContent,
    Breadcrumb,
  },
};
</script>
  
  <style>
</style>