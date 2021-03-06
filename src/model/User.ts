import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Index("pk_user", ["idUser"], { unique: true })
  @Entity("user", { schema: "public" })
  export class User {
    @PrimaryGeneratedColumn({ type: "integer", name: "id_user" })
    idUser: number;
  
    @Column("character varying", { name: "name", length: 250 })
    name: string;
  
    @Column("character varying", { name: "lastname", length: 250 })
    lastname: string;
  
    @Column("character varying", { name: "username", length: 250 })
    username: string;
  
    @Column("character varying", { name: "password", length: 50 })
    password: string;
  
    @Column("character varying", { name: "email", length: 250 })
    email: string;

    @Column("character varying", { name: "category", length: 250 })
    category: string;

    @Column("character varying", { name: "rol", length: 250 })
    rol: string;
  
    @Column("timestamp without time zone", { name: "Created" })
    Created: Date;

  
  }