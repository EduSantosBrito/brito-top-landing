const onEnterViewport = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const isEntryVisible =
      entry.target.getAttribute("data-in-viewport") === "true";
    if (!isEntryVisible && entry.isIntersecting) {
      entry.target.setAttribute("data-in-viewport", "true");
    }
  });
};

const observer = new IntersectionObserver(onEnterViewport);

export default observer;
