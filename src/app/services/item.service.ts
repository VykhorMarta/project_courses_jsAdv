import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { Http, Headers } from "@angular/http";
import { environment } from "../../environments/environment";



@Injectable()
export class ItemService {


endpoints:any = environment.local;
constructor(private http: Http){

}

addHeaders(headers: Headers){
    headers.append("Access-Control-Allow-Origin", "*");
}


    items: Item[] = [
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg"),
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg"),
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg"),
        new Item("Title", "Desc", 300, "http://www.marketburgerwpg.com/wp-content/uploads/sites/194/2015/07/shutterstock_361890554.jpg")
    ]

    getAllItems() {
        let headers = new Headers({});
        this.addHeaders(headers);
        return this.http.get(this.endpoints.allItems, {headers: headers});
    }

    getItemById(id) {
        let headers = new Headers({});
        this.addHeaders(headers);
        return this.http.get(this.endpoints.getById + id, {headers: headers})
    }
}

