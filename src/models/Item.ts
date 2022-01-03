import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("itens")
class Item {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_venda: number;
    
    @Column()
    id_produto: number;

    @Column({ type: "float" })
    valor_atual: number;

    @Column()
    unidade: number;

    @Column()
    data: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Item };