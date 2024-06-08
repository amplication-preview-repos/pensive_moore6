import { Wallpaper as TWallpaper } from "../api/wallpaper/Wallpaper";

export const WALLPAPER_TITLE_FIELD = "id";

export const WallpaperTitle = (record: TWallpaper): string => {
  return record.id?.toString() || String(record.id);
};
