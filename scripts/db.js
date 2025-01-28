const starter = [
  {
    "id": 101,
    "name": "Nypon Soppa",
    "price": 3.8,
    "description": "Warme oder kalte Hagebuttensuppe, reich an Vitamin C",
    "amount": 0
  },
  {
    "id": 102,
    "name": "Blåbärssoppa",
    "price": 3.8,
    "description": "Traditionelle schwedische Blaubeersuppe, kann warm oder kalt serviert werden",
    "amount": 0
  },
  {
    "id": 103,
    "name": "Metsäsienisalaatti",
    "price": 7.5,
    "description": "Traditioneller finnischer Waldpilzsalat, mit Sahne, Zwiebeln und einem Hauch Zitronensaft.",
    "amount": 0
  }
]

const maindishes = [
  {
    "id": 201,
    "name": "Vegane Köttbullar mit Lingonberry-Sauce",
    "price": 8.5,
    "description": "Pflanzliche Version der klassischen schwedischen Fleischbällchen, serviert mit süß-saurer Preiselbeersauce",
    "amount": 0
  },
  {
    "id": 202,
    "name": "Vegetarische Pytt i Panna",
    "price": 9.2,
    "description": "Traditioneller Eintopf mit gewürfelten Kartoffeln, saisonalem Gemüse und pflanzlichem Protein",
    "amount": 0
  },
  {
    "id": 203,
    "name": "Karelische Piroggen mit Karottenfüllung",
    "price": 7.8,
    "description": "Knusprige Teigtaschen gefüllt mit würzigem Karottenpüree, eine finnische Spezialität",
    "amount": 0
  },
  {
    "id": 204,
    "name": "Hafer-Risotto mit Spargel und Erbsen",
    "price": 10.5,
    "description": "Cremiges Risotto aus nordischem Hafer, garniert mit knackigem Frühlingsgemüse",
    "amount": 0
  }
]

const sides = [
  {
    "id": 301,
    "name": "Gurkensalat",
    "price": 3.5,
    "description": "Erfrischender Salat aus dünn geschnittenen Gurken mit Dill und veganer Crème fraîche",
    "amount": 0
  },
  {
    "id": 302,
    "name": "Rote Bete-Salat",
    "price": 4.2,
    "description": "Würziger Salat aus gekochten Roten Beten, Äpfeln und Walnüssen",
    "amount": 0
  },
  {
    "id": 303,
    "name": "Knäckebrot",
    "price": 1.5,
    "description": "Traditionelles, knuspriges schwedisches Fladenbrot aus Vollkornmehl",
    "amount": 0
  }
]

const desserts = [
  {
    "id": 401,
    "name": "Blaubeerkuchen",
    "price": 4.8,
    "description": "Saftiger Kuchen mit wilden nordischen Blaubeeren, vegan",
    "amount": 0
  },
  {
    "id": 402,
    "name": "Rhabarber-Törtchen mit Baiser",
    "price": 5.2,
    "description": "Süß-saures Törtchen mit karamellisiertem Rhabarber und fluffigem Baiser",
    "amount": 0
  },
  {
    "id": 403,
    "name": "Frozen Skyr mit Schwarzen Johannisbeeren",
    "price": 5.5,
    "description": "Cremiges, gefrorenes Skyr-Dessert mit fruchtigen schwarzen Johannisbeeren",
    "amount": 0
  }
]

const drinks = [
  {
    "id": 501,
    "name": "Lingondricka",
    "price": 3.2,
    "description": "Erfrischender, leicht herber Preiselbeersaft",
    "amount": 0
  },
  {
    "id": 502,
    "name": "Flädersaft",
    "price": 3.5,
    "description": "Holunderblütensirup mit Wasser",
    "amount": 0
  },
  {
    "id": 503,
    "name": "Villbrygg, verschiedene Sorten",
    "price": 3.5,
    "description": "Getränke basieren auf wilden Pflanzen und Kräutern, nachhaltig hergestellt",
    "amount": 0
  },
  {
    "id": 504,
    "name": "Julmust",
    "price": 3.2,
    "description": "alkoholfreies Malzgetränk, besonders zur Weihnachtszeit",
    "amount": 0
  }
]

let myDishes = {
  Vorspeisen: starter,
  Hauptgerichte: maindishes,
  Beilagen: sides,
  Desserts: desserts,
  Getränke: drinks,
}

const categoryImages = [
  "./assets/img/starter.jpg",
  "./assets/img/main.jpg",
  "./assets/img/sides.jpg",
  "./assets/img/dessert.jpg",
  "./assets/img/drinks.jpg"
]
