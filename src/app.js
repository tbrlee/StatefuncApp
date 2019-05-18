import {http} from './http';
import {ui} from './ui';

//Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post 
document.querySelector('.post-submit').addEventListener('click', SubmitPost);

//Get Posts
function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

//Submit Post
function SubmitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    //ES2015 syntax
    
    const data = {
        title, //title: title
        body //body: body
    }

    //Create Post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));
}