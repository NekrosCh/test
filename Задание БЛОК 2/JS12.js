"use strict"

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign= textAlign;
    }
    createNewDiv(texting) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `${texting}`;
        newDiv.style.cssText = `
            height : ${this.height}px;
            width : ${this.width}px;
            background : ${this.bg};
            font-size : ${this.fontSize}px;
            text-align : ${this.textAlign};`;

        document.body.append(newDiv);
    }

};

const divine = new Options (200, 600, 'red', 30, 'center');


console.log(divine);
divine.createNewDiv('Создан новый Див');