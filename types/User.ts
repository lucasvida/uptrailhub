export interface UserStorage {
    id: string
    email: string
    signature: "free" | "premium"
    isAuthenticated: boolean
    loginTime: string
  }

  
export interface User {
    id: string
    name: string
    email: string
    password: string
    signature: "free" | "premium"
  }
