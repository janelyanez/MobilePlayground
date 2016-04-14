
/* JavaScript content from lib/moment/src/lib/utils/hooks.js in folder common */
export { hooks, setHookCallback };

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}
