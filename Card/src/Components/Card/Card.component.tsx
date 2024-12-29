  import './card.css'
  import {Trash} from "@phosphor-icons/react"

  interface IProps {
    namesList: {
      name: string;
      Age: number;
      Address: string;
      Phone: string;
    }[];
    type : string;
    onDelete : () => void;
  }
  const Card = (props : IProps) => {

    return (
      <div>
        {
          props.namesList.map((item, index) => (
          <div className='card' key={index} style={{backgroundColor : props.type === "girl" ? "pink" : "green"}}>
              <p>Name : {item.name}</p>
              <p>Age : {item.Age}</p>
              <p>Address : {item.Address}</p>
              <p>Phone : {item.Phone}</p>
              <div className='deleteButton'><Trash size={24} color="#111" weight="fill" onClick={ props.onDelete} /></div>
          </div>
          ))
        }
      </div>
    )
  }

  export default Card;
