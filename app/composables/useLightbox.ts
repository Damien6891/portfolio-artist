const isOpen = ref(false);
const videoId = ref('');

export function useLightbox() {
  function openVideo(id: string) {
    videoId.value = id;
    isOpen.value = true;
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    isOpen.value = false;
    document.body.style.overflow = '';
    setTimeout(() => {
      videoId.value = '';
    }, 420);
  }

  return { isOpen, videoId, openVideo, closeVideo };
}
