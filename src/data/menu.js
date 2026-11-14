// Menu built from every post on @sweetlittlethings_ipoh (12 posts, 21 photos, Nov 2024 – Jan 2025).
// Names come from her captions or from the handwritten price cards visible in her stall photos.
// img: HD cut-out photo in /public/desserts. These are free-licence stock photos from Unsplash
//      (https://unsplash.com/license, commercial use allowed) chosen to match each dessert,
//      background removed. Sources are listed in PHOTO_SOURCES below. Her own cut-outs are kept
//      in /assets-original/her-instagram-cutouts if you want to switch back.
// post: the Instagram post the photo came from
// price: number in RM, or null when she never posted a price (renders as "Ask us")

export const BUSINESS = {
  name: 'Sweet Little Things',
  legal: 'Sweet Little Things Dessert (003759148-X)',
  tagline: 'Page of Tempting Desserts',
  location: 'Dataran Ipoh (in front of Oldtown)',
  city: 'Ipoh, Perak',
  whatsapp: '60174780432',
  instagram: 'https://www.instagram.com/sweetlittlethings_ipoh',
  tiktok: 'https://www.tiktok.com/@sweetlittlethings_ipoh',
  status: 'Closed temporarily, follow us for the comeback!',
};

const IG = (id) => `https://www.instagram.com/p/${id}/`;

export const CATEGORIES = [
  { id: 'all', label: 'All treats' },
  { id: 'brownies', label: 'Brownies' },
  { id: 'cheesecake', label: 'Burnt Cheesecake' },
  { id: 'pastry', label: 'Pastries' },
  { id: 'tarts', label: 'Tarts' },
  { id: 'cream', label: 'Puffs & Pavlova' },
];

export const MENU = [
  // ── Brownies ──
  { id: 'kedut', name: 'Brownies Kedut', cat: 'brownies', price: null, tag: 'Signature', post: IG('DEWiwFCPHYs'),
    desc: '“The most beautiful wrinkle in the world.” Fudgy brownies with the famous shiny crinkle top.' },
  { id: 'lava', name: 'Brownies Lava', cat: 'brownies', price: null, post: IG('DCwYflzPwzr'),
    desc: 'Gooey brownie cups crowned with a chocolate bar and white chocolate drizzle.' },
  { id: 'bcbrownies', name: 'Burnt Cheesecake Brownies', cat: 'brownies', price: null, post: IG('DCwYLUwvAt8'),
    desc: 'A whole party cake: half chocolate & fresh strawberries, half Biscoff cookie butter.' },
  { id: 'marshmallow', name: 'Brownies Toasted Marshmallow', cat: 'brownies', price: 8, post: IG('DCwXTREvEwx'),
    desc: 'Fudgy brownie under golden toasted marshmallows and a chocolate square.' },
  { id: 'almond', name: 'Brownies Almond Chocolate', cat: 'brownies', price: 8, post: IG('DCwXTREvEwx'),
    desc: 'Rich brownie coated in crunchy almond milk chocolate.' },
  { id: 'kinder', name: 'Brownies Kinder Bueno', cat: 'brownies', price: 7, post: IG('DCwXn-nvz_o'),
    desc: 'Marbled chocolate brownie topped with a piece of Kinder Bueno.' },
  { id: 'congo', name: 'Congo Bars', cat: 'brownies', price: null, post: IG('DCwYQYWvsL2'),
    desc: 'Buttery brown-sugar blondie bars loaded with chocolate chips and chunks.' },

  // ── Burnt cheesecake ──
  { id: 'bcoriginal', name: 'Burnt Cheesecake Original', cat: 'cheesecake', price: 8, post: IG('DCwXn-nvz_o'),
    desc: 'Creamy burnt cheesecake cup topped with Biscoff spread and a Biscoff cookie.' },
  { id: 'redvelvet', name: 'Burnt Cheesecake Red Velvet', cat: 'cheesecake', price: 7, post: IG('DCwXn-nvz_o'),
    desc: 'Red velvet burnt cheesecake cup with chocolate and a fresh strawberry.' },

  // ── Pastries ──
  { id: 'croissant', name: 'Croissant Almond Choc', cat: 'pastry', price: 4, post: IG('DCwXwxGvKvU'),
    desc: 'Crispy flat croissant dipped in almond chocolate with white drizzle.' },
  { id: 'fruity', name: 'Croissant Fruity', cat: 'pastry', price: 5, post: IG('DCwXwxGvKvU'),
    desc: 'Flaky croissant filled with fresh cream and sliced strawberries.' },
  { id: 'smores', name: "Croissant S'mores", cat: 'pastry', price: 4, post: IG('DCwXwxGvKvU'),
    desc: 'Croissant with marshmallow cream and a chocolate drizzle.' },
  { id: 'chocroll', name: 'Mini Choc Roll', cat: 'pastry', price: 4, post: IG('DCwXwxGvKvU'),
    desc: 'Little buttery pastry rolls with a chocolate centre and a dust of sugar.' },
  { id: 'danish', name: 'Danish Pastry', cat: 'pastry', price: 5, post: IG('DCwYAHNPIqm'),
    desc: 'Golden pinwheel Danish, served with cream, strawberries and blueberries.' },

  // ── Tarts ──
  { id: 'eggtart', name: 'Egg Tart', cat: 'tarts', price: 2, post: IG('DCwYGY1P2jd'),
    desc: 'Flaky crust with a smooth, caramelised egg custard.' },
  { id: 'cheesetart', name: 'Cheese Tart', cat: 'tarts', price: 3, unit: '2 pcs', post: IG('DCwXTREvEwx'),
    desc: 'Mini baked cheese tarts: Biscoff, chocolate and strawberry toppings.' },

  // ── Puffs & pavlova ──
  { id: 'creampuff', name: 'Japanese Cream Puff', cat: 'cream', price: 3, post: IG('DCwX2etv35s'),
    desc: 'Crunchy cookie-crust choux puff filled with cool custard cream.' },
  { id: 'puffalmond', name: 'Japanese Cream Puff Almond Chocolate', cat: 'cream', price: 4, post: IG('DCwXn-nvz_o'),
    desc: 'Our cream puff dipped in almond chocolate.' },
  { id: 'pavlova', name: 'Strawberry Mini Pavlova', cat: 'cream', price: null, tag: 'Best seller', best: true, post: IG('DEWhvhWPiST'),
    desc: '“My top one best selling 🍓✨” Crisp meringue, whipped cream, strawberries & blueberries.' },
].map((m) => ({ ...m, img: `${import.meta.env.BASE_URL}desserts/${m.id}.webp` }));

export const BEST_SELLER = MENU.find((m) => m.best);

// Original Unsplash photos behind each cut-out (credit / licence trail)
export const PHOTO_SOURCES = {
  kedut: 'https://images.unsplash.com/photo-1588539543889-20cc7ce4df55',
  lava: 'https://images.unsplash.com/photo-1617305855058-336d24456869',
  bcbrownies: 'https://images.unsplash.com/photo-1708649783472-34c67f8429d1',
  marshmallow: 'https://images.unsplash.com/photo-1633940125421-b3d6498f5e70',
  almond: 'https://images.unsplash.com/photo-1461009312844-e80697a81cc7',
  kinder: 'https://images.unsplash.com/photo-1600668623010-9fb9a3bcf554',
  congo: 'https://images.unsplash.com/photo-1736568220373-b7396c4e213e',
  bcoriginal: 'https://images.unsplash.com/photo-1635327173748-5fe11b795610',
  redvelvet: 'https://images.unsplash.com/photo-1779885580469-28385974ca80',
  croissant: 'https://images.unsplash.com/photo-1631129023315-7ef0e76faaed',
  fruity: 'https://images.unsplash.com/photo-1721324390033-661a350668d6',
  smores: 'https://images.unsplash.com/photo-1718897266472-5b7229ebdd3d',
  chocroll: 'https://images.unsplash.com/photo-1587080414086-57cef7f2641d',
  danish: 'https://images.unsplash.com/photo-1683771419442-e9c94e2d229d',
  eggtart: 'https://images.unsplash.com/photo-1721489620017-aedd0cffb93e',
  cheesetart: 'https://images.unsplash.com/photo-1646321155195-44f0a4f91d1b',
  creampuff: 'https://images.unsplash.com/photo-1791968858286-9582a3d1556d',
  puffalmond: 'https://images.unsplash.com/photo-1625580832911-2bf3375bbefc',
  pavlova: 'https://images.unsplash.com/photo-1761637604365-d57cb1ab6f67',
};

export const waLink = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
