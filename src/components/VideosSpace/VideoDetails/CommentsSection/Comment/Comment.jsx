import React, {useState} from 'react';
import { useStore } from '../../../../../store/StoreProvider';
import Moment from 'react-moment';
import './Comment.styles.css';

const Comment = (props) => {
    const [showComment, setShowComment] = useState(false);
    const { theme } = useStore();

    const showFullComment = (e) => {
        console.log(window);
        let totalHeight = (Math.ceil(props.text.length / 140)*25) + 50;
        if(showComment){
            setShowComment(false);
            e.target.parentElement.parentElement.parentElement.style.height = `100px`;
        }else{
            setShowComment(true);
            e.target.parentElement.parentElement.parentElement.style.height = `${totalHeight}px`;
        }
    }

    return(
        <div className="commentBoxBox">
            <div className="commentBox">
                <img src={props.profilePic} alt={props.id}/>
                <div>
                    <span className={`commentAuthor ${theme === "light"?"colorBlack":"colorWhite"}`}>
                        {props.authorDisplayName}
                    </span>
                    <Moment className={`commentpublished ${theme === "light"?"colorBlack":"colorWhite"}`} fromNow>{`${props.publishedAt.slice(0,16)}-0000`}</Moment>
                    <span className={`commentText ${theme === "light"?"colorBlack":"colorWhite"}`}>
                        {showComment?props.text:props.text.slice(0,300)}
                        {props.text.length>300?showComment?
                        <span className={`FVSeeMore ${theme === "light"?"colorBlack":"colorSkyBlue"}`} onClick={showFullComment}>...see less</span>:
                        <span className={`FVSeeMore ${theme === "light"?"colorBlack":"colorSkyBlue"}`} onClick={showFullComment}>...see more</span>:null}</span>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Comment;