import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("produtos")
class Produto {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    produto: string;
    
    @Column()
    categoria: string;

    @Column()
    descricao: string;

    @Column()
    cor: string;

    @Column()
    tamanho: string;

    @Column()
    obs: string;

    @Column()
    status: boolean

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Produto };