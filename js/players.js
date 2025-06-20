// Factory function to create a player object with basic info and full name getter
function createPlayer(firstName, lastName, position, age, photo, hiddenDetail) {
  return {
    firstName,
    lastName,
    position,
    age,
    photo,
    hiddenDetail,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

// Factory function to create a team object with players and helper methods
function createTeam(name, players) {
  return {
    name,
    players,
    addPlayer(player) {
      this.players.push(player);
    },
    get roster() {
      return this.players;
    },
  };
}

// Array of player objects using the createPlayer factory function
const playersList = [
  createPlayer(
    "Stephen",
    "Curry",
    "PG",
    37,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    "First player in NBA history to reach 4,000 career three-pointers, continuing to redefine the game's perimeter play."
  ),
  createPlayer(
    "Draymond",
    "Green",
    "PF",
    35,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png",
    "Anchored the Warriors' defense, leading the team to a top-5 defensive rating in the 2024-25 season."
  ),
  createPlayer(
    "Kevon",
    "Looney",
    "C",
    29,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1626172.png",
    "Known for his durability and rebounding prowess, played all 82 games in the 2024-25 season."
  ),
  createPlayer(
    "Moses",
    "Moody",
    "SG",
    22,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1630541.png",
    "Known for his three-point shooting and defensive versatility, played 74 games in the 2024-25 season."
  ),
  createPlayer(
    "Gary",
    "Payton II",
    "SG",
    32,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1627780.png",
    "Renowned for his perimeter defense and athleticism, scored a playoff career-high 16 points in 2025."
  ),
  createPlayer(
    "Jackson",
    "Rowe",
    "PF",
    27,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1642050.png",
    "Veteran forward known for his scoring and versatility, provided leadership and experience."
  ),
  createPlayer(
    "Pat",
    "Spencer",
    "PG",
    28,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1630311.png",
    "Former lacrosse star turned professional basketball player, known for his athleticism and playmaking."
  ),
  createPlayer(
    "Jimmy",
    "Butler III",
    "SF",
    35,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png",
    "Acquired midseason, provided a significant boost on both ends of the floor, averaging 17.9 points per game."
  ),
  createPlayer(
    "Buddy",
    "Hield",
    "SG",
    32,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1627741.png",
    "Sharpshooter who made NBA history by hitting 12 three-pointers in his first two games with the Warriors."
  ),
  createPlayer(
    "Quinten",
    "Post",
    "C",
    25,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1642366.png",
    "First Dutch player drafted since 2009, known for his shooting range and size as a 7-footer."
  ),
  createPlayer(
    "Gui",
    "Santos",
    "SF",
    22,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1630611.png",
    "Brazilian forward who cracked the rotation midseason, providing rebounding and passing off the bench."
  ),
  createPlayer(
    "Taran",
    "Armstrong",
    "PG",
    23,
    "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4896850.png",
    "Australian guard who signed a two-way contract, known for his court vision and playmaking abilities."
  ),
  createPlayer(
    "Brandin",
    "Podziemski",
    "SG",
    22,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1641764.png",
    "Named to the 2025 NBA All-Rookie First Team, leading all rookies in charges drawn."
  ),
  createPlayer(
    "Trayce",
    "Jackson-Davis",
    "PF",
    25,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1631218.png",
    "Started and ended the season as the Warriors' center, known for his rim protection and finishing."
  ),
  createPlayer(
    "Jonathan",
    "Kuminga",
    "SF",
    22,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1630228.png",
    "Averaged 15.3 points per game in the 2024-25 season, showcasing his athleticism and scoring ability."
  ),
  createPlayer(
    "Kevin",
    "Devon Knox II",
    "SF",
    25,
    "https://cdn.nba.com/headshots/nba/latest/1040x760/1628995.png",
    "Knox became one of the youngest players to debut for the Knicks and is known for his explosive athleticism and ability to stretch the floor with a smooth shooting stroke."
  ),
];

// Create a team using the players list
const team = createTeam("Warriors Elite", playersList);

// Store the full team roster
const players = team.roster;
