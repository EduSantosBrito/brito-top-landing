const isHTMLElement = (element: Element): element is HTMLElement => {
  return "addEventListener" in element;
};

export default isHTMLElement;
