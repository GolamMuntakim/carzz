import About from "./About";
import Banner from "./Banner";
import Services from "./Services";


const HomePage = () => {
    return (
        <div className=" bg-white">
           <Banner></Banner>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default HomePage;