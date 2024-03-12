import { formatDate } from "../../utils/formatDate";

const Comment = ({comment}) => {
    // text to commentText: assigned a different variable name (commentText) to a destructured property (text) during the process of destructuring it
    const {text: commentText, rating, author, date} = comment;

    return (
        <p>
            {commentText}
            <br />
            {rating}/5 stars --{author}, {formatDate(date)}
        </p>
    );
};

export default Comment;