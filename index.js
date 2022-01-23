// Author : Sarah-Hao
//
// REQUIRE
//     - 'modules/Constructor/Constructor.js'
//     - 'modules/Constructor/Constructor.css'
//     - 'modules/Model3DLayer/Model3DLayer.js'
//     - 'modules/Model3DLayer/Model3DLayer.css'
//
// TODO
//     - separate sidebar data
//     - build music player class
//     - load music page data
//     - build other player class
//     - load other page data
const layout = document.querySelector('.layout');
layout.style.display = 'none';
// -------- Observer for activating animation ---------------------------------
let screenSmall = window.matchMedia('(max-width: 769px)').matches;
const observerOption = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
};
const pageObserver = new IntersectionObserver(
    entries =>
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Model3DLayer.startAnimation(entry.target);
            } else {
                Model3DLayer.stopAnimation(entry.target);
            }
        }),
    observerOption
);

// ------------------------ Data ----------------------------------
const projects = [
    {
        id: 'golf',
        constructor: constructProject, // import from 'Module/Constructor/Constructor.js'
        title: 'BP Golf Academy',
        subtitle: 'UI & Frontend developer',
        state: 'ended 08/2021 - 01/2022',
        description: "BP Golf Academy is an ambitious golf teaching institution based in New Zealand. In early 2021, the owner foresaw the opportunity in online education and honored me to initiate his project.</br> </br>I mocked up the UI in Figma, and we ironed out the details in about a month. Then, I worked with 3 other developers and delivered a <em><a href='/src/documents/RhysLetter.pdf' style='color: var(--text);'>responsive multi-language website</a></em> with <em>student portal </em>, plus a simple-to-use <em>teacher panel </em>. </br></br> <a href='/src/documents/RhysLetter.pdf' style='color: var(--text);'>Client reference letter</a>",
        tags:
            [
                { name: 'Figma', bgcolor:'var(--figma)', icon: 'akar-icons:figma-fill' },
                { name: 'React', bgcolor:'var(--react)', icon: 'akar-icons:react-fill' },
                { name: 'JS', bgcolor:'var(--js)', icon: 'akar-icons:javascript-fill' },
                { name: 'CSS', bgcolor:'var(--css)', icon: 'akar-icons:css-fill' },
                { name: 'HTML', bgcolor:'var(--html)', icon: 'akar-icons:html-fill' },
                { name: 'Github', bgcolor:'var(--github)', icon: 'akar-icons:github-fill' },
            ],
        model:
        {
            newWidth: (screenSmall) ? 180 : 400,
            backgroundColor: '#0c2e6e',
            observer: pageObserver,
            parent:
            {
                src: './src/img/BPGolf/BPGolf1.png',
                width: 1640,
                height: 996,
                left: 250,
                top: 0,
                transform: 'rotateX(-20deg) rotateY(-30deg)',
            },
            layers:
            {
                Home: {
                    src: './src/img/BPGolf/BPGolf2.png',
                    width: 1640,
                    height: 996,
                    left: 0,
                    top: 0,
                    translateZ: 20
                },
                Blog: {
                    src: './src/img/BPGolf/BPGolf3.png',
                    width: 1640,
                    height: 996,
                    left: 0,
                    top: 0,
                    translateZ: 40
                },
                Development: {
                    src: './src/img/BPGolf/BPGolf4.png',
                    width: 1640,
                    height: 996,
                    left: 0,
                    top: 0,
                    translateZ: 60
                },
                Video: {
                    src: './src/img/BPGolf/BPGolf5.png',
                    width: 1640,
                    height: 996,
                    left: 0,
                    top: 0,
                    translateZ: 80
                },
                Modules: {
                    src: './src/img/BPGolf/BPGolf6.png',
                    width: 1640,
                    height: 996,
                    left: 0,
                    top: 0,
                    translateZ: 100
                },
            },
        },
    },
    {
        id: 'merger',
        constructor: constructProject, // import from 'Module/Constructor/Constructor.js'
        title: 'Serato Studio Merger',
        subtitle: 'Personal project',
        state: 'paused 01/2021 - ',
        description: "After finishing my internship at Serato, I continued to use their product for my music production. Then it was in late 2019, I had this idea of a <em><a href='https://sarah-hao.github.io/SeratoStudioMerger/index.html' style='color: var(--text);'>web merger to help musicians quickly improvise</a></em>.</br></br>Suppose you are a Serato Studio user and have tones of projects in hand. This site iteratively searches through .ssp files and, lets you replace deck sources (or MIDI notes) in batches from one project to another.</br></br>Due to the limitation of vanilla JS and bad practice, I decide to pause the project and, rewrite them with React sometimes in the future.",
        tags:
            [
                { name: 'vanilla JS', bgcolor:'var(--js)', icon: 'akar-icons:javascript-fill' },
                { name: 'CSS', bgcolor:'var(--css)', icon: 'akar-icons:css-fill' },
                { name: 'HTML', bgcolor:'var(--html)', icon: 'akar-icons:html-fill' },
                { name: 'Github', bgcolor:'var(--github)', icon: 'akar-icons:github-fill' },
            ],
        model:
        {
            newWidth: (screenSmall) ? 200 : 500,
            backgroundColor: '#000000',
            observer: pageObserver,
            parent:
            {
                src: './src/img/merger/SeratoMerger.png',
                width: 1440,
                height: 900,
                left: -50,
                top: 0,
                transform: 'rotateX(-20deg) rotateY(-30deg)',
            },
            layers:
            {
                Home: {
                    src: './src/img/merger/ReplaceDecks.png',
                    width: 1440,
                    height: 900,
                    left: 0,
                    top: 0,
                    translateZ: 20
                },
            },
        },
    },
    {
        id: 'serato',
        constructor: constructProject, // import from 'Module/Constructor/Constructor.js'
        title: 'Serato',
        subtitle: 'Junior software engineer',
        state: 'ended 11/2019 - 2/2020',
        description: "<em><a href='https://serato.com/' style='color: var(--text);'>Serato</a></em> is one of the leading DJ software companies. Before I started my third year in university, I had the luck to attend a three-month internship with them.</br> </br>My role is mainly to help with the investigation, implementation and testing of the core product from within a scrum team. I didn't know anything before I came in, my team took me with great patience. It was where I first glanced at actual IT production: CI/CD, blacklogs, scrum board, sprint meeting... where I grew, learned, and applied as I went.",
        tags:
            [
                { name: 'C++', bgcolor:'var(--cplusplus)', icon: 'bx:bxl-c-plus-plus' },
                { name: 'Qt', bgcolor:'var(--qt)', icon: 'file-icons:qt' },
                { name: 'Jira', bgcolor:'var(--jira)', icon: 'fa-brands:jira' },
            ],
        model:
        {
            newWidth: (screenSmall) ? 200 : 500,
            backgroundColor: 'rgb(49, 49, 49)',
            observer: pageObserver,
            parent:
            {
                src: './src/img/serato/seratoStudio.png',
                width: 9574,
                height: 5984,
                left: -100,
                top: 0,
                transform: 'rotateX(-20deg) rotateY(-30deg)',
            },
            layers:
            {
                window: {
                    src: './src/img/serato/window.png',
                    width: 4272,
                    height: 3499,
                    left: 51,
                    top: 270,
                    translateZ: 10
                },
                deckMix: {
                    src: './src/img/serato/deckMix.png',
                    width: 372,
                    height: 3491,
                    left: 4361,
                    top: 266,
                    translateZ: 10
                },
                keyMix: {
                    src: './src/img/serato/keyMix.png',
                    width: 372,
                    height: 3493,
                    left: 4840,
                    top: 263,
                    translateZ: 10
                },
                piano: {
                    src: './src/img/serato/piano.png',
                    width: 4250,
                    height: 3492,
                    left: 5264,
                    top: 266,
                    translateZ: 10
                },
                keyFx: {
                    src: './src/img/serato/keyFx.png',
                    width: 4681,
                    height: 322,
                    left: 52,
                    top: 3808,
                    translateZ: 10
                },
                deckFx: {
                    src: './src/img/serato/deckFx.png',
                    width: 4681,
                    height: 322,
                    left: 4840,
                    top: 3808,
                    translateZ: 10
                },
                songview: {
                    src: './src/img/serato/songview.png',
                    width: 8990,
                    height: 1536,
                    left: 531,
                    top: 4235,
                    translateZ: 11
                },
                library: {
                    src: './src/img/serato/library.png',
                    width: 372,
                    height: 1534,
                    left: 53,
                    top: 4237,
                    translateZ: 10
                },
            },
        },
    },
];

const songs = [
    {
        constructor: constructSong, // import from 'Module/Constructor/Constructor.js'
        id: 'OVER',
        title: 'OVER',
        src: "https://open.spotify.com/embed/track/4moFQ7GpTsBZddVLVJw9Gk?utm_source=generator",
        tags:
            [
                { name: 'Serato studio', bgcolor:'#5D5FEFAA', icon: 'emojione-monotone:letter-s' },
                { name: 'Splice', bgcolor:'#2F80EDAA', icon: 'oi:audio-spectrum' },
                { name: 'Iphone', bgcolor:'#EB5757AA', icon: 'bi:mic-fill' },
                { name: 'AI mix', bgcolor:'#EF5DA8AA', icon: 'radix-icons:mixer-vertical'},
            ],

    },
    {
        constructor: constructSong, // import from 'Module/Constructor/Constructor.js'
        id: 'MONEY',
        title: 'MONEY',
        src: "https://open.spotify.com/embed/track/2JkL8Av2IgbESlOKaw7bqU?utm_source=generator",
        tags:
            [
                { name: 'Serato studio', bgcolor: '#5D5FEFAA', icon: 'emojione-monotone:letter-s' },
                { name: 'Splice', bgcolor: '#2F80EDAA', icon: 'oi:audio-spectrum' },
                { name: 'Iphone', bgcolor: '#EB5757AA', icon: 'bi:mic-fill' },
                { name: 'Manual mix', bgcolor: '#F2C94CAA', icon: 'radix-icons:mixer-vertical'},
                { name: 'AI mix', bgcolor: '#EF5DA8AA', icon: 'radix-icons:mixer-vertical'},
            ],

    },

    {
        constructor: constructSong, // import from 'Module/Constructor/Constructor.js'
        id: 'IVE BEEN HIGH',
        title: 'IVE BEEN HIGH',
        src: "https://open.spotify.com/embed/track/3KxQcona5g78VFdkOnk4eb?utm_source=generator",
        tags:
            [
                { name: 'Logic pro X', bgcolor: 'black', icon: 'clarity:cd-dvd-solid'},
                { name: 'Splice', bgcolor: '#2F80EDAA', icon: 'oi:audio-spectrum' },
                { name: 'Yeti mic', bgcolor: '#219653AA', icon: 'bi:mic-fill' },
                { name: 'Manual mix', bgcolor: '#F2C94CAA', icon: 'radix-icons:mixer-vertical'},
            ],

    },
];

const others = [
    {
        id: 'summberLab',
        constructor: constructOther, // import from 'Module/Constructor/Constructor.js'
        title: 'Summber Lab',
        subtitle: 'Overall winner team',
        state: 'ended 01/2021 - 02/2021',
        description: "The University of Auckland designs Summer Lab to ignite the entrepreneur within students. </br></br>Our team went through <em>user research, rapid prototyping</em>, market analysis, financial projection and a final pitch to investors. At the end, we won the overall prize with a proposed<a href='http://craccum.co.nz/news/reporting/sustainable-hygiene-start-up-scores-first-place-in-summer-lab-programme/' style='color: var(--text);'> <em>sustainable cosmetic packaging startup</em></a>.",
        tags:[],
        model:
            {
                newWidth: (screenSmall) ? 200 : 500,
                backgroundColor: '#000000',
                observer: pageObserver,
                parent:
                {
                    src: './src/img/SummberLab/SummerLab.png',
                    width: 1280,
                    height: '720',
                    left: -50,
                    top: 0,
                    transform: 'rotateX(0deg) rotateY(0deg)',
                },
                layers : {},
            },
    },
];

const pages = [
    {
        btn: document.querySelector('#codeBtn'),
        dom: document.querySelector('#code'),
        data: projects,
    },
    {
        btn: document.querySelector('#musicBtn'),
        dom: document.querySelector('#music'),
        data: songs,
    },
    {
        btn: document.querySelector('#otherBtn'),
        dom: document.querySelector('#other'),
        data: others,
    },
];
// -----------------------------------------------------------------


//  --------------- Load and switch pages -------------------------
// Load page data
pages.forEach((page, i) => {
    if (page.data !== null && page.constructor !== null) {
        page.data.forEach((section, i) => {
            page.dom.append(section.constructor(section, i));
        });
    }
});

// Switch pages
let pageIndex = null;
const setPage = (index) => {
    if (index >= pages.length) {
        alert('page index out of range');
        return;
    }
    pages.forEach((page, i) => {
        if (index === i) {
            page.btn.classList.add('active');
            page.dom.style.display = 'flex';
        } else {
            page.btn.classList.remove('active');
            page.dom.style.display = 'none';
        }
    });
    pageIndex = index;
    return;
};
pages.forEach((page, i) => page.btn.addEventListener('click', function () { setPage(i) }));
setPage(0);

// ---------------------------------------------------------------------------


// --------------- Sidebar -----------------------------------------
const sidebar = document.querySelector('.sidebar_scrollable');
const sidebar_Btn = document.querySelector('.sidebar_Btn');
const myImage = document.querySelector('#me');

let sidebar_opened = true;
const closeSidebar = () => {
    sidebar.style.width = "0px";
    sidebar_opened = false;
}
const openSidebar = () => {
    sidebar.style.width = "270px";
    sidebar_opened = true;
}
closeSidebar();
sidebar_Btn.addEventListener("click", () => sidebar_opened ? closeSidebar() : openSidebar());

// Close sidebar on small screen, otherwise open
// (screenSmall === true) ? closeSidebar() : openSidebar();

// used for elements inside sidebar
function redirect(url) {
    window.open(url);
}
// ---------------------------------------------------------------



// ------------------- Load Timeline ------------------------------
const timeline_container = document.querySelector('.timeline_scrollable');
const timeline = document.querySelector('.timeline');
// --------------------------------------------------------------




// ------------------- Load Animation ------------------------------
const loading = document.querySelector('.loading');

window.onload = () => {
    loading.remove();
    layout.style.display = 'flex';
    // Close sidebar 10s after page load
    setTimeout(() => {
        openSidebar();
    }, 2000);
};






// Slide and change my image 4s after page load
// setTimeout(() => {
//     myImage.classList = ['slide_out'];
//     setTimeout(()=> {
//         myImage.src = './src/img/sarah2.png';
//         myImage.classList = ['slide_in'];
//     }, 2000);
// }, 4000);