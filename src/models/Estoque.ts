import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Produto } from './Produto';

@Entity("estoques")
class Estoque {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_produto: number;

    @Column({nullable: true})
    entrada: number;

    @Column({nullable: true})
    saida: number;

    @Column()
    saldo: number;

    @Column({ type: "float" })
    valor_atual: number;

    @Column()
    acao: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    /*@ManyToOne(type => Produto, produtos => produtos.id)
    produtos: Produto;*/

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Estoque };