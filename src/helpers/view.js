export class ViewHelper {
    constructor(appInstance) {
        this.App = appInstance;
    }

    if(condition, callback, error) {
        if (condition) {
            if (typeof callback === 'function') {
                return callback();
            }
            return callback;
        }
        if (typeof error === 'undefined') {
            return '';
        }
        if (typeof error === 'function') {
            return error();
        }
        return error;
    }

    forEach(scope, callback) {
        return Array.prototype.map.call(scope, callback).join('');
    }

    translate(str, ...args) {
        if (this.App.i18n) {
            return this.App.i18n.translate(str, ...args);
        }
        return str;
    }

    dump(obj, pretty = true) {
        if (obj) {
            let content = JSON.stringify(obj, null, pretty ? 4 : 0)
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            return `<pre>${content}</pre>`;
        }
        return '<undefined>';
    }

    log(...args) {
        // eslint-disable-next-line
        console.log(...args);
        return '';
    }
}
