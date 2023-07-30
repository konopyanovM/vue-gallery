const KEY = "FAVORITES";
const favorites: Set<string> = new Set(
  localStorage.getItem(KEY)?.split(",") || []
);

export const FavoritesService = {
  toggle(id: string): void {
    if (this.has(id)) favorites.delete(id);
    else favorites.add(id);

    localStorage.setItem(KEY, toString(favorites));
  },
  has(id: string): boolean {
    return favorites.has(id);
  },
};

const toString = (set: Set<any>): string => {
  return Array.from(set).join(",");
};
