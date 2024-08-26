const button = document.getElementById('copyButton');


async function copyToClipBoard() {
    try {
        let popover = document.getElementById('mypopover');

        await navigator.clipboard.writeText('ALT/SOE/024/1181');

        console.log('copied to clipboard');

        button.textContent = 'Copied'

        button.disabled = true

        popover.showPopover();

        setTimeout(() => {
            button.textContent = 'Copy AltSchool ID to Clipboard'

            button.disabled = false

        }, 1000);


        setTimeout(() => {
            popover.hidePopover()

        }, 3000);


    } catch (error) {
        console.log('error failed to copy ID');

    }
}

button.addEventListener('click', copyToClipBoard);