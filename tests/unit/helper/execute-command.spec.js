import executeCommand from '@/helper/executeCommand';

describe('executeCommand', () => {
    it('executes the given command for bold', () => {
        document.execCommand = jest.fn();
        executeCommand('bold');
        expect(document.execCommand).toHaveBeenCalledWith('bold');
    });
    it('executes the given command for italic', () => {
        document.execCommand = jest.fn();
        executeCommand('italic');
        expect(document.execCommand).toHaveBeenCalledWith('italic');
    });
    it('executes the given command for strikeThrough', () => {
        document.execCommand = jest.fn();
        executeCommand('strikeThrough');
        expect(document.execCommand).toHaveBeenCalledWith('strikeThrough');
    });
    it('executes the given command for underline', () => {
        document.execCommand = jest.fn();
        executeCommand('underline');
        expect(document.execCommand).toHaveBeenCalledWith('underline');
    });
    it('executes the given command for undo', () => {
        document.execCommand = jest.fn();
        executeCommand('undo');
        expect(document.execCommand).toHaveBeenCalledWith('undo');
    });
    it('executes the given command for undo', () => {
        document.execCommand = jest.fn();
        executeCommand('undo');
        expect(document.execCommand).toHaveBeenCalledWith('undo');
    });
    it('executes the given command for redo', () => {
        document.execCommand = jest.fn();
        executeCommand('redo');
        expect(document.execCommand).toHaveBeenCalledWith('redo');
    });
});
