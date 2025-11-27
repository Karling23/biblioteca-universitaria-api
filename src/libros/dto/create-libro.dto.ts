import { IsNumber, IsString } from 'class-validator';

export class CreateLibroDto {
    @IsString()
    isbn: number;

    @IsString()
    titulo: string;

    @IsString()
    autor: string;

    @IsString()
    editorial: string;

    @IsNumber()
    anio_publicacion: number;

    @IsString()
    categoria: string;

    @IsNumber()
    num_paginas: number;

    @IsString()
    ubicacion: string;

    @IsString()
    estado: string;

    @IsNumber()
    copias_disponibles: number;
}
