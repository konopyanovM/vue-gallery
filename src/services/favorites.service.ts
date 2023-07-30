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
  get(): string[] {
    // Filter for delete empty strings
    return toArray(favorites).filter((item) => item);
  },
};

const toString = (set: Set<string>): string => {
  return Array.from(set).join(",");
};

const toArray = (set: Set<string>): string[] => {
  return Array.from(set);
};
