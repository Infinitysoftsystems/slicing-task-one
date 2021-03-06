// This is our dummy Scheduler design. It will be updated as er functional requirements.
import React, { useState, useCallback, createContext } from "react";
import Task from "../Task";
import Scheduler from "../Scheduler";

export const TaskContext = createContext({ markAsScheduled: null });


var allTasks = [
	{
		id: 1,
		title: "Task 1",
		timeInHours: 2,
		timeInMinutes: 120,
		isScheduled: true,
		startTime: 990, //Taking start hour in minutues of the day
		schedulerGroup: 2,
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
		isScheduled: true,
		startTime: 540, //Taking start hour in minutues of the day
		schedulerGroup: 3,
		position: {
			x: undefined,
			y: undefined
		}
	},
	{
		id: 3,
		title: "Task 3",
		timeInHours: 2,
		timeInMinutes: 120,
		isScheduled: true,
		startTime: 720, //Taking start hour in minutues of the day
		schedulerGroup: 5,
		position: {
			x: undefined,
			y: undefined
		}
	},
	{
		id: 4,
		title: "Task 4",
		timeInHours: 6,
		timeInMinutes: 360,
		isScheduled: false,
		startTime: 0, //Taking start hour in minutues of the day
		schedulerGroup: undefined,
		position: {
			x: undefined,
			y: undefined
		}
	},
	{
		id: 5,
		title: "Task 5",
		timeInHours: 3,
		timeInMinutes: 180,
		isScheduled: false,
		startTime: 0, //Taking start hour in minutues of the day
		schedulerGroup: undefined,
		position: {
			x: undefined,
			y: undefined
		}
	},
	{
		id: 6,
		title: "Task 6",
		timeInHours: 3.5,
		timeInMinutes: 210,
		isScheduled: false,
		startTime: 0, //Taking start hour in minutues of the day
		schedulerGroup: undefined,
		position: {
			x: undefined,
			y: undefined
		}
	}
	
]
var schedulerGroups = [{
	id: 1,
	title: 'Volvo',
	tasks: [1]
}, {
	id: 2,
	title: 'BMW',
	tasks: []
}, {
	id: 3,
	title: 'Audi',
	tasks: [2]
}, {
	id: 4,
	title: 'Hyundai',
	tasks: []
}, {
	id: 5,
	title: 'Kia',
	tasks: [3]
}, {
	id: 6,
	title: 'MG',
	tasks: []
}
]
const Container = () => {
	const [tasksList, setTasksList] = useState(allTasks);

	const markAsScheduled = (taskId, schedulerId) => {
		debugger;
		const task = tasksList.filter((task, index) => task.id === taskId)
		task[0].schedulerGroup = schedulerId;
		task[0].isScheduled = true
		setTasksList(tasksList.filter((task, index) => task.id !== taskId).concat(task));
	}

	function resetScheduler(e) {
		// e.preventDefault();
		// debugger
		// setTasksList(allTasks);
	}

	// const resetScheduler = useCallback(async () => {
	// 	setTasksList(allTasks);
	//   }, [tasksList])

	return (
		<TaskContext.Provider value={{ markAsScheduled }}>
			<div class="row d-flex mainBox">

				<div class="col-9 text-left bg-white h-100 px-0">
					<div class="col-12 bg-3 py-2">
						<button class="reloadBtn mr-3" onClick={(e) =>resetScheduler(e)}><i class="demo-icon icon-arrows-cw"></i>RELOAD SCHEDULER</button>
						<button class="resetBTn" onClick={(e) =>resetScheduler(e)}><i class="demo-icon icon-recycle"></i>RESET DATABASE</button>
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

					{schedulerGroups.map((scheduler, index) => {
						var schedulerTasks = tasksList.filter((task, index) => task.schedulerGroup === scheduler.id)
						return <Scheduler data={scheduler} tasks={schedulerTasks} key={scheduler.id}></Scheduler>
					})}
					{/* */}




				</div>

				<div class="col-3 sidenav h-100">
					<div class="row">
						{/* map */}
						{tasksList.map((task, index) => {
							return !task.isScheduled ? <Task data={task} key={task.id}></Task> : ''
						})}
					</div>

				</div>
			</div>
		</TaskContext.Provider>
	);
}

export default Container;
