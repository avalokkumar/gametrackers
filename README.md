# Gametrackers

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This is a project that allows users to track their favorite games. It is written using Angular CLI, JavaScript, TypeScript, HTML, and CSS.

## Setup
Clone the repository and navigate to the project directory:

Copy code

```git clone https://github.com/avalokkumar/gametracker.git```

```cd gametracker```

Install the dependencies using npm:
```npm install```

Run the development server:
```ng serve```

The project will be running at http://localhost:4200.

Setting up Angular CLI
If you don't already have Angular CLI installed, you can install it by running the following command:


npm install -g @angular/cli
Once it's installed, you can use the ng command to create a new Angular project, generate components, directives, and more.

For more information on Angular CLI, check out the official documentation.

### Data

```
The game data is in the form of a JSON object with the following structure:
{
  "id": "game1",
  "name": "Watch Dogs 2",
  "release_date": " 2016-11-29",
  "genre": ["Action", "Adventure"],
  "developer": "Ubisoft Montreal",
  "publisher": "Ubisoft",
  "img_url": "../assets/games/watch_dogs_2.jpg",
  "minimum_system_requirements":{
    "category": "Min",
    "cpu": "Intel Core i5 2400s @ 2.5 GHz, AMD FX 6120 @ 3.5 GHz or better",
    "ram": "6 GB ram",
    "gpu": "NVIDIA GeForce GTX 660 with 2 GB VRAM or AMD Radeon HD 7870, with 2 GB VRAM or better",
    "os": ["Windows 7 SP1", "Windows 8.1", "Windows 10 (64bit versions only)"],
    "store": "50 GB available space",
    "sound": "DirectX compatible using the latest drivers",
    "network": "Broadband Internet connection"
  }
}

The game review data is in the form of a JSON object with the following structure:


{
  "id": "game4",
  "name": "COUNTER-STRIKE: GLOBAL OFFENSIVE",
  "summary": "Counter-Strike: Global Offensive features new maps, characters, and weapons and delivers updated versions of the classic CS content.",
  "metascore": 83,
  "user_score": 7.7,
  "img_url": "../assets/games/CSGO.jpg",
  "critic_reviews": [
    {
      "reviewer": "Destructoid",
      "reviewer_score": 95,
      "review_date": "Aug 24, 2012",
      "comment": "It may lack some of the community niceties, beloved maps (Assault, anyone?), and little features of past games, but Global Offensive delivers on the promise of a faithful, polished, and better looking Counter-Strike for whoever wants it. Even if the community doesn't meet the golden standard of 1.6 and Source, CS:GO will remain a multiplayer classic for those willing to put in the time to learn the maps and weapons."
    },
    // additional critic reviews
  ]
}```
