// This is our dummy Scheduler design. It will be updated as er functional requirements.
import React from "react";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/ItemTypes';

const Task = ({ data }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		item: { task : data, type: ItemTypes.TASK },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				alert(`You dropped ${item.task.title} into ${dropResult.name}!`);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));
	const opacity = isDragging ? 0.4 : 1;
	return (

		<div class="col-12  taskTabs py-3" ref={drag} role={ItemTypes.TASK}>
			<div>
				<a href="javascript:void();" class="d-flex justify-content-between">
					<span class="taskInfo"> {data.title}</span>
					<span class="timeLaps font-weight-bold">{data.timeInHours}</span>
				</a>
			</div>

		</div>);
	// <div ref={drag} role="Box" style={{ ...style, opacity }} data-testid={`box-${name}`}>
	// 	{name}
	// </div>);
}

export default Task;
