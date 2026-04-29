const interval = 1.5;

function get_randomColor() {
    let val1 = Math.ceil(50 + Math.random() * 200);
    let val2 = Math.ceil(60 + Math.random() * 190);
    let val3 = Math.ceil(60 + Math.random() * 190);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

function get_background(element) {
    element.style.background = 'linear-gradient(45deg, #00fe72e7, #00e1ffeb, #ff17ecf3)';
    element.style.webkitBackgroundClip = "text";
    element.style.webkittextfillcolor = "transparent";
    setInterval(() => {
        const genrated_color1 = get_randomColor();
        const genrated_color2 = get_randomColor();
        const genrated_color3 = get_randomColor();
        let background_color = `linear-gradient(45deg, ${genrated_color1}, ${genrated_color2}, ${genrated_color3}`;
        element.style.background = background_color;
        element.style.webkitBackgroundClip = "text";
        element.style.webkittextfillcolor = "transparent";
    }, interval * 1000);
}

function get_Normal_background(Element) {
    setInterval(() => {
        let genrated_color1 = get_randomColor();
        let genrated_color2 = get_randomColor();
        let genrated_color3 = get_randomColor();
        let background_color = `linear-gradient(${10 + Math.random() * 270}deg, ${genrated_color1}, ${genrated_color2}, ${genrated_color3})`;
        Element.style.background = background_color;
    }, interval * 1000);
}

function get_One_background(Element) {
    setInterval(() => {
        let genrated_color1 = get_randomColor();
        let background_color = genrated_color1;
        Element.style.background = background_color;
    }, interval * 1000);
}
function get_color(Element) {
    setInterval(() => {
        let genrated_color1 = get_randomColor();
        let background_color = genrated_color1;
        Element.style.color = background_color;
    }, interval * 1000);
}