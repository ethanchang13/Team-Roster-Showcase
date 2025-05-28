class Player {
  constructor(
    firstName,
    lastName,
    position,
    age,
    photo,
    hiddenDetail,
    starPlayer = false
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.age = age;
    this.photo = photo;
    this.hiddenDetail = hiddenDetail;
    this.starPlayer = starPlayer;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Team {
  constructor(name, players) {
    this.name = name;
    this.players = players;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  get roster() {
    return this.players;
  }
}

const playersList = [
  new Player(
    "Stephen",
    "Curry",
    "PG",
    37,
    "https://images.unsplash.com/photo-1612558485966-4b3c5771e685",
    "Revolutionized basketball with his long-range shooting, holding the NBA record for most career three-pointers.",
    true
  ),
  new Player(
    "Klay",
    "Thompson",
    "SG",
    35,
    "https://images.unsplash.com/photo-1519861531473-3c12b3019b95",
    "Set an NBA record by scoring 37 points in a single quarter.",
    true
  ),
  new Player(
    "Draymond",
    "Green",
    "PF",
    35,
    "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    "A defensive maestro, known for guarding all five positions on the court.",
    true
  ),
  new Player(
    "Andrew",
    "Wiggins",
    "SF",
    30,
    "https://images.unsplash.com/photo-1516321310765-79e44b9e30c3",
    "Earned All-Star honors in 2022 for his two-way play."
  ),
  new Player(
    "Kevon",
    "Looney",
    "C",
    29,
    "https://images.unsplash.com/photo-1591182223207-1b7171c308c2",
    "A rebounding machine, led the Warriors in rebounds during the 2022 playoffs."
  ),
  new Player(
    "Jonathan",
    "Kuminga",
    "SF",
    22,
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    "One of the youngest players to dunk in an NBA All-Star game."
  ),
  new Player(
    "Dennis",
    "Schroder",
    "PG",
    31,
    "https://images.unsplash.com/photo-1554126807-6b10f6f6692a",
    "Known for his clutch performance in international play for Germany."
  ),
  new Player(
    "Brandin",
    "Podzemski",
    "SG",
    22,
    "https://images.unsplash.com/photo-1518609571773-39b2d303a723",
    "Rising star with a deadly three-point shot and high basketball IQ."
  ),
];

const team = new Team("Warriors Elite", playersList);
const players = team.roster;
