export const site = {
  name: 'Karya Agung Interior',
  tagline: 'Interior Design & Build untuk Rumah yang Lebih Rapi',
  url: 'https://karyaagunginterior.com',

  whatsappNumber: '6281331874471',
  whatsappDisplay: '0813-3187-4471',
  whatsappMessage:
    'Halo Karya Agung Interior, saya ingin konsultasi untuk pengerjaan interior. Saya ingin kirim ukuran ruangan dan referensi desain.',

  instagram: '@karyaagung_interior',
  email: 'hello@karyaagunginterior.com',

  areas: [ 'Tangerang Selatan',  'BSD', 'Serpong', 'Jakarta', 'Surabaya', 'Sidoarjo', ],
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;