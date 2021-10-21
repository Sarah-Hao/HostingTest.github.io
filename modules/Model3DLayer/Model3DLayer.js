// Author : Sarah-Hao
// -------------------------Layered 3D Model class-----------------------------
// Properties : parent, layers, newWidth, LayerTranslateZBase[optional], animationDelayBase[optional]
// EXAMPLE DATA
// {
//     newWidth: 500,
//     backgroundColor: 'rgb(49, 49, 49)',
//     observer: pageObserver,
//     parent : 
//     {
//         src: './src/img/serato/seratoStudio.png',
//         width: 9574,
//         height: 5984,
//         left: -100,
//         top: 0,
//         transform: 'rotateX(-20deg) rotateY(-30deg)',
//     },
//     layers : 
//     {
//         window : 
//         {
//             src: './src/img/serato/window.png',
//             width: 4272,
//             height: 3499,
//             left: 51,
//             top: 270,
//             translateZ: 10
//         },
//         deckMix : 
//         {
//             src: './src/img/serato/deckMix.png',
//             width: 372,
//             height: 3491,
//             left: 4361,
//             top: 266,
//             translateZ: 10
//         }
//     }
// }

class Model3DLayer {

    constructor(parent, layers, newWidth, LayerTranslateZBase = 0, animationDelayBase = 1, id = 'Model3Dlayer', backgroundColor = 'rgb(49, 49, 49)') {
        this.parent = parent;
        this.layers = layers;
        this.parentDOM = null;
        this.layerDOMs = {};
        this.newWidth = newWidth;
        this.newHeight = this.parent.height / this.parent.width * this.newWidth;
        this.layerTranslateZBase = layerTranslateZBase;
        this.animationDelayBase = animationDelayBase;
        this.id = id;
        this.backgroundColor = backgroundColor;


        // Create parent DOM (main image)
        const dom = document.createElement("div");
        dom.classList.add('parent');
        dom.id = id;
        dom.style.backgroundImage = 'url(' + this.parent.src + ')';
        dom.style.width = this.calcWidth(this.parent.width);
        dom.style.height = this.calcHeight(this.parent.height);
        dom.style.left = this.calcLeft(this.parent.left);
        dom.style.top = this.calcTop(this.parent.top);
        dom.style.transform = this.parent.transform;
        dom.style.backgroundColor = this.backgroundColor;

        this.parentDom = dom;

        // Create back side DOM
        const backDOM = document.createElement("div");
        backDOM.classList.add('back');
        this.parentDom.append(backDOM);


        // Create layer DOMs
        Object.keys(this.layers).forEach((key, i) => {
            const layer = layers[key];
            const dom = document.createElement("div");
            dom.classList.add('layer');
            dom.id = this.id + '_' + key.toString();
            dom.style.backgroundImage = 'url(' + layer.src + ')';
            dom.style.width = this.calcWidth(layer.width);
            dom.style.height = this.calcHeight(layer.height);
            dom.style.left = this.calcLeft(layer.left);
            dom.style.top = this.calcTop(layer.top);
            dom.style.transform = this.calcTranslateZ(layer.translateZ);
            dom.style.animationDelay = this.calcAnimationDelay(i);

            // [Issue] Model glitch
            // Add a back side for each layer
            //
            // const layerBack = document.createElement("div");
            // layerBack.classList.add('back');
            // dom.append(layerBack);

            this.layerDOMs.key = dom;
            this.parentDom.append(dom);
        });


    }

    getModelDOM() {
        return this.parentDom;
    }
    getLayerDOM(key) {
        return this.layerDOMs[key];
    }

    static startAnimation(modelDOM, parentAnimation = 'parentAnimation', layerAnimation = 'layerAnimation') {
        modelDOM.classList.add(parentAnimation);
        modelDOM.querySelectorAll('.layer').forEach((layer) => {
            layer.classList.add(layerAnimation);
        });
    }

    static stopAnimation(modelDOM, parentAnimation = 'parentAnimation', layerAnimation = 'layerAnimation') {
        modelDOM.classList.remove(parentAnimation);
        modelDOM.querySelectorAll('.layer').forEach((layer) => {
            layer.classList.remove(layerAnimation);
        });
    }


    calcWidth(width) {
        return (this.newWidth / this.parent.width * width).toString() + 'px';
    }

    calcHeight(height) {
        return (this.newHeight / this.parent.height * height).toString() + 'px';
    }

    calcLeft(left) {
        return (this.newWidth / this.parent.width * left).toString() + 'px';
    }

    calcTop(top) {
        return (this.newHeight / this.parent.height * top).toString() + 'px';
    }

    calcTranslateZ(z) {
        return 'translateZ(' + (z + this.layerTranslateZBase + 11).toString() + 'px)';
    }

    calcAnimationDelay(i) {
        return (i + 1) * this.animationDelayBase.toString() + 's';
    }

}




