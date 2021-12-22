import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("valors")
class Valor {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    id_produto: number;
    
    @Column({ type: "float" })
    valor: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        /*if(!this.id){

        }*/
    }

}

export { Valor };