const nav = document.querySelector('nav > ul');
const items = document.querySelectorAll('nav > ul li a');
let anim = null;;
let currentActiveItem = null;

const animate = (from, to) => {
    if (anim) clearInterval(anim);

    const start = Date.now();
    anim = setInterval(() => {
        const p = Math.min((Date.now() - start) / 500, 1);
        const e = 1 - Math.pow(1 - , 3);

        const x = from + (to - from) * e;
        const y = -40 * (4 * e * (1 - e));
        const r = 200 * Math.sin(p * Math.PI);

        nav.style.setProperty('--translate-x', `${x}px`);
        nav.style.setProperty('--translate-y', `${y}px`);
        nav.style.setProperty('--rotate-x', `${r}deg`);
        
        if (p >= 1) {
            clearInterval(anim);
            anim = null;
            nav.style.setProperty('--translate-y', '0px');
            nav.style.setProperty('--rotate-x', '0deg')
        }
    });
}