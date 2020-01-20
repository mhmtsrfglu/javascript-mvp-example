const root = $("#root");
const counterModel = new model();
const counterView = new view({container: root});
const counterPresenter = new presenter(counterView, counterModel);

counterPresenter.render();