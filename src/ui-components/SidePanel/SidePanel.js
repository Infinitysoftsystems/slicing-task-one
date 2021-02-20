// This is our dummy sidepanel design. It will be updated as er functional requirements.
const SidePanel = () => {
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
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
							<span class="taskInfo"> Task 1</span> 
							<span class="timeLaps font-weight-bold">2h</span>
						</a>
					</li>
					<li> 
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
							<span class="taskInfo"> Task 2</span> 
							<span class="timeLaps font-weight-bold">3h</span>
						</a>
					</li>
					<li> 
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
							<span class="taskInfo"> Task 3</span> 
							<span class="timeLaps font-weight-bold">1h</span>
						</a>
					</li>
					<li> 
						<a href="javascript:void();"  class="d-flex justify-content-between"> 
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
  
  export default SidePanel;
  