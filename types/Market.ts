export interface MarketOpportunity {
    company: string
    position: string
    location: string
    salary: string
    type: "remote" | "hybrid" | "presencial"
    urgency: "alta" | "média" | "baixa"
    requirements: string[]
    postedDays: number
    applicants: number
  }
