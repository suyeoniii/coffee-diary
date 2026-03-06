import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BrewLogModule } from './brew-log/brew-log.module';

@Module({
  imports: [PrismaModule, BrewLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
