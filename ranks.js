const ranks = [
  "minnow",
  "starfish",
  "Patrick star",
  "shrimp",
  "mantis shrimp",
  "sea pickle",
  "crab",
  "lobster",
  "shark",
  "hammerhead",
  "bullshark",
  "whale",
  "Loch Ness Monster",
  //"Matt Damon",
  "blue whale",
  "octopus",
  "Kraken"
]

export const randomRank = () => {
 return ranks[Math.floor(Math.random() * ranks.length)]
}
