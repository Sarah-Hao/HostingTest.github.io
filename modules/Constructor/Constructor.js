// Author : Sarah-Hao

function createDiv(className, content) {
    const div = document.createElement('div');
    div.classList.add(className);
    div.innerHTML = content;
    return div;
}

function createTags(className, tags) {
    const container = createDiv(className, null);
    tags.map((t, i) => {
        const tag = createDiv('tag', null);
        const icon = document.createElement('span');
        icon.classList.add('iconify', 'icon-small');
        icon.setAttribute('data-icon', t.icon);
        tag.append(icon);
        tag.append(createDiv('name', t.name));
        tag.style.backgroundColor = t.bgcolor;
        tag.style.color = t.color ? t.color : '#CCCCCC';
        container.append(tag);
    });
    return container;
}

function constructProject(data, i) {
    // construct containers
    const project = createDiv('project', null);
    project.id = data.id;
    const left = createDiv('left', null);
    const right = createDiv('right', null);

    // load title, subtitle, state, description, tags to the left
    left.append(createDiv('title', data.title));
    left.append(createDiv('subtitle', data.subtitle));
    left.append(createDiv('state', data.state));
    left.append(createDiv('description', data.description));
    left.append(createTags('tags', data.tags));

    // load model to the right if specified 
    if (data.model) {
        const model = new Model3DLayer(
            data.model.parent,
            data.model.layers,
            data.model.newWidth,
            layerTranslateZBase = 0,
            animationDelayBase = 0.2,
            id = data.id + '_model',
            backgroundColor = data.model.backgroundColor
        );
        right.append(model.getModelDOM());

        // observe model if observer is specified,
        // this is usually used to activate animation when scroll into view
        (data.model.observer !== null) ? data.model.observer.observe(model.getModelDOM()) : Model3DLayer.startAnimation(model.getModelDOM());
    }

    // load left right container to project
    project.append(left, right);
    return project;
}

function spotifyFrame(src, i) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.frameBorder = '0';
    iframe.style.animationDelay = '0.' + i*2 + 's';
    return iframe;
}
function constructSong(data, i) {
    const song = createDiv('song', null);
    song.append(spotifyFrame(data.src, i));
    song.append(createTags('tags', data.tags)); 
    
    return song;
}


function constructOther(data, i) {
    // construct containers
    const project = createDiv('project', null);
    project.id = data.id;
    const left = createDiv('left', null);
    const right = createDiv('right', null);

    // load title, subtitle, state, description, tags to the left
    left.append(createDiv('title', data.title));
    left.append(createDiv('subtitle', data.subtitle));
    left.append(createDiv('state', data.state));
    left.append(createDiv('description', data.description));
    left.append(createTags('tags', data.tags));

    // load model to the right if specified 
    if (data.model) {
        const model = new Model3DLayer(
            data.model.parent,
            data.model.layers,
            data.model.newWidth,
            layerTranslateZBase = 0,
            animationDelayBase = 0.2,
            id = data.id + '_model',
            backgroundColor = data.model.backgroundColor
        );
        right.append(model.getModelDOM());

        // observe model if observer is specified,
        // this is usually used to activate animation when scroll into view
        (data.model.observer !== null) ? data.model.observer.observe(model.getModelDOM()) : Model3DLayer.startAnimation(model.getModelDOM());
    }

    // load left right container to project
    project.append(left, right);
    return project;
}
