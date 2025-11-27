import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libros.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ) {}

  create(createLibroDto: CreateLibroDto) {
    const libro = this.libroRepository.create(createLibroDto);
    return this.libroRepository.save(libro);
  }

  findAll() {
    return this.libroRepository.find();
  }

  findOne(id: string) {
    return this.libroRepository.findOne({ where: { id } });
  }

  async update(id: string, updateLibroDto: UpdateLibroDto) {
    const libro = await this.libroRepository.findOne({ where: { id } });
    if (!libro) return null;
    Object.assign(libro, updateLibroDto);
    return this.libroRepository.save(libro);
  }

  async remove(id: string) {
    const libro = await this.libroRepository.findOne({ where: { id } });
    if (!libro) return null;
    return this.libroRepository.remove(libro);
  }
}
