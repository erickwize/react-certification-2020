import React from 'react';
import { useStore } from '../../../../store/StoreProvider';
import Comment from './Comment/Comment';
import './CommentsSection.styles.css';

const CommentsSection = () => {
    const {comments, theme} = useStore();
    return(
        <span className="commentsSection">
            {
                comments?comments.length === 0?<h3>There are no comments</h3>:
                comments.map(element => 
                  <Comment 
                    text = {element.snippet.topLevelComment.snippet.textOriginal}
                    profilePic = { element.snippet.topLevelComment.snippet.authorProfileImageUrl}
                    authorDisplayName = { element.snippet.topLevelComment.snippet.authorDisplayName }
                    publishedAt = { element.snippet.topLevelComment.snippet.publishedAt }
                    key = { element.id }
                    id = { element.id } 
                    />
                ):
                <h3 className = {theme === "light"?"colorGray":"colorWhite"}>Comments are disabled</h3>
            }
        </span>
    );
}

export default CommentsSection;