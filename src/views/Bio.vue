<template>
  <Fragment>
    <div class="container">
      <div class="my-bio">
        <div>This is my story</div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <Author yourName="tony" />
        <!-- <Author yourName="tonytubby" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
      </div>
    </div>
    <div class="control-panel">
      <button v-on:click="clickMe">Click Me!</button>
    </div>
  </Fragment>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Author from "@/components/Author.vue"; // @ is an alias to /src
import { Fragment } from "vue-fragment";

@Component({
  components: {
    Author,
    Fragment
  },
})
export default class Bio extends Vue {
  // @Prop({default: 'Tony T. Tubby'}) readonly yourName: string;
  private firstName = "tomas";
  private lastName = "ferguson";
  private baseLink = process.env.BASE_URL;

  private list: Array<object> = [
    {
      name: "Preetish",
      age: "26",
    },
    {
      name: "John",
      age: "30",
    },
    {
      name: "Toby",
      age: "29",
    },
    {
      name: "Samatid",
      age: "25",
    },
  ];

  //lifecycle hook
  mounted() {
    //do something
    console.log("check value => ", this.fullName);

    const something = "toby macquire";
    this.fullName = something;

    console.log("check value => ", this.firstName);
    console.log("check value => ", this.lastName);
    // console.log("set new vlue", );
  }

  //compute
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  set fullName(newValue: string) {
    const names = newValue.split(" ");
    this.firstName = names[0];
    this.lastName = names[names.length - 1];
  }

  //method
  public clickMe(): void {
    console.log("~ ~ ~ clicked ~ ~ ~ ~");
    console.log(this.addNumber(4, 2));
  }
  public addNumber(num1: number, num2: number): number {
    return num1 + num2;
  }
}
</script>
