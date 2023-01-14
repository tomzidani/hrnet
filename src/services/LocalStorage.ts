const LocalStorage = {
  get(id: string) {
    return JSON.parse(localStorage.getItem(id)!)
  },
  set(id: string, value: any) {
    return localStorage.setItem(id, JSON.stringify(value))
  },
  remove(id: string) {
    return localStorage.removeItem(id)
  },
}

export default LocalStorage
