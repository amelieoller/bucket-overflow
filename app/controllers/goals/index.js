import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class GoalsIndexController extends Controller {
  newTitle;

  @action
  addGoal() {
    this.store
      .createRecord("goal", {
        title: this.newTitle,
        publishedAt: new Date(),
      })
      .save();

    this.set("newTitle", "");
  }
}
