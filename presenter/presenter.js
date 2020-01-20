function presenter(view,model){
    const _this = this;


    _this.render = function(){
        view.render();
        view.renderCounter(0);

    };

    function init(){
        $(view).on("increaseVal",increaseValue);
        $(view).on("decreaseVal",decreaseVal);
    }

    function increaseValue(){
        model.increaseCounter();
        view.renderCounter(model.getCounter() || 0);
    }

    function decreaseVal(){
        model.decreaseCounter();
        view.renderCounter(model.getCounter() || 0);
    }

    init();
}