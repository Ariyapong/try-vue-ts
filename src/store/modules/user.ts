// store/modules/user.ts
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true, name: "test" })
class User extends VuexModule {
  public name = "hello bois";
  public gender = "female";

  @Mutation
  public setName(newName: string): void {
    this.name = newName;
  }

  // public setGender(newGender: string): void {
  //   this.gender = newGender;
  // }

  @Action({ rawError: true })
  public updateName(newName: string): void {
    this.context.commit("setName", newName);
  }

  // public updateGender(newGender: string): void {
  //   this.context.commit("setGender", newGender);
  // }


  get nameUpperCase() {
    return this.name.toUpperCase();
  }

}

export default User;
