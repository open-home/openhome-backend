export const Commons = {

  openhomeCloud: {
    service: 'https://us-central1-home-cloud-services.cloudfunctions.net',
    endpoints: {
      config: '/config',
      thermostat: '/thermostat'
    }
  },
  strings: {
    empty: '',
    dash: ' - ',
    qmark: '?',
    space: ' ',
    sqo: '[',
    sqc: ']',
    perc: '%',
    cr: '\n',
    zero: '0'
  },
  contentTypes: {
    textHtml: 'text/html',
    xUrlEncoded: 'application/x-www-form-urlencoded',
    applicationJson: 'application/json'
  }
};
