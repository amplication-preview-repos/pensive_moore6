import * as graphql from "@nestjs/graphql";
import { WallpaperResolverBase } from "./base/wallpaper.resolver.base";
import { Wallpaper } from "./base/Wallpaper";
import { WallpaperService } from "./wallpaper.service";

@graphql.Resolver(() => Wallpaper)
export class WallpaperResolver extends WallpaperResolverBase {
  constructor(protected readonly service: WallpaperService) {
    super(service);
  }
}
