class VFVideo extends VFElement {
    render() {
        const src = this.getAttribute('src');

        if (!src) {
            console.warn('vf-video: falta el atributo "src"');
            return;
        }

        const video = document.createElement('video');
        video.controls = true;
        video.setAttribute('preload', 'metadata');
        video.classList.add('my-3', 'center', 'vf-video');

        const source = document.createElement('source');
        source.src = src;
        source.type = this.getAttribute('type') || 'video/mp4';
        video.appendChild(source);

        processClasses(video, this.getAttribute('classes'));
        processStyles(video, this.getAttribute('styles'));

        this.innerHTML = '';
        this.appendChild(video);
    }
}

customElements.define('vf-video', VFVideo);
