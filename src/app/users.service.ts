import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class UsersSrervice {

    constructor(private http: Http) {

    }

    getUsers() {
        return  this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=6&nat=gb%27)')
            .map(function(response) {
                return response.json();
            }) 
            .map(response => response.results)
            .map(users => {
                return users.map(u => {
                    return {
                        name: u.name.first + ' ' + u.name.last,
                        image: u.picture.large
                    }
                })
            })
    }

    users = [
        {name: 'Danylo Horiachko'},
        {name: 'Yuriy Morykvas'},
        {name: 'Taras Koval'},
        {name: 'Max Mykytka'},
        {name: 'Dmytro Morykvas'}
      ]
}