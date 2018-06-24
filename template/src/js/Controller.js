var Controller = eg.Class.extend(eg.Component, {
    construct: function () {
        console.log("eg.Class construct()");
        console.log("$: ", $);
    }
});

module.exports = Controller;