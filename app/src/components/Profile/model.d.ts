export interface ProfileItem {
  header: string
  value: string
  link?: boolean
}

export interface ProfileProps {
  title: string
  subtitle?: string
  items: ProfileItem[]
}
