export default class ImageContainerFactory {
    static create(imageUrl) {
        return new ImageContainer(imageUrl);
    }
}

class ImgElement {
    constructor(imageUrl, generateId) {
        this.img = document.createElement('img');
        this.img.src = imageUrl;
        this.img.style.width = '100%';
        this.img.style.height = '100%';
        this.img.style.objectFit = 'contain';
        this.img.id = `${generateId}`;
    }

    getElement() {
        return this.img;
    }
}

class DivElement {
    constructor(generateId) {
        this.div = document.createElement('div');
        this.div.setAttribute('id', `img_wrapper ${generateId}`);
        this.div.style.maxWidth = '450px';
        this.div.style.width = '100%';
        this.div.style.position = 'relative';
        this.div.style.display = 'inlineFlex';
        this.div.style.resize = 'auto';
        this.div.style.overflow = 'hidden';
    }

    getElement() {
        return this.div;
    }
}

class ButtonElement {
    constructor(type, generateId) {
        this.button = document.createElement('button');
        this.button.setAttribute('id', `${type}-${generateId}`);
        this.button.textContent = type === 'remove' ? 'Remove' : 'Rotate Img';
        this.button.style.position = 'absolute';
        this.button.style.cursor = 'pointer';
        this.button.style.top = type === 'remove' ? '0' : '0';
        this.button.style.right = type === 'remove' ? '0' : '80px';
    }

    getElement() {
        return this.button;
    }
}

class ImageContainer {
    constructor(imageUrl) {
        this.imageUrl = imageUrl;
        this.generateId = new Date().getTime();
        this.createImageContainer();
    }

    createImageContainer() {
        const imgElement = new ImgElement(this.imageUrl, this.generateId);
        const divElement = new DivElement(this.generateId);
        const removeButton = new ButtonElement('remove', this.generateId);
        const rotateButton = new ButtonElement('rotate', this.generateId);

        this.div = divElement.getElement();
        this.img = imgElement.getElement();
        this.buttonRemove = removeButton.getElement();
        this.buttonRotate = rotateButton.getElement();

        this.setupListeners();
        this.appendElements();

        document.getElementById('editor').appendChild(this.div);
    }

    setupListeners() {
        this.div.addEventListener('mouseover', () => {
            this.div.style.border = '2px solid blue';
        });

        this.div.addEventListener('mouseout', () => {
            this.div.style.border = 'none';
        });

        this.buttonRemove.addEventListener('click', () => {
            this.div.remove();
        });

        let counterDeg = 0;
        this.buttonRotate.addEventListener('click', () => {
            if (counterDeg <= 270 && counterDeg !== 0) {
                counterDeg *= 2;
            } else {
                counterDeg = 90;
            }
            this.img.style.transform = `rotate(${counterDeg}deg)`;
        });
    }

    appendElements() {
        this.div.appendChild(this.img);
        this.div.appendChild(this.buttonRemove);
        this.div.appendChild(this.buttonRotate);
    }
}
