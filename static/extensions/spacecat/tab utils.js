class TabUtilsExtension {
    getInfo() {
        return {
            id: 'spacecatstabutils',
            name: 'Tab Utils',
            blocks: [
                {
                    opcode: 'openNewTab',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'open new tab with url [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://example.com'
                        }
                    }
                }
            ]
        };
    }

    openNewTab(args) {
        window.open(args.URL, '_blank');
    }
}

Scratch.extensions.register(new TabUtilsExtension());
