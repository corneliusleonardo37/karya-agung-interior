export const site = {
  name: 'Verd',
  tagline: 'Design & Build Interior Transparan',
  url: 'https://verd.id',

  whatsappNumber: '6281234567890',
  whatsappDisplay: '0812-3456-7890',
  whatsappMessage:
    'Halo Verd, saya ingin konsultasi design & build interior.',

  instagram: '@verd.studio',
  email: 'hello@verd.id',

  areas: ['BSD', 'Serpong', 'Tangerang Selatan', 'Jabodetabek'],
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;