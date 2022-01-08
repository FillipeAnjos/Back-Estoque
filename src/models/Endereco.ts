import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("enderecos")
class Endereco {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_cliente: number;

    @Column()
    rua: string;

    @Column()
    numero: number;

    @Column()
    bairro: string;

    @Column()
    municipio: string;

    @Column()
    uf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Endereco };