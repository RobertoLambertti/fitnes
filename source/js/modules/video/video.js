export class Video {
  constructor(video) {
    this.video = video;
  }

  parseMediaURL(link) {
    const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;

    const url = link.href;
    const match = url.match(regexp);

    return match[1];
  }

  generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  createIframe(id) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', this.generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
  }

  setupVideo() {
    const link = this.video.querySelector('.video a');
    const button = this.video.querySelector('.video button');
    const id = this.parseMediaURL(link);

    this.video.addEventListener('click', () => {
      const iframe = this.createIframe(id);

      link.remove();
      button.remove();
      this.video.appendChild(iframe);
    });

    link.removeAttribute('href');
    this.video.classList.add('video--enabled');
  }
}

