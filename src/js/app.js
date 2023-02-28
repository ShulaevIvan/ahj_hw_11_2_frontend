import { ajax } from "rxjs/ajax";
import { fromEvent, forkJoin } from "rxjs";
import { map, switchMap, pluck,  merge } from "rxjs/operators";
import PostLoader  from '../components/post_loader';




window.addEventListener('DOMContentLoaded', () => {
    const resultData = [];
    const postLoader = new PostLoader();

    const postStream$ = ajax.getJSON(`http://localhost:7070/posts/latest`)
    .pipe(
        map(({ data }) => data
            .map((post) => ajax.getJSON(`http://localhost:7070/posts/${post.id}comments/lastest`)
                .pipe(
                    // eslint-disable-next-line no-shadow
                    map(({ data }) => ({
                        ...post,
                        comments: data,
                    })),
                ))),
        switchMap((postObs) => forkJoin(postObs)),
    )
    .subscribe({
        next: (data) => console.log(data),
    });

});

