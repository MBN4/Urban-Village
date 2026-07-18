// Products may offer weight variants (1kg / 500gm / 250gm). When `variants`
// is present, the card shows a size selector and `price` is just the default
// (first variant). Products without variants use `price` directly.
export const bundles = [
  {
    title: 'The Ghee Duo',
    price: 'Rs 4,300',
    items: ['Desi Ghee 1kg', 'Desi Ghee ½kg', 'Wood-Churned', 'Grass-Fed'],
    image: '/assets/images/products/ghee/desi-ghee-both.jpeg'
  },
  {
    title: 'Achaar Sampler',
    price: 'Call for query',
    items: ['Mango Boneless', 'Garlic Pickle', 'Mix Boneless Achaar', 'Green Chutney'],
    image: '/assets/images/products/pickles/mix-boneless-achaar.png'
  }
];

export const shopHero = {
  title: 'From our kitchen\nto your table',
  subtitle: 'PURE & HANDMADE',
  description: 'Shop our range of wood-churned desi ghee, hand-cut achaar, free-range desi poultry, and stone-ground spices — choose your size and order the amount that suits you.'
};

export const filters = ['All', 'Ghee', 'Pickles', 'Poultry', 'Spices'];

const g3 = (kg: string, half: string, quarter: string) => [
  { label: '1 kg', price: `Rs ${kg}` },
  { label: '500 gm', price: `Rs ${half}` },
  { label: '250 gm', price: `Rs ${quarter}` }
];

export const shopProducts = [
  // Ghee & Butter
  {
    id: 1,
    name: 'Desi Ghee',
    price: 'Rs 2,800',
    category: 'Ghee',
    image: '/assets/images/products/ghee/desi-ghee-1kg.jpeg',
    tag: 'Bestseller',
    variants: [
      { label: '1 kg', price: 'Rs 2,800' },
      { label: '500 gm', price: 'Rs 1,500' }
    ]
  },
  {
    id: 25,
    name: 'White Butter',
    price: 'Rs 2,000',
    category: 'Ghee',
    image: '/assets/images/products/ghee/white-butter.png',
    tag: 'Bilona',
    variants: [
      { label: '1 kg', price: 'Rs 2,000' },
      { label: '500 gm', price: 'Rs 1,000' }
    ]
  },
  // Pickles & Chutneys
  {
    id: 3,
    name: 'Mango Boneless Pickle',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/mango-boneless-pickle.png',
    tag: 'Classic',
    variants: g3('850', '425', '250')
  },
  {
    id: 7,
    name: 'Mix Boneless Pickle',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/mix-boneless-achaar.png',
    tag: 'Favorite',
    variants: g3('850', '425', '250')
  },
  {
    id: 4,
    name: 'Garlic Pickle',
    price: 'Rs 950',
    category: 'Pickles',
    image: '/assets/images/products/pickles/garlic-pickle.png',
    tag: 'Zesty',
    variants: g3('950', '475', '250')
  },
  {
    id: 8,
    name: 'Lehsoora Pickle',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/lehsoora-pickle.png',
    tag: 'Seasonal',
    variants: g3('850', '425', '250')
  },
  {
    id: 6,
    name: 'Lemon Pickle',
    price: 'Rs 750',
    category: 'Pickles',
    image: '/assets/images/products/pickles/lemon-pickle.png',
    tag: 'Tangy',
    variants: g3('750', '375', '200')
  },
  {
    id: 5,
    name: 'Green Chili Pickle',
    price: 'Rs 800',
    category: 'Pickles',
    image: '/assets/images/products/pickles/green-chili-pickle.png',
    tag: 'Spicy',
    variants: g3('800', '400', '200')
  },
  {
    id: 26,
    name: 'Bitter Gourd Pickle',
    price: 'Rs 800',
    category: 'Pickles',
    image: '/assets/images/products/pickles/bitter-gourd-pickle.png',
    tag: 'Traditional',
    variants: g3('800', '400', '200')
  },
  {
    id: 27,
    name: 'White Chana Pickle',
    price: 'Rs 750',
    category: 'Pickles',
    image: '/assets/images/products/pickles/white-chana-pickle.png',
    tag: 'Hearty',
    variants: g3('750', '400', '200')
  },
  {
    id: 10,
    name: 'Green Chutney',
    price: 'Rs 800',
    category: 'Pickles',
    image: '/assets/images/products/pickles/green-chutney.png',
    tag: 'Fresh',
    variants: g3('800', '400', '200')
  },
  {
    id: 9,
    name: 'Plum (Aalo Bukhara) Chutney',
    price: 'Rs 1,500',
    category: 'Pickles',
    image: '/assets/images/products/pickles/aalo-bukhara-chutney.png',
    tag: 'Sweet',
    variants: g3('1,500', '750', '400')
  },
  {
    id: 11,
    name: 'Imli Chutney',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/imli-sauce.png',
    tag: 'Tangy',
    variants: g3('850', '425', '250')
  },
  // Poultry
  {
    id: 12,
    name: 'Desi Chicken (Live, 1kg)',
    price: 'Rs 1,300',
    category: 'Poultry',
    image: '/assets/images/products/poultry/desi-chicken-meat.png',
    tag: 'Free-Range'
  },
  {
    id: 13,
    name: 'Desi Chicken Minced (1kg)',
    price: 'Rs 1,400',
    category: 'Poultry',
    image: '/assets/images/products/poultry/desi-chicken-minced.png',
    tag: 'Fresh'
  },
  {
    id: 14,
    name: 'Desi Eggs (Dozen)',
    price: 'Rs 800',
    category: 'Poultry',
    image: '/assets/images/products/poultry/desi-eggs.png',
    tag: 'Farm-Fresh'
  },
  // Spices
  {
    id: 15,
    name: 'Organic Turmeric Powder',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/turmeric-powder.png',
    tag: 'Organic'
  },
  {
    id: 16,
    name: 'Red Chili Powder',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/red-chili-powder.png',
    tag: 'Hot'
  },
  {
    id: 17,
    name: 'Red Chili Flakes',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/red-chili-flakes.png',
    tag: 'Hot'
  },
  {
    id: 18,
    name: 'Coriander Powder',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/coriander-powder.png',
    tag: 'Ground'
  },
  {
    id: 19,
    name: 'Zeera (Cumin) Powder',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/zeera-powder.png',
    tag: 'Aromatic'
  },
  {
    id: 20,
    name: 'Mix Garam Masala Powder',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/garam-masala-powder.png',
    tag: 'Blend'
  },
  {
    id: 21,
    name: 'Chat Masala',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/chat-masala.png',
    tag: 'Tangy'
  },
  {
    id: 22,
    name: 'Black Pepper Powder',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/black-pepper-powder.png',
    tag: 'Bold'
  },
  {
    id: 23,
    name: 'Pink Himalayan Salt',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/pink-himalayan-salt.png',
    tag: 'Mineral'
  },
  {
    id: 24,
    name: 'White Lahori Salt',
    price: 'Call for query',
    category: 'Spices',
    image: '/assets/images/products/spices/white-lahori-salt.png',
    tag: 'Traditional'
  }
];
