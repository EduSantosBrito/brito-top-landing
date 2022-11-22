const isHTMLFormElement = (element: Element): element is HTMLFormElement => {
  return "elements" in element;
};

export default isHTMLFormElement;
