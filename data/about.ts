export interface Hobby {
  id: string
  title: string
  description: string
  image?: string
  video?: string
}

export interface AboutInfo {
  photo: string
  name: string
  tagline: string
  bio: string
  favoriteSong?: {
    title: string
    artist: string
    spotifyUrl?: string
  }
  favoriteQuote?: {
    text: string
    author: string
  }
  funFacts?: string[]
}

export const aboutInfo: AboutInfo = {
  photo: "/projects/profile2.jpg",
  name: "Alejandro Juco Imperial",
  tagline: "Integrated Engineering @ UBC | Jollibee Enthusiast",
  bio: "I'm a passionate tinkerer with technical interests spanning robotics, automation, and creative projects. ",
  favoriteSong: {
    title: "Playground",
    artist: "Yel",
    spotifyUrl: "https://open.spotify.com/track/6wxY8VU7thGHZJfdqcYRfI?si=e4f5d37096404b29",
  },
  favoriteQuote: {
    text: "Fall seven times, stand up 8",
    author: "Japanese Proverb",
  },
  funFacts: [
    "I play 5 instruments",
    "I drive stick",
    "Night owl 🦉",
  ],
}

export const hobbies: Hobby[] = [
  {
    id: "1",
    title: "Photography",
    description: "I capture my travels on my 2010 Sony Cybershot DSC-W350. I particularly enjoy taking photos of differing architectural styles.",
    image: "/projects/photography1.jpg",
  },
  {
    id: "2",
    title: "Snowboarding",
    description: "Taught myself how to board so I could feel like Chloe Kim. My favourite mountain is Cypress!",
    image: "/projects/board1.jpg",
  },
  {
    id: "3",
    title: "Music",
    description: "Listening to and discovering new artists and genres.",
    image: "/projects/board1.jpg",
  },
  {
    id: "4",
    title: "Reading",
    description: "Diving into books about technology, science, and fiction.",
    image: "/about/hobbies/reading.jpg",
  },
]
