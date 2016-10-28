var include = {
    js: function (src, append) {
        var elem = document.createElement("script");
        elem.type = "text/javascript";
        elem.src = src;
        append = typeof append !== "undefined" ? append : "head";
        document.querySelector(append).appendChild(elem);
    },
    css: function (src, append) {
        var elem = document.createElement("link");
        elem.type = "text/css";
        elem.rel = "stylesheet";
        elem.href = src;
        append = typeof append !== "undefined" ? append : "head";
        document.querySelector(append).appendChild(elem);
    }
};
