import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class GoalViewComponent extends Component {
  @service router;

  @action
  async removeGoal(goal) {
    await goal.destroyRecord();
    this.router.transitionTo("/goals");
  }
}
