import { forkJoin, pipe } from 'rxjs';
import {  map,switchMap, mergeMap,  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import PostLoader  from '../components/post_loader';




window.addEventListener('DOMContentLoaded', () => {
    const resultData = [];
    const postLoader = new PostLoader();

    const postStream$ = ajax.getJSON(`http://localhost:7070/posts/lastest`).pipe(
        map(({ data }) => data),
        switchMap((data) => {
            return data
        }),
        map((post) => ajax.getJSON(`http://localhost:7070/posts/${post.id}/comments/lastest`).pipe(
            map(({ data }) => ({
                comments: data,
                post: post,
            }))
        )),
    )

    postStream$.subscribe((obs) => {
        obs.subscribe((value) => {
            console.log(value)
        })
    })

});

