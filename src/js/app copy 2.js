import { interval, Observable} from 'rxjs';
import { map, pluck }  from 'rxjs/operators';
import PostLoader  from '../components/post_loader';




window.addEventListener('DOMContentLoaded', () => {
    const resultData = [];
    const postLoader = new PostLoader();
    const observable = Observable.create(async function (observer) {
        const lastestPosts = await fetch('http://localhost:7070/posts/lastest', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        })
        .then(responce => responce.json())
        .then((postData) => {
            // observer.next(postData.data);
            postData.data.forEach(async (postObj) => {
                const postId = postObj.id;
                await fetch(`http://localhost:7070/posts/${postId}/comments/lastest`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
                })
                .then(responce => responce.json())
                .then((commentsData) => {
                    observer.next(commentsData);
                    // resultData.posts = resultData.postData.data;
                    // resultData.comments = commentsData.data;
                    // observer.next(resultData);
                });
            });
        });

        
    });

    observable.subscribe({
        next: (data) => {
            console.log(data)
        },
        error: err => console.error('something wrong occurred: ' + err),
        complete: (data) => {
            console.log(data)
        },
    });

    
});

