import { WallpaperWhereInput } from "./WallpaperWhereInput";
import { WallpaperOrderByInput } from "./WallpaperOrderByInput";

export type WallpaperFindManyArgs = {
  where?: WallpaperWhereInput;
  orderBy?: Array<WallpaperOrderByInput>;
  skip?: number;
  take?: number;
};
