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
		<div class="row d-flex mainBox">
    
		<div class="col-9 text-left bg-white h-100 px-0"> 
			<div class="col-12 bg-3 py-2">
				<button class="reloadBtn mr-3"><i class="demo-icon icon-arrows-cw"></i>RELOAD SCHEDULER</button>
				<button class="resetBTn"><i class="demo-icon icon-recycle"></i>RESET DATABASE</button>
			</div>
			
			<div class="col-12 border border-left-0 bg-3">
				<div class="row d-flex align-items-center shadow-sm">
					<div class="col-2">
						Name
					</div>
					<div class="col-10 text-center border-left">
						<div>MON 05/21</div>
						<div class="row d-lfex justify-content-between  border-top timeDiv">
							<div class="col-1">6 AM</div> 
							<div class="col-1">7 AM</div> 
							<div class="col-1">8 AM</div> 
							<div class="col-1">9 AM</div> 
							<div class="col-1">10 AM</div> 
							<div class="col-1">11 AM</div> 
							<div class="col-1">12 PM</div> 
							<div class="col-1">1 PM</div> 
							<div class="col-1">2 PM</div> 
							<div class="col-1">3 PM</div> 
							<div class="col-1">4 PM</div> 
							<div class="col-1">5 PM</div> 
						</div>
					</div>
				</div>
			</div>
			
			
			<div class="col-12 border-bottom">
				<div class="row">
					<div class="col-2 py-2">
						Car
					</div>
					<div class="col-10 text-center border-left  border-right  py-2">
						draggable element
					</div>
				</div>
			</div>
			
			<div class="col-12 border-bottom">
				<div class="row">
					<div class="col-2 py-2">
						Car
					</div>
					<div class="col-10 text-center border-left  border-right  py-2">
						draggable element
					</div>
				</div>
			</div>
				
			
		</div>
    
		<div class="col-3 sidenav h-100">
			<div class="row">
				<div class="col-12  taskTabs py-3">
					<div> 
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
							<span class="taskInfo"> Task 1</span> 
							<span class="timeLaps font-weight-bold">2h</span>
						</a>
					</div>
					<div> 
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
							<span class="taskInfo"> Task 2</span> 
							<span class="timeLaps font-weight-bold">3h</span>
						</a>
					</div>
					<div> 
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
							<span class="taskInfo"> Task 3</span> 
							<span class="timeLaps font-weight-bold">1h</span>
						</a>
					</div>
					<div> 
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
							<span class="taskInfo"> Task 4</span> 
							<span class="timeLaps font-weight-bold">4h</span>
						</a>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	);
}

export default Scheduler;
