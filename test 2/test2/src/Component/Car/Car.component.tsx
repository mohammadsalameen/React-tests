
interface IProps{
    brands  :string;
    Model : number;
    cars : string[];
}
// const cars = ["Ford", "BMW", "Isuzu-Dmax", "Golf"];
const Car = (props : IProps) =>{

    return (
        <div>
            <ul>
                {props.cars.map(item => <li key={item}>{`Car : ${item} Model ${props.Model}`}</li>)}
            </ul>
        </div>
    )
}
export default Car;