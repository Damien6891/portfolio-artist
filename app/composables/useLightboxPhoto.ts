const isPhotoOpen = ref(false);
const currentIndex = ref(0);
const photos = ref<any[]>([]);

export function useLightboxPhoto() {
  const openPhoto = (items: any[], index: number) => {
    photos.value = items;
    currentIndex.value = index;
    isPhotoOpen.value = true;
    document.body.style.overflow = 'hidden';
  };

  const closePhoto = () => {
    isPhotoOpen.value = false;
    document.body.style.overflow = '';
  };

  const prev = () => {
    currentIndex.value =
      (currentIndex.value - 1 + photos.value.length) % photos.value.length;
  };

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % photos.value.length;
  };

  const currentPhoto = computed(() =>
    photos.value.length ? photos.value[currentIndex.value] : null,
  );

  return {
    isPhotoOpen,
    currentPhoto,
    currentIndex,
    photos,
    openPhoto,
    closePhoto,
    prev,
    next,
  };
}
