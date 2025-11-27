import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libro')
export class Libro {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    isbn: number;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column()
    editorial: string;

    @Column()
    anio_publicacion: number;

    @Column()
    categoria: string;

    @Column()
    num_paginas: number;

    @Column()
    ubicacion: string;

    @Column()
    estado: string;

    @Column()
    copias_disponibles: number;
}
