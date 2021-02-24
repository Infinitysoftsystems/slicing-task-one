import Scheduler from '../../ui-components/Scheduler';
import Header from '../../ui-components/Header';
import thumb from '../../assets/img/thumb.jpg'

// This is our Home component. 
const Home = () => {
  return (
    <div class="container-fluid  bg-grey ">    
  
    <div class="row d-flex mainBox">
      
      <div class="col-9 text-left bg-white h-100 px-0"> 
            {
                //Header is a reuable component and will be integrated in routes in future purpous.
            }
          <Header />
         <div class=" bg-3 py-2">
             <div class="col-12">
                  <button class="reloadBtn mr-2"><i class="demo-icon icon-arrows-cw"></i>RELOAD SCHEDULER</button>
                  <button class="resetBTn"><i class="demo-icon icon-recycle"></i>RESET DATABASE</button>
             </div>
         </div>
         <div class="row">
              <div class="col-12">
                  <img class="w-100" src={thumb} />
              </div>
         </div>
      </div>
      {
          //Scheduler is also our reuable component and intetrated from ui-components
      }
      <Scheduler />
    </div>
  </div>
  );
}

export default Home;
