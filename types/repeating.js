"use strict";

var m      = require("mithril"),
    assign = require("lodash.assign"),
    
    children = require("./children");

module.exports = {
    view : function(ctrl, options) {
        return m("div",
            "Repeating " + options.details.name + ":",
            m.component(children, {
                details : options.details.children
                // TODO: figure out how refs/data work here
                // ref     : options.ref && options.ref.child
                // data    : options.data
            })
        );
    }
};
