import { MarketOpportunity } from "./Market"

export interface Trilha {
    id: string
    title: string
    description: string
    longDescription: string
    image: string
    level: string
    duration: string
    progress: number
    students: string
    rating: number
    modules: Module[]
    skills: string[]
    prerequisites: string[]
    salary: string
    jobOpportunities: number
    marketIntelligence: {
      demandLevel: "alta" | "média" | "baixa"
      growthProjection: string
      averageHiringTime: string
      topHiringCompanies: string[]
      realOpportunities: MarketOpportunity[]
      skillsInDemand: string[]
      marketInsights: string[]
    }
  }

  export interface Content {
    id: string
    title: string
    type: "video" | "article" | "course"
    platform: string
    duration: string
    free: boolean
    completed?: boolean
    url: string
    description: string
  }
  
  export interface Module {
    id: string
    title: string
    description: string
    contents: Content[]
    completed: boolean
  }
  