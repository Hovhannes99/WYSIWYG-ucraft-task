import { ImgElement, DivElement, ButtonElement } from '@/helper/ImageContainerFactory';


describe('ImgElement', () => {
    it('creates an img element with correct attributes', () => {
        const imageUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iODQuMDAwMDAwcHQiIGhlaWdodD0iMTU2LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgODQuMDAwMDAwIDE1Ni4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDE1Ni4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0wIDc4MCBjMCAtNTEzIDMgLTc4MCAxMCAtNzgwIDcgMCAxMCAyNjcgMTAgNzgwIDAgNTEzIC0zIDc4MCAtMTAKNzgwIC03IDAgLTEwIC0yNjcgLTEwIC03ODB6Ii8+CjxwYXRoIGQ9Ik0zMDQgMTE2OCBjLTI3IC00NiAtNTQgLTkyIC02MCAtMTAzIC0zMSAtNTUgLTU2IC05OCAtOTMgLTE2MCAtMjMKLTM3IC00MSAtNzAgLTQxIC03NCAwIC0zIC05IC0xNyAtMjAgLTMxIC0yNiAtMzQgLTI2IC05NiAyIC0xNDAgMjIgLTM2IDQyCi03MiA3OSAtMTM3IDYyIC0xMTIgMTcwIC0xNTQgMjY5IC0xMDMgMzQgMTcgOTAgNzUgOTAgOTMgMCAzIDIzIDQzIDUyIDg5IDY5CjExMCA3MCAxNDQgMTAgMjQyIC0yMyAzNyAtNDIgNzEgLTQyIDc1IDAgNCAtNSAxMiAtMTIgMTkgLTEyIDEyIC0xNSA3IC0xMTEKLTE1OCAtMTEgLTE5IC0yNiAtNDcgLTM0IC02MSAtNyAtMTUgLTIwIC0zMyAtMjkgLTQwIC0xMyAtMTEgLTE5IC05IC0zNSAxMQotMjQgMzIgLTIzIDQ5IDEgODAgMTEgMTQgMjAgMjkgMjAgMzMgMCA1IDggMjEgMTkgMzUgMTAgMTUgMjggNDQgNDAgNjUgMTEgMjAKMzAgNTMgNDEgNzIgMjQgNDIgMjUgNjMgNiA5OSBsLTEzIDI2IC0yNyAtNDAgYy0xNCAtMjIgLTI2IC00MSAtMjYgLTQ0IDAgLTIKLTE4IC0zNCAtNDEgLTcxIC0yMiAtMzcgLTQ5IC04MyAtNjAgLTEwMSAtMTAgLTE5IC0yOCAtNTAgLTM5IC02OSAtMTEgLTIwCi0yMCAtNDAgLTIwIC00NSAwIC02IDE4IC00MCA0MCAtNzYgMjIgLTM2IDQwIC03MCA0MCAtNzQgMCAtMTYgMzEgLTMyIDUyIC0yNgoxNSAzIDM3IDMwIDYzIDc3IDY3IDEyMSA3NCAxMzIgOTAgMTQ4IDE0IDE1IDE4IDE0IDM1IC05IDExIC0xNCAyMCAtMzAgMjAKLTM3IDAgLTYgLTIyIC00OCAtNTAgLTkzIC0yNyAtNDUgLTUwIC04NSAtNTAgLTg5IDAgLTE3IC01NyAtNjkgLTg4IC03OSAtNTYKLTE5IC0xMDcgMTEgLTE1MSA5MSAtMjIgMzkgLTQ2IDgxIC03NyAxMzQgLTIxIDM3IC0yMSAzOCA1OSAxNzIgMjIgMzUgNDcgNzkKNTggOTcgMzcgNjYgNTcgMTAwIDg4IDE1MiAzNiA2MiAzNyA2MiAxMiAxMDIgbC0xOSAzMSAtNDggLTgzeiIvPgo8L2c+Cjwvc3ZnPgo=';
        const generateId = new Date().getTime().toString();
        const imgElement = new ImgElement(imageUrl, generateId);
        expect(imgElement.getElement()).toBeInstanceOf(HTMLImageElement);
        expect(imgElement.getElement().src).toBe(imageUrl);
        expect(imgElement.getElement().style.width).toBe('100%');
        expect(imgElement.getElement().style.height).toBe('100%');
        expect(imgElement.getElement().style.objectFit).toBe('contain');
        expect(imgElement.getElement().id).toBe(generateId);
    });
});

describe('DivElement', () => {
    it('creates a div element with correct attributes', () => {
        const generateId =  new Date().getTime().toString();
        const divElement = new DivElement(generateId);
        expect(divElement.getElement()).toBeInstanceOf(HTMLDivElement);
        expect(divElement.getElement().id).toBe(`img_wrapper ${generateId}`);
        expect(divElement.getElement().style.maxWidth).toBe('450px');
        expect(divElement.getElement().style.width).toBe('100%');
        expect(divElement.getElement().style.position).toBe('relative');
        expect(divElement.getElement().style.display).toBe('inlineFlex');
        expect(divElement.getElement().style.resize).toBe('auto');
        expect(divElement.getElement().style.overflow).toBe('hidden');
    });
});

describe('ButtonElement', () => {
    it('creates a button element with correct attributes', () => {
        const type = 'remove';
        const generateId =  new Date().getTime().toString();
        const buttonElement = new ButtonElement(type, generateId);
        expect(buttonElement.getElement()).toBeInstanceOf(HTMLButtonElement);
        expect(buttonElement.getElement().id).toBe(`${type}-${generateId}`);
        expect(buttonElement.getElement().textContent).toBe(type === 'remove' ? 'Remove' : 'Rotate Img');
        expect(buttonElement.getElement().style.position).toBe('absolute');
        expect(buttonElement.getElement().style.cursor).toBe('pointer');
        expect(buttonElement.getElement().style.top).toBe(type === 'remove' ? '0px' : '0px');
        expect(buttonElement.getElement().style.right).toBe(type === 'remove' ? '0px' : '80px');
    });
});
