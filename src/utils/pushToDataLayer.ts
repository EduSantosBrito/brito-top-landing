const pushToDataLayer = <T>(eventName: string, data: T) => {
  const event = new CustomEvent("trigger-gtag", {
    detail: {
      eventName,
      data,
    },
  });
  document.dispatchEvent(event);
};

export default pushToDataLayer;
