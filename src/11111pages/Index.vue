<template>
  <Layout>
    <!-- <router-view /> -->
  </Layout>
</template>

<script>
import { Pager } from "gridsome";
export default {
  name: "HomePage",
  data() {
    return {
      info: {},
    };
  },
  components: {
    Pager,
  },
  metaInfo: {
    title: "主页",
  },
};
</script>
