export interface PersonalInfo {
  id: string
  name: string
  title: string
  bio: string
  email: string
  profileImage: string
  location: string
  social_profiles: {
    linkedin: string
    twitter: string
    email: string
    github: string
  }
  createdAt: Date
  updatedAt: Date
}

export type TSkills = string[][]
