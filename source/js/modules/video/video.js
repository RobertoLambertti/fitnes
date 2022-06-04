export class Video {
  constructor(video) {
    this.video = video;
  }

  parseMediaURL(link) {
    let regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;

    let url = link.href;
    let match = url.match(regexp);

    return match[1];
  }

  generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', this.generateURL(id));

    return iframe;
  }

  setupVideo() {
    let link = this.video.querySelector('.video__link');
    let button = this.video.querySelector('.video__button');
    let id = this.parseMediaURL(link);

    this.video.addEventListener('click', () => {
      let iframe = this.createIframe(id);

      link.remove();
      button.remove();
      this.video.appendChild(iframe);
    });

    link.removeAttribute('href');
    this.video.classList.add('video--enabled');
  }
}

