import "./Navigation.css"

function Header() {
    return (
      <>


        <nav
          className="flex items-center justify-between text-1white font-semibold py-4 px-36 sticky top-1 z-10 navigation">
       
          <div className="flex items-center flex-shrink-0 mr-6">
            <img src="src/assets/blaqbox-logo.png" alt="" />
          </div>
  
          <div className="text-lg text-1white">
            <a href="#" className="mr-16">
              Services
            </a>
            <a href="#" className="mr-16 ">
              About
            </a>
            <a href="#" className="mr-16 ">
              Project
            </a>
            <a href="#" className="">
              Contact
            </a>
          </div>
        </nav>
      </>
    );
  }
  
  export default Header;
  