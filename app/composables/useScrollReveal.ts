// export function useScrollReveal() {
//   onMounted(() => {
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             e.target.classList.add('visible');
//             io.unobserve(e.target);
//           }
//         });
//       },
//       { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
//     );

//     document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
//   });
// }

export function useScrollReveal() {
  let io: IntersectionObserver | null = null;

  function initObserver() {
    if (io) io.disconnect();

    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => io?.observe(el));
  }

  onMounted(() => initObserver());
  onUnmounted(() => io?.disconnect());

  const route = useRoute();
  watch(
    () => route.fullPath,
    () => {
      nextTick(() => initObserver());
    },
  );
}
