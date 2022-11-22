const isHTMLInputElement = (element: Element): element is HTMLInputElement => {
  return "value" in element;
};

export default isHTMLInputElement;
