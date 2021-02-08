import React from "react";
import { shallow } from "enzyme";
import LikeButton from "../Components/Comment/LikeButton";

describe("LikeButton", () => {
	let wrapper = shallow(<LikeButton />);

	it("correctly increments Like button count by 1", () => {
		wrapper.find(".thumbsup").simulate("click");
		expect(wrapper.find(".numLikes").text()).toEqual("1");
	});

	it("correctly increments Dislike button count by 1", () => {
		wrapper.find(".thumbsdown").simulate("click");
		expect(wrapper.find(".numDislikes").text()).toEqual("1");
	});
});
