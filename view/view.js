function view(config) {
    const _this = this,
        protectedObject = {};

    _this.render = function () {
        protectedObject.$domObject = $(`<div><div id="counter"></div><button id="inc">Arttır</button><button id="decs">Azalt</button><button id="reset">Sıfırla</button></div>`);
        protectedObject.$increase = $("#inc", protectedObject.$domObject).on("click", handleIncClick);
        protectedObject.$decrease = $("#decs", protectedObject.$domObject).on("click", handleDecsClick);
        protectedObject.$reset = $("#reset", protectedObject.$domObject).on("click", handleResetClick);
        protectedObject.$counterArea = $("#counter", protectedObject.$domObject);

        function handleResetClick() {
            $(_this).trigger("resetVal");
        }

        function handleIncClick() {
            $(_this).trigger("increaseVal");
        }

        function handleDecsClick() {
            $(_this).trigger("decreaseVal");
        }

        config.container.append(protectedObject.$domObject);
    };

    _this.renderCounter = function (val) {
        protectedObject.$counterArea.html(val);
    }


}


