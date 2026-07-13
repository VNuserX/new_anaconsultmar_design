// config.js
//const BASE = '/new_anaconsultmar_design';
const BASE = ''; //for local

window.SITE_CONFIG = {
  base: BASE,
  company: {
    name: 'ANAConsultmar',
    logoPrefix: 'ANA',
    logoHighlight: 'Consultmar',
  },
  contact: {
    email: 'info@anaconsultmar.com',
    phone: '+371 26545239',
    address: '31 Cēsu Street, k-3, Nr.32-8, Riga, Latvia, LV-1012',
  },
  social: {
    facebook: 'https://www.facebook.com/anaconsultmar',
  },
  copyright: {
    year: 2026,
    autoYear: true,
  },
  paths: {
    header: BASE + '/components/header.html',
    footer: BASE + '/components/footer.html',
  }
};
