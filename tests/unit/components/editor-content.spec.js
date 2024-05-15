import {mount} from '@vue/test-utils';
import EditorContent from '@/components/EditorContent.vue';



describe('EditorContent', () => {
    it('renders the component with the correct height', () => {
        const height = 700;
        const wrapper = mount(EditorContent, {
            props: { height }
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('#body').attributes('style')).toContain(`height: ${height}px`);
        expect(wrapper.find('#editor').attributes('style')).toContain(`min-height: ${height}px`);
    });
    it('emits handleActivity event when text is selected', async () => {
        const wrapper = mount(EditorContent)
        const fontStyle = 'normal';
        const fontWeight = '400';
        const fontSize = '16px';
        const textDecoration = 'none';
        wrapper.vm.$emit('handleActivity', {
            fontStyle,
            fontWeight,
            fontSize,
            textDecoration
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('handleActivity')).toBeTruthy()
    });
});
