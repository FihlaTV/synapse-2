function getAnimationDuration(element, prop = 'Animation') {
    let computed = window.getComputedStyle(element);
    if (computed) {
        let duration = computed[`${prop.toLowerCase()}Duration`] ||
            computed[`webkit${prop}Duration`] ||
            computed[`moz${prop}Duration`] ||
            computed[`ms${prop}Duration`] ||
            computed[`o${prop}Duration`];
        if (duration) {
            return parseFloat(duration);
        }
    }
    return 0;
}

function getTransitionDuration(element) {
    return getAnimationDuration(element, 'Transition');
}

export class PageView {
    constructor() {
        let element = document.createElement('section');
        element.className = 'page-view';
        Object.defineProperty(element, 'hide', {
            value: () =>
                new Promise((resolve) => {
                    element.setAttribute('hidden', '');
                    element.setAttribute('data-hidden-animation', '');
                    let duration = getAnimationDuration(element) ||
                        getTransitionDuration(element) || 0;
                    setTimeout(() => {
                        element.removeAttribute('data-hidden-animation');
                        resolve();
                    }, duration * 1000);
                }),
        });
        Object.defineProperty(element, 'show', {
            value: () =>
                new Promise((resolve) => {
                    element.removeAttribute('hidden');
                    element.setAttribute('data-hidden-animation', '');
                    let duration = getAnimationDuration(element) ||
                        getTransitionDuration(element) || 0;
                    setTimeout(() => {
                        element.removeAttribute('data-hidden-animation');
                        resolve();
                    }, duration * 1000);
                }),
        });
        return element;
    }
}
