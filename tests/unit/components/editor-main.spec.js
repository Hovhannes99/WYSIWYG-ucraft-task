import { shallowMount } from '@vue/test-utils'
import EditMain from "@/components/EditorMain.vue";

describe('EditMain.vue', () => {
    it('renders the component', () => {
        const wrapper = shallowMount(EditMain, {
            props:{
                height: 700
            }
        });
        expect(wrapper.exists()).toBe(true);
    });
    it('renders the EditorContent component', () => {
        const wrapper = shallowMount(EditMain);
        expect(wrapper.findComponent({ name: 'EditorContent' }).exists()).toBe(true);
    });
    it('passes props correctly to ToolBar component', () => {
        const wrapper = shallowMount(EditMain);
        expect(wrapper.findComponent({ name: 'ToolBar' }).exists()).toBe(true);
        expect(wrapper.findComponent({name: 'ToolBar'}).props()).toEqual({
            isBold: false,
            isItalic: false,
            isUnderlined: false,
            isStrikedThrough: false,
            isHeading: false,
            showLinkForm: false,
            showColorPicker: false,
        });
    });
})
