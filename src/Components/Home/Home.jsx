import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div  className="lg:my-10 lg:mx-20">
            <CategoryList></CategoryList>
            </div>
            
        </div>
    );
};

export default Home;