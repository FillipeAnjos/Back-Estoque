import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("fechamentos")
class Fechamento {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ type: "float" })
    valor_total: number;
    
    @Column()
    data: Date;

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

export { Fechamento };