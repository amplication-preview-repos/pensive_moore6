import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WallpaperService } from "./wallpaper.service";
import { WallpaperControllerBase } from "./base/wallpaper.controller.base";

@swagger.ApiTags("wallpapers")
@common.Controller("wallpapers")
export class WallpaperController extends WallpaperControllerBase {
  constructor(protected readonly service: WallpaperService) {
    super(service);
  }
}
