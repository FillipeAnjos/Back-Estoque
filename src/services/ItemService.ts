import { getCustomRepository } from "typeorm";
import { ItemRepositories } from "../repositories/ItemRepositories";

class ItemService{

    async salvarItem(){

        console.log("Estou dentro do service do item");

    }

}

export { ItemService }