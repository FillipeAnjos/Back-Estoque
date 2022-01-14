import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("fornecedores")
class Fornecedor {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    cnpj: string;

    @Column()
    razao: string;
    
    @Column()
    falarcom: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Fornecedor };