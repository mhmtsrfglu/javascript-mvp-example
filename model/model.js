function model(config) {

    let _this = this,
        counter = 0;

    _this.increaseCounter = function () {
        counter += 1;
    };

    _this.decreaseCounter = function () {
        if (counter > 0) {
            counter -= 1;
        }
    };

    _this.getCounter = function () {
        return counter;
    }
}
