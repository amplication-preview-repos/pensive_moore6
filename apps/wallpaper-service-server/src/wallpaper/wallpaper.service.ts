import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WallpaperServiceBase } from "./base/wallpaper.service.base";

@Injectable()
export class WallpaperService extends WallpaperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
