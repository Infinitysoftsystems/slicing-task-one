// This is our dummy Scheduler design. It will be updated as er functional requirements.
import React, { useState, useEffect } from "react";

var minSlotTime = 30; //We are taking this to be a 30 min minimum Slot 
var minSlotPercentage = 5; //We will be showing 10 Hours on the board so Minimum slot 600/30 = 20% => min slot will be  100/20 => 5 percante 
var allTasks = [
	{
		id: 1,
		title: "Task 1",
		timeInHours: 2,
		timeInMinutes: 120,
		isScheduled: true,
		startTime: 600, //Taking start hour in minutues of the day
		position: {
			x: 30,
			y: 30
		}
	},
	{
		id: 2,
		title: "Task 2",
		timeInHours: 1.5,
		timeInMinutes: 90,
		isScheduled: false,
		startTime: 0, //Taking start hour in minutues of the day
		position: {
			x: undefined,
			y: undefined
		}
	},
	{
		id: 3,
		title: "Task 3",
		timeInHours: 1,
		timeInMinutes: 120,
		isScheduled: false,
		startTime: 0, //Taking start hour in minutues of the day
		position: {
			x: undefined,
			y: undefined
		}
	}
]
const Scheduler = () => {
	const [tasks, setTasks] = useState(allTasks);
	
	return (
		<div class="col-3 sidenav h-100">
			<div class="row">
				<div class="col-12 bg-2 text-white font-weight-normal">
					Side panel
			</div>
			</div>

			<div class="row">
				<div class="col-12">
					<ul class="list-unstyled taskTabs py-3">
						<li>
							<a href="javascript:void();" class="d-flex justify-content-between">
								<span class="taskInfo"> Task 1</span>
								<span class="timeLaps font-weight-bold">2h</span>
							</a>
						</li>
						<li>
							<a href="javascript:void();" class="d-flex justify-content-between">
								<span class="taskInfo"> Task 2</span>
								<span class="timeLaps font-weight-bold">3h</span>
							</a>
						</li>
						<li>
							<a href="javascript:void();" class="d-flex justify-content-between">
								<span class="taskInfo"> Task 3</span>
								<span class="timeLaps font-weight-bold">1h</span>
							</a>
						</li>
						<li>
							<a href="javascript:void();" class="d-flex justify-content-between">
								<span class="taskInfo"> Task 4</span>
								<span class="timeLaps font-weight-bold">4h</span>
							</a>
						</li>
					</ul>
				</div>
			</div>

		</div>
	);
}

export default Scheduler;
