import { mount } from '@vue/test-utils'
import ToolBar from "@/components/ToolBar.vue";

describe('ToolBar', () => {
    it('renders all buttons with correct props', () => {
        const props = {
            isBold: true,
            isItalic: false,
            isUnderlined: true,
            isStrikedThrough: false,
            isHeading: true,
            showColorPicker: false,
            showLinkForm: true,
        };
        const wrapper = mount(ToolBar, {
            props,
        });

        expect(wrapper.findComponent({name: 'BoldButton'}).props('isActive')).toBe(props.isBold);
        expect(wrapper.findComponent({name: 'ItalicButton'}).props('isActive')).toBe(props.isItalic);
        expect(wrapper.findComponent({name: 'UnderlineButton'}).props('isActive')).toBe(props.isUnderlined);
        expect(wrapper.findComponent({name: 'StrikeButton'}).props('isActive')).toBe(props.isStrikedThrough);
        expect(wrapper.findComponent({name: 'ParagraphSizeButton'}).props('isActive')).toBe(props.isHeading);
        expect(wrapper.findComponent({name: 'AlignLeftButton'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'AlignCenterButton'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'AlignRightButton'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'FormatListNumbersButton'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'FormatPointsButton'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'ColorTextButton'}).props('isActive')).toBe(props.showColorPicker);
        expect(wrapper.findComponent({name: 'AddURLbutton'}).props('isActive')).toBe(props.showLinkForm);
        expect(wrapper.findComponent({name: 'UndoButton'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'RedoButton'}).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'UploadImageButton'}).exists()).toBe(true);
    });
});
