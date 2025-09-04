export interface Mentoria {
    id: string
    mentor: string
    topic: string
    date: string
    duration: string
    rating: number
  }

  export interface Mentor {
    id: string
    name: string
    title: string
    company: string
    location: string
    experience: string
    rating: number
    reviews: number
    specialties: string[]
    avatar: string
    price: string
    available: boolean
    bio: string
    languages: string[]
    responseTime: string
    sessionsCompleted: number
  }
