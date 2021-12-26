import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Estoque } from './Estoque';

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

    @Column({ type: "float" })
    valor: number;

    @Column()
    obs: string;

    @Column()
    status: boolean

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /*@OneToMany(type => Estoque, estoques => estoques.id_produto)
    estoques: Estoque[];*/

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Produto };