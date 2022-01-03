import { EntityRepository, Repository } from "typeorm";
import { Item } from "../models/Item";

@EntityRepository(Item)
class ItemRepositories extends Repository<Item>{


}

export { ItemRepositories }