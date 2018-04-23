import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";


@Injectable()
export class ItemService {

    items: Item[] = [
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg"),
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg"),
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg"),
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg")
    ]

    getAllItems() {
        return this.items;
    }
}