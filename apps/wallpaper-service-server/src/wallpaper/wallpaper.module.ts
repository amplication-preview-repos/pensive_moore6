import { Module } from "@nestjs/common";
import { WallpaperModuleBase } from "./base/wallpaper.module.base";
import { WallpaperService } from "./wallpaper.service";
import { WallpaperController } from "./wallpaper.controller";
import { WallpaperResolver } from "./wallpaper.resolver";

@Module({
  imports: [WallpaperModuleBase],
  controllers: [WallpaperController],
  providers: [WallpaperService, WallpaperResolver],
  exports: [WallpaperService],
})
export class WallpaperModule {}
