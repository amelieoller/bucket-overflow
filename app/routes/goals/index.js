import Route from "@ember/routing/route";

export default class GoalsIndexRoute extends Route {
  model(params) {
    // return [];
    return this.store.findAll("goal");
  }
}
