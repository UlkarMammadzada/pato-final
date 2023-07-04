export interface IMenu {
  name: string
  items: IMenuItem[]
}

export interface IMenuItem {
    name: string
    price: string
    description: string
    image?: string
  }

