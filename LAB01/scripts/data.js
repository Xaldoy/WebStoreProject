const data = {
  website: "Vintage Shop",
  categories: [
    {
      name: "Melodic Instruments",
      image: "./images/Categories/music.jpg",
      products: [
        {
          name: "Enchanted Ukulele",
          image: "./images/Products/MelodicInstruments/ukulele.jpg",
        },
        {
          name: "Whispering Trumpet",
          image: "./images/Products/MelodicInstruments/trumpet.jpg",
        },
        {
          name: "Echoing Radio",
          image: "./images/Products/MelodicInstruments/radio.jpg",
        },
        {
          name: "Harmony Phonograph",
          image:
            "./images/Products/MelodicInstruments/record-player-closeup.jpg",
        },
        {
          name: "Mystic Record Player",
          image: "./images/Products/MelodicInstruments/record-player.jpg",
        },
      ],
    },
    {
      name: "Timekeepers",
      image: "./images/Categories/time.jpg",
      products: [
        {
          name: "Omniscient Reader",
          image: "./images/Products/Timekeepers/hanging-watch.jpg",
        },
        {
          name: "Eternal Sands Hourglass",
          image: "./images/Products/Timekeepers/hourglass.jpg",
        },
        {
          name: "Temporal Pocket Watch",
          image: "./images/Products/Timekeepers/watch-on-table.jpg",
        },
        {
          name: "Chronos",
          image: "./Images/Products/Timekeepers/watch.jpg",
        },
        {
          name: "Sentinel Spire",
          image: "./Images/Products/Timekeepers/watch-tower.jpg",
        },
      ],
    },
    {
      name: "Antique Vehicles",
      image: "./images/Categories/vehicles.jpg",
      products: [
        {
          name: "Shadow Veil Limousine",
          image: "./images/Products/AntiqueVehicles/vintage-black-limo.jpg",
        },
        {
          name: "Phantom Cruiser",
          image: "./images/Products/AntiqueVehicles/old-black-car.jpg",
        },
        {
          name: "Azure Dreamer",
          image: "./images/Products/AntiqueVehicles/vintage-blue-car.jpg",
        },
        {
          name: "Crimson Voyager",
          image: "./images/Products/AntiqueVehicles/old-red-car.jpg",
        },
        {
          name: "Rustic Racer",
          image: "./images/Products/AntiqueVehicles/old-porsche.jpg",
        },
        {
          name: "Lost Arcana Carriage",
          image: "./images/Products/AntiqueVehicles/vintage-parked-car.jpg",
        },
      ],
    },
    {
      name: "Illuminations",
      image: "./images/Categories/light.jpg",
      products: [
        {
          name: "Ethereal Chandelier",
          image: "./images/Products/Illuminations/chandelier.jpg",
        },
        {
          name: "Arcane Illuminator",
          image: "./images/Products/Illuminations/vintage-lamp.jpg",
        },
        {
          name: "Glowing Relic Lantern",
          image: "./images/Products/Illuminations/old-lamp.jpg",
        },
        {
          name: "Lantern of Echoing Shadows",
          image: "./images/Products/Illuminations/lamp.jpg",
        },
        {
          name: "Luminary of Time's Path",
          image: "./images/Products/Illuminations/forward-lamp.jpg",
        },
      ],
    },
    {
      name: "Artifacts",
      image: "./images/Categories/artifacts.jpg",
      products: [
        {
          name: "Feywild Skull",
          image: "./images/Products/MysticalArtifacts/animal-skull.jpg",
        },
        {
          name: "Grimoire of Bones",
          image: "./images/Products/MysticalArtifacts/skulls.jpg",
        },
        {
          name: "Key of Secrets",
          image: "./images/Products/MysticalArtifacts/single-old-key.jpg",
        },
        {
          name: "Whispering Key Collection",
          image: "./images/Products/MysticalArtifacts/vintage-keys.jpg",
        },
        {
          name: "Ancient Locks & Keys",
          image: "./images/Products/MysticalArtifacts/old-keys.jpg",
        },
        {
          name: "Sorcerer Bell",
          image: "./images/Products/MysticalArtifacts/chinese-bell.jpg",
        },
        {
          name: "Spectral Pieces",
          image: "./images/Products/MysticalArtifacts/chess.jpg",
        },
      ],
    },
    {
      name: "Explorer Tools",
      image: "./images/Categories/explorer.jpg",
      products: [
        {
          name: "Wayfinder Compass",
          image: "./images/Products/Explorers/compass.jpg",
        },
        {
          name: "Phantom Galleon",
          image: "./images/Products/Explorers/ship-model.jpg",
        },
        {
          name: "Lens of Insight",
          image: "./images/Products/Explorers/camera-lens.jpg",
        },
        {
          name: "Chronicle Capturer",
          image: "./images/Products/Explorers/canon-camera.jpg",
        },
        {
          name: "Mystic Lens Recorder",
          image: "./images/Products/Explorers/canon-camera-with-strap.jpg",
        },
        {
          name: "Ancient Pathways",
          image: "./images/Products/Explorers/old-map-us.jpg",
        },
        {
          name: "Dimensional Case",
          image: "./images/Products/Explorers/briefcase.jpg",
        },
      ],
    },
    {
      name: "Enchanted Decor",
      image: "./images/Categories/decor.jpg",
      products: [
        {
          name: "Pixie Blossom",
          image: "./images/Products/EnchantedDecor/small-plant.jpg",
        },
        {
          name: "Mystic Brew Set",
          image: "./images/Products/EnchantedDecor/teapot-and-mug.jpg",
        },
        {
          name: "Sylvan Pipes",
          image: "./images/Products/EnchantedDecor/wooden-pipes.jpg",
        },
        {
          name: "Enchanted Verdant Phial",
          image: "./images/Products/EnchantedDecor/plant-in-bottle.jpg",
        },
        {
          name: "Arcane Atlas",
          image: "./images/Products/EnchantedDecor/globe.jpg",
        },
      ],
    },
    {
      name: "Magical Writings",
      image: "./images/Categories/writings.jpg",
      products: [
        {
          name: "Whispered Letters",
          image: "./images/Products/MagicalWritings/letters.jpg",
        },
        {
          name: "Tomes of Mysteries",
          image: "./images/Products/MagicalWritings/multiple-books.jpg",
        },
        {
          name: "Ancient Chronicles",
          image: "./images/Products/MagicalWritings/old-books.jpg",
        },
        {
          name: "Grimoire of Bound Whispers",
          image: "./images/Products/MagicalWritings/tied-books.jpg",
        },
        {
          name: "Tome of Forgotten Tales",
          image: "./images/Products/MagicalWritings/abandoned-book.jpg",
        },
      ],
    },
    {
      name: "Secret Passages & Portals",
      image: "./images/Categories/passages.jpg",
      products: [
        {
          name: "Gate of Secrets",
          image: "./images/Products/SecretPassages/locked-door.jpg",
        },
        {
          name: "Aqua Arcana Pathway",
          image: "./images/Products/SecretPassages/venice-canal-event.jpg",
        },
        {
          name: "Whispering Woods",
          image: "./images/Products/SecretPassages/forest-event-meet.jpg",
        },
        {
          name: "Arcane Masonry",
          image:
            "./images/Products/SecretPassages/vintage-architecture-brick.jpg",
        },
        {
          name: "Elderstone Relic",
          image:
            "./images/Products/SecretPassages/vintage-architecture-stone.jpg",
        },
      ],
    },
    {
      name: "Vintage Attire",
      image: "./images/Categories/attire.jpg",
      products: [
        {
          name: "Enchanted Garments",
          image: "./images/Products/VintageAttire/vintage-dress.jpg",
        },
        {
          name: "Mystical Trousers",
          image: "./images/Products/VintageAttire/vintage-pants.jpg",
        },
        {
          name: "Adventurer Satchel",
          image: "./images/Products/VintageAttire/old-bag.jpg",
        },
        {
          name: "Quill of Ages",
          image: "./images/Products/VintageAttire/vintage-pen.jpg",
        },
        {
          name: "Elderwood Scepter",
          image: "./images/Products/VintageAttire/wand.jpg",
        },
      ],
    },
  ],
};
