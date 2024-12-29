import Car from "../Car/Car.component";

const carInfo = {brands : "Ford", Model : 2022 };
const Garage = () =>{
    return (
        <div>
            <Car {...carInfo} cars={['BMW']}/>
            <Car brands="BMW x5" Model= {2012} cars={["Mazda"]}/>
            <Car brands="Isuzu-Dmax" Model={2013} cars={["Isuzu-Dmax"]}/>
        </div>
    )
}
export default Garage;