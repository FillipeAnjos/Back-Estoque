import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    nome: string;
    
    @Column()
    sobre: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    nascimento: Date;

    @Column()
    genero: string;

    @Column()
    admin: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { User };