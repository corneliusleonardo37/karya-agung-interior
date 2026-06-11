export const site = {
  name: 'Karya Agung Interior',
  legalName: 'PT Karya Agung Jayabersama',
  tagline: 'Spesialis Kitchen Set dan Kabinet Custom',
  url: 'https://karyaagunginterior.com',

  whatsappNumber: '6281331874471',
  whatsappDisplay: '0813-3187-4471',
  whatsappMessage:
    'Halo Karya Agung Interior, saya ingin konsultasi untuk pembuatan kitchen set/kabinet custom. Saya ingin kirim foto area, ukuran kasar, lokasi proyek, dan referensi desain.',

  instagram: '@karyaagung_interior',
  email: 'hello@karyaagunginterior.com',

  areas: [ 'Tangerang Selatan',  'BSD', 'Serpong', 'Jakarta', 'Surabaya', 'Sidoarjo', ],
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
