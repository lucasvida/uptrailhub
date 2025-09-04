export interface UserRanking {
    id: number
    name: string
    email: string
    points: number
    level: number
    trilhasCompletas: number
    mentoriasRealizadas: number
    position: number
    badge: string
    avatar: string
  }
  
export interface UserStats {
    totalPoints: number
    level: number
    trilhasCompletas: number
    mentoriasRealizadas: number
    nextLevelPoints: number
    currentLevelPoints: number
}