<template>
  <div class="border-2 flex px-4 text-white items-center py-3 rounded-lg">
    <img class="w-6" src="@theme/assets/images/search.svg" alt="" />
    <SearchBox />
  </div>
</template>
  <script>
import SearchBox from "@SearchBox";
export default {
  components: { SearchBox },
};
</script>
  
  <style>
@media (min-width: 1024px) {
  .search-box input {
    display: flex !important;
  }
}

.search-box {
  width: 100%;
}

.search-box input {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-style: solid;
  border: none !important;
  width: 100%;
  font-weight: 600;
  display: "none";
  font-size: 1.125rem;
  line-height: 1.75rem;
  background: transparent;
}
</style>
  