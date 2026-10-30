// Flaming Thai recipes. recipes.html lists them; recipe.html?r=<slug> shows one.
//
// `awesomeOn` is the word the homepage shuffle shows for this recipe.
// `sauce` is a product slug from products.js. `img` is optional: without it the
// card shows the sauce bottle and the recipe page shows `brief` as the shot list.
// Ingredients and steps left as null show "to come" on the page.

const CATEGORIES = ['Breakfast', 'Braai', 'Burgers & pizza', 'Noodles & rice', 'Sides & snacks'];

const RECIPES = [
  {
    slug: 'gochujang-garlic-greens',
    awesomeOn: 'Greens',
    title: 'Gochujang garlic greens',
    sauce: 'korean-gochujang',
    category: 'Sides & snacks',
    time: '15 min',
    serves: 2,
    sticker: 'Quick',
    img: 'assets/recipe-gochujang-greens.jpg',
    alt: 'Korean Gochujang with garlicky greens, lemons and chilli flakes',
    intro: 'Crispy garlic, wilted greens, a sticky-sweet gochujang glaze and a squeeze of lemon. Side dish, rice-bowl topper or midnight snack.',
    draft: true,
    ingredients: [
      { group: 'Produce', items: ['1 big bunch kale or spinach, stems removed', '4 cloves garlic, thinly sliced', '½ lemon, plus wedges to serve'] },
      { group: 'Pantry', items: ['2 tbsp Flaming Thai Korean Gochujang', '2 tbsp neutral oil', 'Chilli flakes and a pinch of salt'] },
    ],
    steps: [
      { head: 'Crisp the garlic', text: 'Fry the garlic in the oil over medium heat until golden. Scoop it out and keep the oil.' },
      { head: 'Wilt the greens', text: 'Add the greens with a pinch of salt and toss until just wilted, 2–3 minutes.' },
      { head: 'Sauce it', text: 'Take off the heat, then stir through the gochujang and a squeeze of lemon.' },
      { head: 'Finish', text: 'Top with the crispy garlic and chilli flakes. Extra squeeze on top? Obviously.' },
    ],
  },
  {
    slug: 'sriracha-scrambled-eggs',
    awesomeOn: 'Eggs',
    title: 'Sriracha scrambled eggs',
    sauce: 'sriracha',
    category: 'Breakfast',
    time: '10 min',
    brief: 'Overhead: soft scrambled eggs on toast on a speckled plate, a zig-zag of Sriracha across the top, green-cap bottle lying in frame bottom right. Window light, warm, slightly hard shadows. Square crop.',
  },
  {
    slug: 'sticky-bbq-braai-wings',
    awesomeOn: 'Wings',
    title: 'Sticky BBQ braai wings',
    sauce: 'asian-sticky-bbq',
    category: 'Braai',
    time: '45 min',
    sticker: 'Braai day',
    brief: 'Close crop: glazed chicken wings on a braai grid, glaze catching the light, Asian Sticky BBQ bottle standing out of focus behind. Late-afternoon outdoor light. Square crop.',
  },
  {
    slug: 'sweet-chilli-pizza',
    awesomeOn: 'Pizza',
    title: 'Sweet chilli pizza',
    sauce: 'ginger-soy-sweet-chilli',
    category: 'Burgers & pizza',
    time: '25 min',
    brief: 'A slice being pulled from a pizza drizzled with Ginger & Soy Sweet Chilli, cheese stretching, bottle on the board. Direct on-camera flash, high contrast. Square crop.',
  },
  {
    slug: 'spicy-mayo-smash-burger',
    awesomeOn: 'Burgers',
    title: 'Spicy mayo smash burger',
    sauce: 'sriracha-mayo',
    category: 'Burgers & pizza',
    time: '20 min',
    brief: 'Smash burger cut in half with Sriracha Mayo dripping, held over a paper-lined tray, bottle beside it. Direct flash, close crop. Square crop.',
  },
  {
    slug: 'gochujang-rice-bowl',
    awesomeOn: 'Rice bowls',
    title: 'Gochujang rice bowl',
    sauce: 'korean-gochujang',
    category: 'Noodles & rice',
    time: '20 min',
    brief: 'Three-quarter angle: rice bowl with a fried egg, greens and a swirl of Gochujang, chopsticks resting on the rim, bottle behind. Soft daylight, dark table. Square crop.',
  },
  {
    slug: 'extra-hot-sesame-noodles',
    awesomeOn: 'Noodles',
    title: 'Extra hot sesame noodles',
    sauce: 'extra-hot-sriracha',
    category: 'Noodles & rice',
    time: '15 min',
    brief: 'Noodles lifted from the bowl with chopsticks, glossy with Extra Hot Sriracha and sesame seeds, bottle in the background. Direct flash, close crop. Square crop.',
  },
  {
    slug: 'firecracker-fries',
    awesomeOn: 'Fries',
    title: 'Firecracker fries',
    sauce: 'extra-hot-sriracha-mayo',
    category: 'Sides & snacks',
    time: '30 min',
    sticker: 'Party food',
    brief: 'Overhead: a paper tray of fries loaded with Extra Hot Sriracha Mayo and spring onion, hands reaching in, bottle on the table. Direct flash. Square crop.',
  },
];

const recipesFor = productSlug => RECIPES.filter(r => r.sauce === productSlug);
