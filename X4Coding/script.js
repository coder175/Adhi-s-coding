var check = 1;
document.querySelector('.Menu').addEventListener('click', () => {
    if (check == 1) {
        check++;
        document.querySelectorAll('.navItem').forEach(display => display.classList.add('displayBlock'));
    } else {
        check--;
        document.querySelectorAll('.navItem').forEach(display => display.classList.remove('displayBlock'));
    }
});

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: false,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});

var editor = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: false,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});
var editor = CodeMirror.fromTextArea(document.getElementById("code2"), {
    lineNumbers: false,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});
function run() {
    html_value = editor.getValue();
    doc.open();
    doc.write(html_value);
    doc.close();
}

function html() {
}

function css() {
}

function js() {
}

function result() {

}