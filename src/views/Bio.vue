<template>
  <Fragment>
    <div class="container">
      <div class="my-bio">
        <div>This is my story</div>
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <img class="bo-rd" alt="my story" src="/images/wo-story.jpg" />

        <Author :yourName="this.fullName" type="name" />
        <Author :yourName="this.projectDetail" type="projectName" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
        <div class="friend-name">User: {{ nameUpperCase }}</div>
      </div>

      <!-- <input
        type="text"
        :value="name"
        @change="updateName($event.target.value)"
      /> -->
    </div>
    <div class="control-panel-one top-pad">
      <button v-on:click="clickMe">Click Me!</button>
    </div>
    <div class="control-panel-three top-pad">
      <!-- <button v-on:click="testUpdateName">Update name!</button> -->
      <!-- <button v-on:click="updateName($tonytubby)">Update name!</button> -->

      <!-- <button @click="updateName($tonytubby)">Update name!</button> -->
      <button @click="testUpdateName">Update name!</button>

    </div>
    <div class="control-panel-two top-pad">
      <button v-on:click="resetName">Reset name</button>
    </div>
  </Fragment>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Mixins } from "vue-property-decorator";

/**vuex */
import { namespace } from "vuex-class";
import ProjectMixin from "@/mixins/project-mixin";
import Author from "@/components/Author.vue"; // @ is an alias to /src
import { Fragment } from "vue-fragment";

const user = namespace("User");

@Component({
  components: {
    Author,
    Fragment,
    ProjectMixin,
  },
})
export default class Bio extends Mixins(ProjectMixin) {
  // export default class Bio extends Vue {
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

  //vuex state management
  @user.State
  public name!: string;

  @user.Getter
  public nameUpperCase!: string;

  @user.Action
  public updateName!: (newName: string) => void;

  //lifecycle hook
  //lifecycle of vuejs that consist of mounted, created, beforeUpdate,
  //like react componentDidMount, componentDidUpdate, componentWillUnmount

  mounted() {
    //debug vuex state
    console.log("state management name : ", this.name);
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

  //mixin - get project details from project desc file
  get projectDetail(): string {
    return this.projName + " " + "Ariya HS";
  }

  //method - method of the class component
  public clickMe(): void {
    const fullNameText = this.fullName;

    if (fullNameText !== "tobey maguire") {
      //set new value
      this.fullName = "tobey maguire";
    }
  }

  public resetName(): void {
    const fullNameText = this.fullName;
    if (fullNameText.length > 0) {
      //set new value
      this.fullName = "";
    }
  }

  public testUpdateName(): void {
    // alert("hello this is a test")
    this.updateName("somethingeieiei");
  }

  public addNumber(num1: number, num2: number): number {
    return num1 + num2;
  }

  // watch anything in this Bio class
  // specific option for deeper detail eg old value
  @Watch("firstName", {
    immediate: true,
    deep: true,
  })
  nameChanged(newVal: string, oldVal: string) {
    // this.fullName = "somethings";
    // console.log("first name changed !!", newVal);
    console.log("new name %s old name %s", newVal, oldVal);
  }
}
</script>
