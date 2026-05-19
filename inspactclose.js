
(function () {

    // Disable Right Click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Disable Shortcuts
    document.onkeydown = function (e) {

        // F12
        if (e.keyCode == 123) return false;

        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) return false;

        // Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) return false;

        // Ctrl+U
        if (e.ctrlKey && e.keyCode == 85) return false;
    };

    // DevTools Detection
    let checkStatus;

    function detectDevTools() {

        let before = new Date().getTime();

        console.profile();
        console.profileEnd();

        let after = new Date().getTime();

        if (after - before > 100) {

            clearInterval(checkStatus);

            // Redirect
            window.location.replace("about:blank");
        }
    }

    checkStatus = setInterval(detectDevTools, 1000);

})();

 
