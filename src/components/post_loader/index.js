export default class PostLoader {
    constructor() {
        this.appContainer = document.querySelector('.app-container');
    }

    createPost(postData) {
        const postWrap = document.createElement('div');
        const postAutorHeader = document.createElement('div');
        const postAutorInfoRow = document.createElement('div');
        const postInfoImg = document.createElement('div');
        const postImg = document.createElement('img');
        const postAuthorInfo = document.createElement('div');
        const postAuthorName = document.createElement('div');
        const postAuthorDate = document.createElement('div');
        const postImgContainer = document.createElement('div');
        const postImgMain = document.createElement('img');
        const postContent = document.createElement('div');
        const postCommentsTitle = document.createElement('div');
        const postCommentsWrap = document.createElement('div');

        postImg.setAttribute('src', postData.avatar);
        postAuthorName.textContent = postData.author;
        postImgMain.setAttribute('src', postData.image);
        postContent.textContent = postData.title;
        postAuthorDate.textContent = new Date(postData.created).toLocaleString('ru');
        postCommentsTitle.textContent = 'Lastest Comments'
        postWrap.setAttribute('post-id', postData.id);
        postCommentsWrap.setAttribute('post-id', postData.id);

        postWrap.classList.add('post-wrap');
        postAutorHeader.classList.add('post-author-header');
        postAutorInfoRow.classList.add('post-author-info-row');
        postInfoImg.classList.add('post-author-img');
        postAuthorInfo.classList.add('post-autor-info');
        postAuthorName.classList.add('post-author-name');
        postAuthorDate.classList.add('post-author-date');
        postImgContainer.classList.add('post-image-container');
        postContent.classList.add('post-content');
        postCommentsTitle.classList.add('post-comments-header');
        postCommentsWrap.classList.add('post-comments-container');

        
        postInfoImg.appendChild(postImg);
        postAuthorInfo.appendChild(postAuthorName);
        postAuthorInfo.appendChild(postAuthorDate);
        postAutorInfoRow.appendChild(postInfoImg);
        postAutorInfoRow.appendChild(postAuthorInfo);
        postAutorHeader.appendChild(postAutorInfoRow);
        postImgContainer.appendChild(postImgMain);
        postWrap.appendChild(postAutorHeader);
        postWrap.appendChild(postImgContainer);
        postWrap.appendChild(postContent);
        postWrap.appendChild(postCommentsTitle);
        postWrap.appendChild(postCommentsWrap);
        this.appContainer.appendChild(postWrap)
    
    }

    createComment(dataComments) {
        const targetPost = document.querySelector(`.post-comments-container[post-id="${dataComments.post_id}"]`);
        const commentUserWrap = document.createElement('div');
        const commentUserImgWrap = document.createElement('div');
        const commentUserImg = document.createElement('img');
        const commentUserInfoWrap = document.createElement('div');
        const commentUserName = document.createElement('div');
        const commentUserContent = document.createElement('div');
        const commentUserDate = document.createElement('div');

        commentUserImg.setAttribute('src', dataComments.avatar);
        commentUserName.textContent = dataComments.author;
        commentUserContent.textContent = dataComments.content;
        commentUserDate.textContent = new Date(dataComments.created).toLocaleString('ru');

        commentUserWrap.classList.add('comment-user-item');
        commentUserImgWrap.classList.add('comments-user-img');
        commentUserInfoWrap.classList.add('comments-user-info');
        commentUserName.classList.add('comment-user-name');
        commentUserContent.classList.add('comment-user-content');
        commentUserDate.classList.add('comment-user-date');

        commentUserImgWrap.appendChild(commentUserImg);
        commentUserWrap.appendChild(commentUserImgWrap);
        commentUserInfoWrap.appendChild(commentUserName);
        commentUserInfoWrap.appendChild(commentUserContent);
        commentUserWrap.appendChild(commentUserInfoWrap);
        commentUserWrap.appendChild(commentUserDate);
        targetPost.appendChild(commentUserWrap)

    }
}