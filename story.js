const intro = (username) => {
  let intros = [
    `It was midnight and a storm was tossing the boat about. ${username} ${adverb()} stumbles out onto the deck, casts a line into the water, and feels a bite.`,
    `The boat was filling with water, and she was sinking quickly. ${username} decided it was an excellent idea to cast a line into the water and begin fishing. Before long, there was a bite.`,
    `${username} was in a small fishing vessel off the coast of ${country()} when something big moved under the boat. ${username} cast a line into the water. After a short while, there was a bite.`
  ]

  return intros[Math.floor(Math.random() * intros.length)]
}

const country = () => {
  let countries = [
    'Tasmania',
    'Madagascar',
    'South Africa',
    'Puerto Rico',
    'France',
    'Great Britain'
  ]

  return countries[Math.floor(Math.random() * countries.length)]
}

const verb = () => {
  let verbs = [
    'wrestled with',
    'fought',
    'one v oned'
  ]

  return verbs[Math.floor(Math.random() * verbs.length)]
}

const adverb = () => {
  let adverbs = [
    'drunkenly',
    'bravely',
    'idiotically',
    'keenly'
  ]

  return adverbs[Math.floor(Math.random() * adverbs.length)]
}

const weight = (max, min = 1) => {
  let units = [
    'ton',
    'kilogram',
    'pound'
  ]

  return `${Math.ceil(Math.random() * max)} ${units[Math.floor(Math.random() * units.length)]}`
}

const noun = () => {
  let nouns = [
    'sucker',
    'slimy sea creature',
    'fiend',
    'loser',
    'no-good fish'
  ]

  return nouns[Math.floor(Math.random() * nouns.length)]
}

const ending = (username, fish) => {
  let endings = [
    `${username} was yanked into the water and begins having a boxing match with the ${fish}. ${username} wins and drags it on deck, victorious.`,
    `This was not ${username}'s first rodeo and reeled that ${noun()} in.`,
    `The ${fish} leaps out of the water and climbs aboard. The crew was panicking, but ${username} remains calm. ${username} cuts that ${noun()} into delicious sushi.`
  ]

  return endings[Math.floor(Math.random() * endings.length)]
}

const writeStory = (username, fish, article = "a") => {
  return `${intro(username)} ${username} ${verb()} ${article} ${weight(10)} ${fish} for ${(Math.ceil(Math.random() * 11) + 1)} hours. ${ending(username, fish)}`
}

export { writeStory }
