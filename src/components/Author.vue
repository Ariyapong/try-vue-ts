<template>
  <div class="author-text">
    <div class="content" v-if="yourName==='tony'">
      Yes you correct !!
      {{ yourName }}
    </div>

    <h1 v-else>Oh no 😢</h1>

    <!-- <div class="content" v-else="!yourName">
      Can't find any name that you provided...
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Author extends Vue {
  @Prop() private yourName!: string;
  @Prop() private list!: Array<object>;


  
}
</script>
