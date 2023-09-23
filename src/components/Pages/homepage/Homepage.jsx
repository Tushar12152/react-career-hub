import Banner from "./banner/Banner";
import Category from "./banner/category/Category";
import Featured from "./featured/Featured";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
              
        </div>
    );
};

export default Homepage;