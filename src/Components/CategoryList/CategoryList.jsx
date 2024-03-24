import Card from "../Cart/Card";
import UseDonationData from "../Hooks/UseDonationData";
const CategoryList = () => {
    const {data,loading} = UseDonationData ()
    
    return (
        <div className="grid md:grid-cols-4 gap-5">
            {
                data.map (item => <Card key={item.id} item={item}></Card>)
            }
        </div>
    );
};

export default CategoryList;