class Player {
  constructor(name, position, image, detail) {
    this.name = name;
    this.position = position;
    this.image = image;
    this.detail = detail;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }
}

const warriors = new Team("Golden State Warriors");

warriors.addPlayer(
  new Player(
    "Stephen Curry",
    "Point Guard",
    "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    "4× NBA Champion, 2× MVP, 9× All-Star."
  )
);
warriors.addPlayer(
  new Player(
    "Klay Thompson",
    "Shooting Guard",
    "https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png",
    "Elite shooter, comeback king."
  )
);
warriors.addPlayer(
  new Player(
    "Draymond Green",
    "Power Forward",
    "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png",
    "Defensive genius with a fiery edge."
  )
);
warriors.addPlayer(
  new Player(
    "Andrew Wiggins",
    "Small Forward",
    "https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png",
    "2022 Finals X-Factor."
  )
);
warriors.addPlayer(
  new Player(
    "Kevon Looney",
    "Center",
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1626172.png",
    "Underrated rebounding machine."
  )
);
