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
        subtitle: 'UI designer, frontend developer',
        state: 'ended 08/2021 - 01/2022',
        description: 'My role is mostly responsible for translating customer requirements into technical site concepts for bidding and initial planning purposes.</br>I also contribute to the front-end development. Provide ongoing maintenance and patching on website interface to maintain viability after launch.',
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
        description: 'If you are a Serato Studio user and have tones of projects in hand. <a href="https://sarah-hao.github.io/SeratoStudioMerger/index.html" style="color: var(--text);">This site</a> might be fun to look at. It lets you replace deck sources and MIDI notes in batches, from one project to another. </br>Bear in mind, both projects have to come from the same local space.',
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
        subtitle: 'Junior software engineer intern',
        state: 'ended 11/2019 - 2/2020',
        description: 'My role was mainly to help with the investigation, implementation and testing of the core product from within a small scrum team. Serato was kind enough to let me try out diffrent tasks and even involve me in the actual development process. </br> </br>During the 3 months internship, I had investigated issue and submited a solution, learnt to implement UI elements using Qt framework, participated in the sprint planning and review. At the end, one of the feature our team developed was released successfully.',
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
        state: 'ongoing 01/2021 - now',
        description: 'xxxxxxxxxxx</br>xxxx</br>xxxxxxxx',
        grallery: [],
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
setPage(2);

// ---------------------------------------------------------------------------


// --------------- Sidebar -----------------------------------------
const sidebar = document.querySelector('.sidebar_scrollable');
const sidebar_Btn = document.querySelector('.sidebar_Btn');
let sidebar_opened = false;
const closeSidebar = () => {
    sidebar.style.width = "0px";
    sidebar_opened = false;
}
const openSidebar = () => {
    sidebar.style.width = "300px";
    sidebar_opened = true;
}

sidebar_Btn.addEventListener("click", () => sidebar_opened ? closeSidebar() : openSidebar());

// Close sidebar on small screen, otherwise open
(screenSmall === true) ? closeSidebar() : openSidebar();

// used for elements inside sidebar
function redirect(url) {
    window.open(url);
}
// ---------------------------------------------------------------



// ------------------- Load Timeline------------------------------
const timeline_container = document.querySelector('.timeline_scrollable');
const timeline = document.querySelector('.timeline');
    // --------------------------------------------------------------

