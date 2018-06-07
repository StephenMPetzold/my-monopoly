let person = {
    "state": {
        "startingOrder": 2,
        "currentTurn": true,
        "inJail": false,
        "bankrupt": false,
        "firstPass": false,
        "buying": true
    },
    "token": {
        "type": "",
        "location": "go"
    },
    "roll": {
        "dice1": 5,
        "dice2": 5,
        "numRoll": 4
    },
    "owns": {
        "money": 6000,
        "property": ["Boardwalk", "Park Place"],
        "bonusCard": ["Get out of Jail Free", "Something else"]
    }
}

let bonusCards = {
    "community": [
        {
        "id": 1,
        "description": "community description 1"
        },
        {
        "id": 2,
        "description": "community description 2"
        },
        {
        "id": 3,
        "description": "community description 3"
        }
    ],
    "chance": [
        {
        "id": 1,
        "description": "chance description 1"
        },
        {
        "id": 2,
        "description": "chance description 2"
        },
        {
        "id": 3,
        "description": "chance description 3"
        }
    ]
}
 
let locations = [
    {
      "id": 0,  
      "name": "Go",
      "type": "Go",
      "color": "none",
      "price": "none",
      "rent": "",
      "description": "Starting. Collect $200 when passing Go."
    },
    {
      "id": 1,  
      "name": "Mediterrean Ave.",
      "type": "property",
      "color": "purple",
      "price": "60",
      "rent": "2",
      "description": "Buy or pay rent."
    },
    {
      "id": 2,  
      "name": "Community Chest",
      "type": "community chest",
      "color": "purple",
      "price": "none",
      "rent": "none",
      "description": "Select a community chest card."
    },
    {
      "id": 3,  
      "name": "Baltic Ave.",
      "type": "property",
      "color": "purple",
      "price": "60",
      "rent": "4",
      "description": "Buy or pay rent."
    },
    {
      "id": 4,  
      "name": "Income Tax",
      "type": "tax",
      "color": "none",
      "price": "none",
      "rent": "200",
      "description": "Pay income tax of 200M."
    },
    {
      "id": 5,  
      "name": "Reading Railroad",
      "type": "railroad",
      "color": "none",
      "price": "200",
      "rent": "25",
      "description": "Buy or pay rent."
    },
    {
      "id": 6,  
      "name": "Oriental Ave.",
      "type": "property",
      "color": "light blue",
      "price": "100",
      "rent": "6",
      "description": "Buy or pay rent."
    },
    {
      "id": 7,  
      "name": "Chance",
      "type": "chance",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": "Pick a chance card."
    },
    {
      "id": 8,  
      "name": "Vermont Ave.",
      "type": "property",
      "color": "light blue",
      "price": "100",
      "rent": "6",
      "description": "Buy or pay rent."
    },
    {
      "id": 9, 
      "name": "Connecticut Ave.",
      "type": "property",
      "color": "light blue",
      "price": "120",
      "rent": "8",
      "description": "Buy or pay rent"
    },
    {
      "id": 10,  
      "name": "Jail",
      "type": "jail",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": "You are in jail."
    },
    { 
      "id": 11,
      "name": "St Charles Place",
      "type": "property",
      "color": "pink",
      "price": "140",
      "rent": "10",
      "description": "Buy or pay rent"
    },
    {
    "id": 12,
      "name": "Electric Company",
      "type": "utility",
      "color": "none",
      "price": "150",
      "rent": "10",
      "description": "Buy or pay rent"
    },
    {
      "id": 13,
      "name": "States Avenue",
      "type": "property",
      "color": "pink",
      "price": "140",
      "rent": "10",
      "description": "Buy or pay rent"
    },
    { 
      "id": 14,
      "name": "Virginia Avenue",
      "type": "property",
      "color": "pink",
      "price": "160",
      "rent": "12",
      "description": "Buy or pay rent"
    },
    {
      "id": 15,
      "name": "Peninsylvania Railroad",
      "type": "railroad",
      "color": "none",
      "price": "200",
      "rent": "25",
      "description": "Buy or pay rent"
    },
    {
      "id": 16,
      "name": "St James Place",
      "type": "property",
      "color": "Orange",
      "price": "180",
      "rent": "14",
      "description": "Buy or pay rent"
    },
    {
      "id": 17,
      "name": "Community Chest",
      "type": "community chest",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": "Select a community chest card"
    },
    {
      "id": 18,
      "name": "Tennessee Ave",
      "type": "property",
      "color": "Orange",
      "price": "180",
      "rent": "14",
      "description": "Buy or pay rent"
    },
    {
      "id": 19,
      "name": "New York Avenue",
      "type": "property",
      "color": "Orange",
      "price": "200",
      "rent": "16",
      "description": "Buy or pay rent"
    },
    {
      "id": 20,
      "name": "Free Parking",
      "type": "parking",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": ""
    },
    {
      "id": 21,
      "name": "Kentucky Avenue",
      "type": "property",
      "color": "red",
      "price": "220",
      "rent": "18",
      "description": "Buy or pay rent"
    },
    {
      "id": 22,
      "name": "Community Chest",
      "type": "community chest",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": "Select a community chest card"
    },
    {
      "id": 23,
      "name": "Indiana Avenue",
      "type": "property",
      "color": "red",
      "price": "220",
      "rent": "18",
      "description": "Buy or pay rent"
    },
    {
      "id": 24,
      "name": "Illnois Avenue",
      "type": "property",
      "color": "red",
      "price": "240",
      "rent": "20",
      "description": "Buy or pay rent"
    },
    { 
      "id": 25,
      "name": "B & O Railroad",
      "type": "Railroad",
      "color": "none",
      "price": "200",
      "rent": "25",
      "description": "Buy or pay rent"
    },
    {
      "id": 26,
      "name": "Alantic Avenue",
      "type": "property",
      "color": "yellow",
      "price": "260",
      "rent": "22",
      "description": "Buy or pay rent"
    },
    {
      "id": 27,
      "name": "Ventnor Avenue",
      "type": "property",
      "color": "yellow",
      "price": "260",
      "rent": "22",
      "description": "Buy or pay rent"
    },
    {
      "id": 28,
      "name": "Water Works",
      "type": "utility",
      "color": "none",
      "price": "150",
      "rent": "10",
      "description": ""
    },
    {
      "id": 29,
      "name": "Marvin Gardens",
      "type": "property",
      "color": "yellow",
      "price": "280",
      "rent": "24",
      "description": "Buy or pay rent"
    },
    {
      "id": 30,
      "name": "Go To Jail",
      "type": "jail",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": "Go directly to jail when landed on"
    },
    {
      "id": 31,
      "name": "Pacific Avenue",
      "type": "property",
      "color": "green",
      "price": "300",
      "rent": "26",
      "description": "Buy or pay rent"
    },
    {
      "id": 32,
      "name": "North Carolina Avenue",
      "type": "property",
      "color": "green",
      "price": "300",
      "rent": "26",
      "description": "Buy or pay rent"
    },
    {
      "id": 33,
      "name": "Community Chest",
      "type": "community chest",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": "Select a community chest card"
    },
    {
      "id": 34,
      "name": "Peninsylvania Avenue",
      "type": "property",
      "color": "green",
      "price": "320",
      "rent": "28",
      "description": "Buy or pay rent"
    },
    {
      "id": 35,
      "name": "Short Line",
      "type": "railroad",
      "color": "none",
      "price": "200",
      "rent": "25",
      "description": "Buy or pay rent"
    },
    {
      "id": 36,
      "name": "Chance",
      "type": "chance",
      "color": "none",
      "price": "none",
      "rent": "none",
      "description": "Pick a chance card"
    },
    {
      "id": 37,
      "name": "Park Place",
      "type": "property",
      "color": "blue",
      "price": "350",
      "rent": "35",
      "description": "Buy or pay rent"
    },
    {
      "id": 38,
      "name": "Luxury Tax",
      "type": "tax",
      "color": "none",
      "price": "none",
      "rent": "100",
      "description": "Pay luxury tax of 100M"
    },
    {
      "id": 39,
      "name": "Boardwalk",
      "type": "property",
      "color": "blue",
      "price": "400",
      "rent": "50",
      "description": "Buy or pay rent"
    }
]
