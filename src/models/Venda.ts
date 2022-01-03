import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("vendas")
class Venda {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_fechamento: number;

    @Column()
    id_user: number;

    @Column({ type: "float" })
    desconto: number;

    @Column()
    modalidade: string;

    @Column({ type: "float" })
    valor_total: number;

    @Column()
    data: Date;

    @Column()
    obs: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Venda };