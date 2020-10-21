"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Absolute imports
var react_1 = require("react");
//Relative imports
var Navbar_1 = require("./components/Navbar");
require("./App.css");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("p", null, "In Progress!"),
            react_1.default.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports.default = App;
