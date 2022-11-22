const isHTMLElement = (element: Element): element is HTMLElement => {
  return "id" in element;
};

export default isHTMLElement;
