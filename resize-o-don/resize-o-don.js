// ==UserScript==
// @name         resize-o-don
// @license      DWTFYW
// @namespace    http://pureandapplied.com.au/resizodon
// @version      0.4.2
// @description  resizable columns in mastodon
// @author       stib
// @match        https://mstdn.hw2k.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aus.social
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {var css = [
	"    .columns-area .column{",
    "        resize: horizontal;",
	"        max-width: 100% !important;",
    "        flexShrink: 0;",
	"    }",
    "    .column:last-child {",
    "        resize: horizontal !important;",
    "        flex: 1 1 auto !important;",
	"    }",
    "    .drawer{",
    "        resize: horizontal !important;",
    "    }",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {

	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
            alert(node);
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
