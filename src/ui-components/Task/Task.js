// This is our dummy Scheduler design. It will be updated as er functional requirements.
import React from "react";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/ItemTypes';

const Task = ({ data, isResheduled, customStyle }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		item: { task: data, type: ItemTypes.TASK },
		end: (item, monitor) => {
			// const dropResult = monitor.getDropResult();
			// if (item && dropResult) {
			// 	alert(`You dropped ${item.task.title} into ${dropResult.name}!`);
			// }
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));
	const opacity = isDragging ? 0.4 : 1;
	return (
		<div class="col-12  taskTabs py-4" ref={drag} role={ItemTypes.TASK}>
			{data.isScheduled && isResheduled && <div>
				<div className="taskBtn" style={{
					width: customStyle.taskPillwidth + '%',
					
					border: '1px solid',
					display: 'inline',
					position: 'absolute',
					left: (parseInt(customStyle.taskOffset) > 0 ? customStyle.taskOffset  : 0) + '%'
				}}>
					{data.title}
				</div></div>}
			{!data.isScheduled &&
				<div className="taskRtBtn">
					<a href="javascript:void();" class="d-flex justify-content-between">
						<span class="taskInfo"> {data.title}</span>
						<span class="timeLaps font-weight-bold">{data.timeInHours}</span>
					</a>
				</div>}

		</div>);
}

export default Task;
