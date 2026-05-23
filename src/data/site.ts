export const site = {
  name: 'Karya Agung Interior',
  tagline: 'Interior Design & Build untuk Rumah yang Lebih Rapi',
  url: 'https://karyaagunginterior.com',

  whatsappNumber: '6281234567890',
  whatsappDisplay: '0812-3456-7890',
  whatsappMessage:
    'Halo Karya Agung Interior, saya ingin konsultasi untuk pengerjaan interior. Saya ingin kirim ukuran ruangan dan referensi desain.',

  instagram: '@karyaagunginterior',
  email: 'hello@karyaagunginterior.com',

  areas: ['BSD', 'Serpong', 'Tangerang Selatan', 'Jakarta', 'Jabodetabek'],
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;