import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/ItemTypes';
import { TaskContext } from '../Container/Container';
import Task from '../Task';


//We are taking this to be a 30 min minimum Slot 
var minSlotTime = 30;
// There are 12 hours on the board and if we calcuale 
// totalWidth/(number of slots in slots in 1 hours)
var minSlotPercentage = 100 / (12 * 2);
// Slot will be in minutes from start and each will be of 30 min 
//We are showing from 6 AM which means 6*60 = 360 minutes from the start of the day
var slots = [
	360,
	390,
	420,
	450,
	480,
	510,
	540,
	570,
	600,
	630,
	660,
	690,
	720,
	750,
	780,
	810,
	840,
	870,
	900,
	930,
	960,
	990,
	1020,
]
const Scheduler = ({ data, tasks }) => {

	const { markAsScheduled } = useContext(TaskContext);


	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.TASK,
		drop: (item, monitor) => {
			debugger;
			markAsScheduled(item.task.id, data.id)
			// { name: 'Scheduler' + data.id }
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	return (
		<div class="col-12 border-bottom">
			<div class="row">
				<div class="col-2 py-2">
					{data.title}
				</div>
				<div class="col-10 text-center border-left  border-right  py-2 p-0"
					ref={drop}
					role={'Scheduler' + data.id}
					style={{ position: 'relative' }}>
					{tasks.map((task, index) => {
						var taskPillwidth = (task.timeInMinutes / minSlotTime) * minSlotPercentage;
						// offset will be how much space we will have to leave since the start
						var taskStartIndex = slots.indexOf(task.startTime);
						var taskOffset = taskStartIndex * minSlotPercentage;
						return <Task data={task} isResheduled={true}
							customStyle={{ taskPillwidth, taskOffset }} ></Task>

					})}
				</div>
			</div>
		</div >
	);
};

export default Scheduler