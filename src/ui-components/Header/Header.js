import logo from '../../assets/img/logo.png'

// Header section for the logo and accessing settings

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-1 w-100">
                  <div class="col-12 d-flex  justify-content-between">
                      <a class="navbar-brand align-middle" href="javascript:void();">
                          <img src={logo} alt="CrudManager" /> CrudManager demo
                      </a> 
                      <ul class="navbar-nav navbar-nav align-items-center">
                          <li class="nav-item">
                              <button class="defultBTn"><i class="demo-icon icon-move text-white"> </i></button>
                          </li>
                          <li class="nav-item px-2">
                              <button class="defultBTn"><i class="demo-icon icon-code text-white"></i></button>
                          </li>
                          <li class="nav-item">
                              <button class="defultBTn"><i class="demo-icon icon-cog text-white"></i></button>
                          </li>
                      </ul>
                  </div>
              </nav>
  );
}

export default Header;
