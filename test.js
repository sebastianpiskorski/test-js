var timeoutId;

var blurHandler = function(event) {
    console.log('Removed ID ' + timeoutId);
    clearTimeout(timeoutId);
};

var focusHandler = function(event) {
    timeoutId = setTimeout(function(){
        Piwik.getAsyncTracker().trackRequest('ping=1');
        window.removeEventListener('focus', focusHandler);
        window.removeEventListener('blur', blurHandler);
        console.log('Request sent, removed handlers');
    }, 10000);
    console.log('Set timeout with ID ' + timeoutId);
};

if (document.hasFocus()) {
    timeoutId = setTimeout(function(){
        Piwik.getAsyncTracker().trackRequest('ping=1')
        window.removeEventListener('focus', focusHandler);
        window.removeEventListener('blur', blurHandler);
        console.log('Request sent, removed handlers');
    }, 10000);
    console.log('Set timeout with ID ' + timeoutId);
}

window.addEventListener('blur', blurHandler, false);
window.addEventListener('focus', focusHandler, false);
