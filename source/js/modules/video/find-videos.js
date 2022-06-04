import {Video} from './video';

const findVideos = () => {
  const elVideos = document.querySelectorAll('[data-video]');

  for (let i = 0; i < elVideos.length; i++) {
    const video = new Video(elVideos[i]);

    video.setupVideo();
  }
};

export {findVideos};
