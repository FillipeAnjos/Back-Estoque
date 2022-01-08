import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("telefones")
class Telefone {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_cliente: number;

    @Column()
    telefone: string;

    @Column()
    celular: string;

    @Column()
    celular2: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Telefone };