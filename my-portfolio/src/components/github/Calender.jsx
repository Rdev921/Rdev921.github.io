import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./calender.css";

function Calender() {
	const selectLast12Months = (contributions) => {
		const today = new Date();
		const startTimestamp = new Date(
			today.getFullYear(),
			today.getMonth() - 11,
			1
		).getTime();
		const endTimestamp =
			new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

		return contributions.filter((day) => {
			const contributionTimestamp = new Date(day.date).getTime();

			return (
				contributionTimestamp >= startTimestamp &&
				contributionTimestamp <= endTimestamp
			);
		});
	};

	return (
		<div className="github-main">
			<h1 className="github-heading">Github</h1>
			<div className="github-calender">
				<GitHubCalendar
					className="github-calendar-class"
					transformData={selectLast12Months}
					username="uzairansari11"
					color={"teal"}
					blockSize={16}
					fontSize={18}
					showColorLegend
					hideTotalCount
				>
					<ReactTooltip delayShow={20} html />
				</GitHubCalendar>
			</div>
			<div className="github-stats">
				<div id="github-streak">
					<img
						src="https://github-readme-streak-stats.herokuapp.com?user=uzairansari11&theme=transparent&hide_border=true&border_radius=4.3&date_format=%5BY%20%5DM%20j&sideNums=008080&fire=008080&ring=008080&currStreakNum=008080&currStreakLabel=008080&sideLabels=008080&dates=008080&background=a6d2f0"
						alt="Uzair Stats"
						id="github-streak-stats"
					/>
				</div>
				<div id="github-language">
					<img
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=uzairansari11&layout=compact&langs_count=4&bg_color=a6d2f0&hide_border=true&text_color=008080&title_color=008080"
						alt="Uzair Stats"
						id="github-top-langs"
					/>
				</div>
				<div id="github-streak-status">
					<img
						src="https://github-readme-stats.vercel.app/api?username=uzairansari11&theme=transparent&show_icons=true&bg_color=a6d2f0&hide_border=true&text_color=008080&title_color=008080&icon_color=008080"
						alt="Uzair Stats"
						id="github-stats-card"
					/>
				</div>
			</div>
		</div>
	);
}

export default Calender;