export default function addEventsWithMutationObserver(funct, className) {
  const observer = new MutationObserver(call);
  observer.observe(document.querySelector(".img__main"), {
    attributes: false,
    childList: true,
    subtree: false,
  });

  function call() {
    document.querySelectorAll(className).forEach((e) => {
      e.addEventListener("click", funct, true);
    });
  }
}