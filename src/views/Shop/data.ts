// Products may offer weight variants (1kg / 500gm / 250gm). When `variants`
// is present, the card shows a size selector and `price` is just the default
// (first variant). Products without variants use `price` directly.
export const bundles = [
  {
    title: 'The Ghee Duo',
    price: 'Rs 4,300',
    items: ['Desi Ghee 1kg', 'Desi Ghee ½kg', 'Wood-Churned', 'Grass-Fed'],
    image: '/assets/images/products/ghee/desi-ghee-both.png'
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

export const filters = ['All', 'Ghee', 'Pickles', 'Poultry', 'Spices', 'Honey'];

const g3 = (kg: string, half: string, quarter: string) => [
  { label: '1 kg', price: `Rs ${kg}` },
  { label: '500 gm', price: `Rs ${half}` },
  { label: '250 gm', price: `Rs ${quarter}` }
];

const g4 = (kg: string, half: string, quarter: string, tenth: string) => [
  { label: '1 kg', price: `Rs ${kg}` },
  { label: '500 gm', price: `Rs ${half}` },
  { label: '250 gm', price: `Rs ${quarter}` },
  { label: '100 gm', price: `Rs ${tenth}` }
];

export const shopProducts = [
  // Ghee & Butter
  {
    id: 1,
    name: 'Desi Ghee',
    price: 'Rs 2,800',
    category: 'Ghee',
    image: '/assets/images/products/ghee/desi-ghee-1kg.png',
    tag: 'Bestseller',
    variants: [
      { label: '1 kg', price: 'Rs 2,800' },
      { label: '500 gm', price: 'Rs 1,500' }
    ],
    description: '100% Pure Desi Ghee made from premium buffalo milk using traditional methods.',
    instructions: 'Store in a Cool, Dry Place away from Direct Sunlight. Use a Clean, Dry Spoon to maintain Freshness. Chemicals & Flavour Free.',
    netWeight: '1000g, 500g'
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
    ],
    description: '100% pure white butter made with pure milk fats through the traditional ‘Bilona’ method.',
    instructions: 'Keep in freezer to keep it tasty for long.',
    netWeight: '1000g, 500g'
  },
  // Honey
  {
    id: 28,
    name: 'Pure Sidr Honey',
    price: 'Rs 3,000',
    category: 'Honey',
    image: '/assets/images/products/ghee/sidr-honey.png',
    tag: 'Pure',
    variants: g3('3,000', '1,600', '850'),
    description: 'Pure honey extracted from honey bee hives on trees with 100% original taste. Chemicals & Flavour Free.',
    instructions: 'Do not use wet spoon.',
    netWeight: '1000g, 500g, 250g'
  },
  // Pickles & Chutneys
  {
    id: 3,
    name: 'Mango Boneless Pickle',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/mango-boneless-pickle.png',
    tag: 'Classic',
    variants: g3('850', '425', '250'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 7,
    name: 'Mix Boneless Pickle',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/mix-boneless-achaar.png',
    tag: 'Favorite',
    variants: g3('850', '425', '250'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 4,
    name: 'Garlic Pickle',
    price: 'Rs 950',
    category: 'Pickles',
    image: '/assets/images/products/pickles/garlic-pickle.png',
    tag: 'Zesty',
    variants: g3('950', '475', '250'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 8,
    name: 'Lehsoora Pickle',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/lehsoora-pickle.png',
    tag: 'Seasonal',
    variants: g3('850', '425', '250'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 6,
    name: 'Lemon Pickle',
    price: 'Rs 750',
    category: 'Pickles',
    image: '/assets/images/products/pickles/lemon-pickle.png',
    tag: 'Tangy',
    variants: g3('750', '375', '200'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 5,
    name: 'Green Chili Pickle',
    price: 'Rs 800',
    category: 'Pickles',
    image: '/assets/images/products/pickles/green-chili-pickle.png',
    tag: 'Spicy',
    variants: g3('800', '400', '200'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 26,
    name: 'Bitter Gourd Pickle',
    price: 'Rs 800',
    category: 'Pickles',
    image: '/assets/images/products/pickles/bitter-gourd-pickle.png',
    tag: 'Traditional',
    variants: g3('800', '400', '200'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 27,
    name: 'White Chana Pickle',
    price: 'Rs 750',
    category: 'Pickles',
    image: '/assets/images/products/pickles/white-chana-pickle.png',
    tag: 'Hearty',
    variants: g3('750', '400', '200'),
    description: 'Made with fresh and premium quality ingredients and mustard oil. Vegetables used in it are handled with home care till the end of the making process to your table.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 10,
    name: 'Green Chutney',
    price: 'Rs 800',
    category: 'Pickles',
    image: '/assets/images/products/pickles/green-chutney.png',
    tag: 'Fresh',
    variants: g3('800', '400', '200'),
    description: 'Made with fresh and premium quality ingredients. Vegetables and dry fruits used in them are handled with home care till end in making process to your table. 100% made with white sugar. Chemicals & Flavour Free.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 9,
    name: 'Plum (Aalo Bukhara) Chutney',
    price: 'Rs 1,500',
    category: 'Pickles',
    image: '/assets/images/products/pickles/aalo-bukhara-chutney.png',
    tag: 'Sweet',
    variants: g3('1,500', '750', '400'),
    description: 'Made with fresh and premium quality ingredients. Vegetables and dry fruits used in them are handled with home care till end in making process to your table. 100% made with white sugar. Chemicals & Flavour Free.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  {
    id: 11,
    name: 'Imli Chutney',
    price: 'Rs 850',
    category: 'Pickles',
    image: '/assets/images/products/pickles/imli-sauce.png',
    tag: 'Tangy',
    variants: g3('850', '425', '250'),
    description: 'Made with fresh and premium quality ingredients. Vegetables and dry fruits used in them are handled with home care till end in making process to your table. 100% made with white sugar. Chemicals & Flavour Free.',
    instructions: 'Do not use wet spoon in pickles.',
    netWeight: '1000g, 500g, 250g'
  },
  // Poultry
  {
    id: 12,
    name: 'Desi Chicken (Live, 1kg)',
    price: 'Rs 1,300',
    category: 'Poultry',
    image: '/assets/images/products/poultry/desi-chicken-meat.png',
    tag: 'Free-Range',
    description: 'Our Desi Chickens are farm feed free and grown on natural organic food so the taste and health can meet you in a healthier way. Eggs are also laid by pure desi breeding hens. No compromise on quality & your family health at The Urban Village.',
    netWeight: 'Live chicken weight 1000g'
  },
  {
    id: 13,
    name: 'Desi Chicken Minced (1kg)',
    price: 'Rs 1,400',
    category: 'Poultry',
    image: '/assets/images/products/poultry/desi-chicken-minced.png',
    tag: 'Fresh',
    description: 'Our Desi Chickens are farm feed free and grown on natural organic food so the taste and health can meet you in a healthier way. Eggs are also laid by pure desi breeding hens. No compromise on quality & your family health at The Urban Village.',
    netWeight: 'Live chicken weight 1000g'
  },
  {
    id: 14,
    name: 'Desi Eggs (Dozen)',
    price: 'Rs 800',
    category: 'Poultry',
    image: '/assets/images/products/poultry/desi-eggs.png',
    tag: 'Farm-Fresh',
    description: 'Our Desi Chickens are farm feed free and grown on natural organic food so the taste and health can meet you in a healthier way. Eggs are also laid by pure desi breeding hens. No compromise on quality & your family health at The Urban Village.',
    netWeight: 'Eggs are available in half and a dozen quantity.'
  },
  // Spices
  {
    id: 15,
    name: 'Organic Turmeric Powder',
    price: 'Rs 1,600',
    variants: g4('1,600', '800', '450', '200'),
    category: 'Spices',
    image: '/assets/images/products/spices/turmeric-powder.png',
    tag: 'Organic',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 16,
    name: 'Red Chili Powder',
    price: 'Rs 1,200',
    variants: g4('1,200', '600', '300', '150'),
    category: 'Spices',
    image: '/assets/images/products/spices/red-chili-powder.png',
    tag: 'Hot',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 17,
    name: 'Red Chili Flakes',
    price: 'Rs 1,200',
    variants: g4('1,200', '600', '300', '150'),
    category: 'Spices',
    image: '/assets/images/products/spices/red-chili-flakes.png',
    tag: 'Hot',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 18,
    name: 'Coriander Powder',
    price: 'Rs 1,500',
    variants: g4('1,500', '750', '400', '175'),
    category: 'Spices',
    image: '/assets/images/products/spices/coriander-powder.png',
    tag: 'Ground',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 19,
    name: 'Zeera (Cumin) Powder',
    price: 'Rs 2,300',
    variants: g4('2,300', '1,150', '600', '250'),
    category: 'Spices',
    image: '/assets/images/products/spices/zeera-powder.png',
    tag: 'Aromatic',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 20,
    name: 'Mix Garam Masala Powder',
    price: 'Rs 3,800',
    variants: g4('3,800', '1,900', '1,000', '400'),
    category: 'Spices',
    image: '/assets/images/products/spices/garam-masala-powder.png',
    tag: 'Blend',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 21,
    name: 'Chat Masala',
    price: 'Rs 800',
    variants: g4('800', '400', '200', '150'),
    category: 'Spices',
    image: '/assets/images/products/spices/chat-masala.png',
    tag: 'Tangy',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 22,
    name: 'Black Pepper Powder',
    price: 'Rs 3,200',
    variants: g4('3,200', '1,600', '850', '400'),
    category: 'Spices',
    image: '/assets/images/products/spices/black-pepper-powder.png',
    tag: 'Bold',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 23,
    name: 'Pink Himalayan Salt',
    price: 'Rs 250',
    variants: g4('250', '125', '75', '40'),
    category: 'Spices',
    image: '/assets/images/products/spices/pink-himalayan-salt.png',
    tag: 'Mineral',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  },
  {
    id: 24,
    name: 'White Lahori Salt',
    price: 'Rs 140',
    variants: g4('140', '75', '40', '20'),
    category: 'Spices',
    image: '/assets/images/products/spices/white-lahori-salt.png',
    tag: 'Traditional',
    description: 'Presenting daily use spices to make your kitchen more aromatic and meals more traditional taste. All spices are stone grinded and 100% pure and premium plain ingredients are used avoiding any food colours & chemicals.',
    netWeight: 'from 50g to 1000g'
  }
];
