export const site = {
  name: 'Karya Agung Interior',
  legalName: 'PT Karya Agung Jayabersama',
  tagline: 'Spesialis Kitchen Set dan Kabinet Custom',
  url: 'https://karyaagunginterior.com',

  whatsappNumber: '6281331874471',
  whatsappDisplay: '0813-3187-4471',
  whatsappUrl:
  'https://wa.me/6281331874471?text=Halo%20Karya%20Agung%20Interior,%20saya%20ingin%20konsultasi%20untuk%20pembuatan%20kitchen%20set%2Fkabinet%20custom.',
  
  instagram: '@karyaagung_interior',
  instagramUrl: 'https://www.instagram.com/karyaagung_interior',
  email: 'hello@karyaagunginterior.com',

  areas: [ 'Tangerang Selatan, BSD, Serpong, Jakarta, Surabaya, Sidoarjo', ],
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
