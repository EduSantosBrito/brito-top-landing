const pushToDataLayer = <T>(event: string, data: T) => {
  const { dataLayer } = window as Window &
    typeof globalThis & { dataLayer: any };

  dataLayer?.push({ event, data });
};

export default pushToDataLayer;
