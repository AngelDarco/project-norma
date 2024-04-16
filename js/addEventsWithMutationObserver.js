export default function addEventsWithMutationObserver(funct, className, container) {
  function call() {
    document.querySelectorAll(className).forEach((e) => {
      e.addEventListener('click', funct, true);
    });
  }

  const observer = new MutationObserver(call);
  if (container) {
    observer.observe(
      container,
      {
        attributes: false,
        childList: true,
        subtree: false,
      },
    );
  }
}
