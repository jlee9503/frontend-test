import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/style.css";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import LikeButton from "./LikeButton";

const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/comments",
});

function Comment() {
	const [users, setUsers] = useState([]);
	const [showMoreComments, setShowMoreComments] = useState({
		commentsToShow: 5,
		expandedAll: false,
	});

	const showMore = () => {
		showMoreComments.commentsToShow !== users.length
			? setShowMoreComments({
					commentsToShow: showMoreComments.commentsToShow + 5,
					expandedAll: false,
			  })
			: setShowMoreComments({
					commentsToShow: users.length,
					expandedAll: true,
			  });
	};

	useEffect(() => {
		const fetchData = async () => {
			// Generate the number of comments randomly between 1 - 50
			let randomNumComments = Math.floor(Math.random() * 50) + 1;
			await api.get(`?_limit=${randomNumComments}`).then((res) => {
				setUsers(res.data);
			});
		};
		fetchData();
	}, []);

	return (
		<div className="comment__container">
			<div className="comment__box">
				<h2>
					<ChatRoundedIcon
						style={{
							marginBottom: "-5px",
							marginLeft: "10px",
							marginRight: "10px",
							fontSize: "1.5rem",
						}}
					/>
					{`COMMENTS (${users.length})`}
				</h2>
				{users.slice(0, showMoreComments.commentsToShow).map((user, idx) => (
					<div key={idx} className="comment__info">
						<h3 className="name">
							{user.name} <span className="email">{user.email}</span>
						</h3>
						<div className="comment">
							<p>{user.body}</p>
							<LikeButton />
						</div>
					</div>
				))}
				{showMoreComments.commentsToShow >= users.length ? (
					<p className="endCommentMsg">---End of comments---</p>
				) : (
					<button className="showMoreBtn" onClick={showMore}>
						Load more comments...
					</button>
				)}
			</div>
		</div>
	);
}

export default Comment;
