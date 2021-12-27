import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("quantidades")
class Quantidade {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_produto: number;
    
    @Column()
    quantidade: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Quantidade };