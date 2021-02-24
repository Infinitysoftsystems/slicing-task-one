import Scheduler from '../../ui-components/Scheduler';
import Header from '../../ui-components/Header';
import thumb from '../../assets/img/thumb.jpg'

// This is our Home component. 
const Home = () => {
  return (
    <div class="container-fluid  bg-grey ">    
    <div class="row">
	<div class="col-9 px-0">
		{
			//Header is a reuable component and will be integrated in routes in future purpous.
		}
	  <Header />
	</div>
	<div class="col-3 bg-2 text-white font-weight-normal">
		Side panel
	</div>
</div>
    
    {
          //Scheduler is also our reuable component and intetrated from ui-components
      }
      <Scheduler />
  </div>
  );
}

export default Home;
