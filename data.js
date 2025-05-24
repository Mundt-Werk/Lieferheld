let menuDishes = [
  // Pizza-Gerichte
  {
    mealName: 'Spider-Man Special',
    mealDescription:
      'Tomatensoße, Mozzarella, Schinken, Champignons, Paprika, Oliven',
    mealPrice: '10,90',
    mealImage: './img/pizza/1.png',
    meal_type: 'pizza',
  },
  {
    mealName: 'Hulks Meaty Mayhem',
    mealDescription:
      'Tomatensoße, Mozzarella, Pepperoni, Schinken, Salami, Hackfleisch',
    mealPrice: '11,50',
    mealImage: './img/pizza/2.png',
    meal_type: 'pizza',
  },
  {
    mealName: 'Iron Mans BBQ Blast',
    mealDescription: 'Barbecue-Soße, Mozzarella, Rinderhack, Paprika, Zwiebeln',
    mealPrice: '12,00',
    mealImage: './img/pizza/3.png',
    meal_type: 'pizza',
  },
  {
    mealName: 'Wolverines Bacon Blitz',
    mealDescription:
      'Tomatensoße, Mozzarella, Speck, Schinken, Salami, Paprika',
    mealPrice: '10,90',
    mealImage: './img/pizza/4.png',
    meal_type: 'pizza',
  },
  {
    mealName: 'Thors Thunderous',
    mealDescription:
      'Tomatensoße, Mozzarella, Salami, Schinken, Pepperoni, Wurst',
    mealPrice: '11,50',
    mealImage: './img/pizza/5.png',
    meal_type: 'pizza',
  },
  {
    mealName: 'Captain Americas Spicy Surprise',
    mealDescription:
      'Tomatensoße, Mozzarella, pikante Wurst, Jalapeños, Zwiebeln',
    mealPrice: '11,00',
    mealImage: './img/pizza/6.png',
    meal_type: 'pizza',
  },
  {
    mealName: 'Black Panthers Chicken Supreme',
    mealDescription:
      'Tomatensoße, Mozzarella, Hühnerbruststreifen, Paprika, Zwiebeln, Mais',
    mealPrice: '12,50',
    mealImage: './img/pizza/7.png',
    meal_type: 'pizza',
  },

  // Vegetarische Gerichte
  {
    mealName: 'Green Goblins Veggie Delight',
    mealDescription:
      'Tomatensoße, Mozzarella, Paprika, Zucchini, Champignons, Oliven',
    mealPrice: '10,50',
    mealImage: './img/vegetarisch/1.png',
    meal_type: 'vegetarian',
  },
  {
    mealName: 'Mary Janes Margherita Magic',
    mealDescription:
      'Tomatensoße, Mozzarella, frische Tomatenscheiben, Basilikum',
    mealPrice: '9,90',
    mealImage: './img/vegetarisch/2.png',
    meal_type: 'vegetarian',
  },
  {
    mealName: 'Scarlets Garden',
    mealDescription:
      'Tomatensoße, Mozzarella, Spinat, Brokkoli, Tomaten, Knoblauch',
    mealPrice: '11,00',
    mealImage: './img/vegetarisch/3.png',
    meal_type: 'vegetarian',
  },
  {
    mealName: "Loki's No Meat",
    mealDescription:
      'Tomatensoße, Mozzarella, Artischockenherzen, Oliven, Zwiebeln, Feta',
    mealPrice: '11,50',
    mealImage: './img/vegetarisch/4.png',
    meal_type: 'vegetarian',
  },
  {
    mealName: "Vision's Cheesy Sensation",
    mealDescription:
      'Tomatensoße, Mozzarella, Spinat, Ricotta, Parmesan, Knoblauch',
    mealPrice: '10,90',
    mealImage: './img/vegetarisch/5.png',
    meal_type: 'vegetarian',
  },
  {
    mealName: 'Marvels Mushroom Madness',
    mealDescription:
      'Tomatensoße, Mozzarella, Champignons, Trüffelöl, Petersilie',
    mealPrice: '10,50',
    mealImage: './img/vegetarisch/6.png',
    meal_type: 'vegetarian',
  },
  {
    mealName: "Gamora's Pesto Paradise",
    mealDescription:
      'Pesto-Soße, Mozzarella, Tomaten, Artischocken, Pinienkerne, Rucola',
    mealPrice: '11,00',
    mealImage: './img/vegetarisch/7.png',
    meal_type: 'vegetarian',
  },

  // Calzone-Gerichte
  {
    mealName: 'Deadpools Calzone Classico',
    mealDescription: 'Tomatensoße, Mozzarella, Schinken, Champignons, Paprika',
    mealPrice: '11,90',
    mealImage: './img/calzone/1.png',
    meal_type: 'calzone',
  },
  {
    mealName: "Groot's Veggie Calzone",
    mealDescription:
      'Tomatensoße, Mozzarella, Paprika, Zucchini, Champignons, Oliven',
    mealPrice: '11,50',
    mealImage: './img/calzone/2.png',
    meal_type: 'calzone',
  },
  {
    mealName: "Thanos' BBQ Chicken Calzone",
    mealDescription:
      'Barbecue-Soße, Mozzarella, Hühnerbruststreifen, Paprika, Zwiebeln',
    mealPrice: '12,50',
    mealImage: './img/calzone/3.png',
    meal_type: 'calzone',
  },
  {
    mealName: "Doctor Octopus' Pepperoni Pouch",
    mealDescription:
      'Tomatensoße, Mozzarella, Pepperoni, Schinken, Salami, Oliven',
    mealPrice: '12,00',
    mealImage: './img/calzone/4.png',
    meal_type: 'calzone',
  },
  {
    mealName: "Spider-Gwen's Caprese Calzone",
    mealDescription:
      'Tomatensoße, Mozzarella, Tomaten, frischer Basilikum, Parmesan',
    mealPrice: '11,90',
    mealImage: './img/calzone/5.png',
    meal_type: 'calzone',
  },
  {
    mealName: "Falcon's Spicy Beef Pocket",
    mealDescription:
      'Tomatensoße, Mozzarella, Rinderhack, Jalapeños, Zwiebeln, Knoblauch',
    mealPrice: '12,00',
    mealImage: './img/calzone/6.png',
    meal_type: 'calzone',
  },

  // Das ist das komplette hartcodierte JSON-Array, das in deinen Code eingefügt werden kann.
  {
    mealName: "Captain Marvel's Mediterranean Calzone",
    mealDescription:
      'Tomatensoße, Mozzarella, Artischocken, Oliven, Zwiebeln, Feta',
    mealPrice: '12,50',
    mealImage: './img/calzone/7.png',
    meal_type: 'calzone',
  },

  // Getränke
  {
    mealName: 'Venoms Cola',
    mealDescription: 'Ein erfrischendes Getränk mit dem Geschmack von Cola',
    mealPrice: '2,00',
    mealImage: './img/drink/1.png',
    meal_type: 'drink',
  },
  {
    mealName: "Green Goblin's Ginger Ale",
    mealDescription: 'Ein prickelndes Ingwergetränk',
    mealPrice: '2,00',
    mealImage: './img/drink/2.png',
    meal_type: 'drink',
  },
  {
    mealName: "Vision's Vanilla Shake",
    mealDescription:
      'Ein cremiger Milchshake mit dem süßen Geschmack von Vanille',
    mealPrice: '2,00',
    mealImage: './img/drink/3.png',
    meal_type: 'drink',
  },
  {
    mealName: "May's Apple Juice",
    mealDescription: 'Ein erfrischender Apfelsaft',
    mealPrice: '3,50',
    mealImage: './img/drink/4.png',
    meal_type: 'drink',
  },
  {
    mealName: "Iron Man's Iced Tea",
    mealDescription: 'Ein erfrischender Eistee',
    mealPrice: '2,50',
    mealImage: './img/drink/5.png',
    meal_type: 'drink',
  },
  {
    mealName: "Hulk's Lemonade",
    mealDescription: 'Eine erfrischende Zitronenlimonade',
    mealPrice: '2,50',
    mealImage: './img/drink/6.png',
    meal_type: 'drink',
  },
  {
    mealName: 'Daily Bugle',
    mealDescription: 'Ein kräftiger Kaffee',
    mealPrice: '3,00',
    mealImage: './img/drink/7.png',
    meal_type: 'drink',
  },
];


