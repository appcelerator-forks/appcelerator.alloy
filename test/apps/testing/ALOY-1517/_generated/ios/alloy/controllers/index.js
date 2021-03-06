function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createLabel(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000"
        });
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            color: "red"
        });
        Alloy.deepExtend(true, o, {
            text: "Hello, World",
            id: "__alloyId1"
        });
        return o;
    }());
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.index = Ti.UI.iOS.createNavigationWindow(function() {
        var o = {};
        Alloy.isTablet && Alloy.deepExtend(true, o, {
            backgroundColor: "lime"
        });
        Alloy.deepExtend(true, o, {
            backgroundColor: "#fff",
            fullscreen: false,
            exitOnClose: true,
            window: $.__views.__alloyId0,
            id: "index"
        });
        return o;
    }());
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;