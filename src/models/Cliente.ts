import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("clientes")
class Cliente {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    cpf: string;
    
    @Column()
    nascimento: Date;

    @Column()
    genero: string;

    @Column()
    civil: string;

    @Column()
    rg: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Cliente };