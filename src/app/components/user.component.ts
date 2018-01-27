import { Component, state } from '@angular/core';

// using service
//import { PostsService } from './../services/posts.services';
import { PostsService } from '../services/posts.services';
@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent {
    name: String;
    email: String;
    address: Address;
    hobbies: String[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        console.log('constructor ran');
        this.name = 'Angular11';
        this.email = "abc@abc.com";
        this.address = {
            street: "123 st",
            city: "LA",
            state: "MA"
        }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;

        postsService.getPosts().subscribe(posts => {
            console.log(posts);
            this.posts = posts;
        });
    }


    toggleHobbies() {
        console.log("show")
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: String) {
        console.log(hobby)
        this.hobbies.push(hobby)
    }

    deleteHobby(i: number) {
        this.hobbies.splice(i, 1)

    }



}


interface Address {
    street: String
    city: String
    state: String
}

interface Post {
    userId: String
    id: String
    body: String
    title: String
}