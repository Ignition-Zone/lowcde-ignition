import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site } from './entities/site.mongo.entity';
import { BusinessException } from '../common/exceptions/business.exception';

@Injectable()
export class SiteService {
  constructor(
    @Inject('SITE_REPOSITORY')
    private siteRepository: MongoRepository<Site>,
  ) {}

  async create(createSiteDto: CreateSiteDto) {
    try {
      const result = await this.siteRepository.save(createSiteDto);
      return result;
    } catch (err) {
      console.log('err:', err);
      throw new BusinessException(err);
    }
  }

  findAll() {
    return `This action returns all site`;
  }

  findOne(id) {
    return this.siteRepository.findOne(id);
  }

  update(id: number, updateSiteDto: UpdateSiteDto) {
    return `This action updates a #${id} site`;
  }

  remove(id: number) {
    return `This action removes a #${id} site`;
  }
}
