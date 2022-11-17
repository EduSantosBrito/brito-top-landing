const isEventFromKeyboard = (event: Event): event is KeyboardEvent => {
  return "altKey" in event;
};

export default isEventFromKeyboard;
