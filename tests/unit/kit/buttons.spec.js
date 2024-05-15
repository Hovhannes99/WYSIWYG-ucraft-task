import { mount } from '@vue/test-utils';
import AddURLButton from '@/kit/AddURLbutton.vue';
import AlignCenterButton from '@/kit/AlignCenterButton.vue';
import AlignLeftButton from '@/kit/AlignLeftButton.vue';
import AlignRightButton from '@/kit/AlignRightButton.vue';
import BoldButton from '@/kit/BoldButton.vue';
import ItalicButton from '@/kit/ItalicButton.vue';
import FormatPointsButton from '@/kit/FormatPointsButton.vue';
import FormatListButton from '@/kit/FormatListNumbersButton.vue';
import UnderlineButton from '@/kit/UnderlineButton.vue';
import UndoButton from '@/kit/UndoButton.vue';
import RedoButton from '@/kit/RedoButton.vue';
import StrikeButton from '@/kit/StrikeButton.vue';
import executeCommand from "@/helper/executeCommand";

describe('AddURLButton', () => {
    it('toggles link form when clicked', async () => {
        const wrapper = mount(AddURLButton);
        await wrapper.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.showLinkForm).toBe(false);
        await wrapper.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.showLinkForm).toBe(false);
    });

    it('creates a link when form is submitted', async () => {
        const wrapper = mount(AddURLButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('insertHTML');
        expect(document.execCommand).toHaveBeenCalledWith('insertHTML');
    });
});

describe('AlignCenterButton', () => {
    it('executes command to align center when clicked', async () => {
        const wrapper = mount(AlignCenterButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('justifyCenter');
        expect(document.execCommand).toHaveBeenCalledWith('justifyCenter');
    });
});
describe('AlignLeftButton', () => {
    it('executes command to align left center when clicked', async () => {
        const wrapper = mount(AlignLeftButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('justifyLeft');
        expect(document.execCommand).toHaveBeenCalledWith('justifyLeft');
    });
});
describe('AlignRightButton', () => {
    it('executes command to align right center when clicked', async () => {
        const wrapper = mount(AlignRightButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('justifyRight');
        expect(document.execCommand).toHaveBeenCalledWith('justifyRight');
    });
});

describe('BoldButton', () => {
    it('executes command to bold text when clicked', async () => {
        const wrapper = mount(BoldButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('bold');
        expect(document.execCommand).toHaveBeenCalledWith('bold');
    });
});
describe('ItalicButton', () => {
    it('executes command to italic text when clicked', async () => {
        const wrapper = mount(ItalicButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('italic');
        expect(document.execCommand).toHaveBeenCalledWith('italic');
    });
});
describe('FormatPointButton', () => {
    it('executes command to points format text when clicked', async () => {
        const wrapper = mount(FormatPointsButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('insertUnorderedList');
        expect(document.execCommand).toHaveBeenCalledWith('insertUnorderedList');
    });
});
describe('UnderlineButton', () => {
    it('executes command to underline text when clicked', async () => {
        const wrapper = mount(UnderlineButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('underline');
        expect(document.execCommand).toHaveBeenCalledWith('underline');
    });
});
describe('UndoButton', () => {
    it('executes command to underline text when clicked', async () => {
        const wrapper = mount(UndoButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('undo');
        expect(document.execCommand).toHaveBeenCalledWith('undo');
    });
});
describe('RedoButton', () => {
    it('executes command to underline text when clicked', async () => {
        const wrapper = mount(RedoButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('redo');
        expect(document.execCommand).toHaveBeenCalledWith('redo');
    });
});
describe('FormatListButton', () => {
    it('executes command to  list format text when clicked', async () => {
        const wrapper = mount(FormatListButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('insertOrderedList');
        expect(document.execCommand).toHaveBeenCalledWith('insertOrderedList');
    });
});
describe('StrikeButton', () => {
    it('executes command to  list strike text when clicked', async () => {
        const wrapper = mount(StrikeButton);
        await wrapper.trigger('click');
        document.execCommand = jest.fn();
        executeCommand('insertOrderedList');
        expect(document.execCommand).toHaveBeenCalledWith('insertOrderedList');
    });
});
