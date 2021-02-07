import React, { useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const likeBtnStyle = {
	fontSize: "1rem",
	marginRight: "10px",
};

function LikeButton() {
	// Randomly assign number of likes and dislikes
	let randomLikes = Math.floor(Math.random() * 150);
	let randomDislikes = Math.floor(Math.random() * 150);

	const [likeBtn, setLikeBtn] = useState({
		likes: randomLikes,
		dislikes: randomDislikes,
	});
	const countLikes = () => {
		setLikeBtn({
			likes: likeBtn.likes + 1,
			dislikes: likeBtn.dislikes,
		});
	};

	const countDislikes = () => {
		setLikeBtn({
			likes: likeBtn.likes,
			dislikes: likeBtn.dislikes + 1,
		});
	};
	return (
		<div className="likeBtn">
			<p>
				{likeBtn.likes}
				<ThumbUpIcon
					style={likeBtnStyle}
					onClick={countLikes}
					className="thumbsup"
				/>
				{likeBtn.dislikes}
				<ThumbDownIcon
					style={likeBtnStyle}
					onClick={countDislikes}
					className="thumbsdown"
				/>
			</p>
		</div>
	);
}

export default LikeButton;
