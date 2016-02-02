"use strict";

var m = require("mithril"),

    css = require("./checkbox.css");

module.exports = require("./lib/multiple")({
        multiple : true
    },
    
    // View function
    function(ctrl, options) {
        var details = options.details;
        
        return (details.children || []).map(function(opt) {
            return m("label", { class : css.checkbox },
                m("input", {
                    // attrs
                    type    : "checkbox",
                    name    : details.name,
                    value   : opt.value,
                    checked : opt.selected,

                    // events
                    onchange : m.withAttr("checked", function(state) {
                        ctrl.value(options, opt.key, state && opt.value);
                    })
                }),
                " " + opt.name
            );
        });
    }
);
