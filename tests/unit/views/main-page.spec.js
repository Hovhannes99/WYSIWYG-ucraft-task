import { shallowMount } from '@vue/test-utils'
import MainPage from "@/views/MainPage.vue";

describe('MainPage.vue', () => {
    it('renders the component', () => {
        const wrapper = shallowMount(MainPage);
        expect(wrapper.exists()).toBe(true);
    });
    it('renders a heading with the text "Enter your opinion :)"', () => {
        const wrapper = shallowMount(MainPage);
        expect(wrapper.find('h1').text()).toBe('Enter your opinion :)');
    });
    it('renders the EditorMain component', () => {
        const wrapper = shallowMount(MainPage);
        expect(wrapper.findComponent({ name: 'EditorMain' }).exists()).toBe(true);
    });
})
