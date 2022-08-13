/**
 * @author <>
 */

require([], function () {
    let pre = window.document.createElement("pre");
    pre.textContent = "Loaded.";
    window.document.body.appendChild(pre);

    fetch("./README.rst")
        .then(response => response.text())
        .then(text => pre.textContent = text);
});
