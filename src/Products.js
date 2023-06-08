

//import Button from './Button';

//import './Products.css';

/* const Products = () => {
  const [data1, setData1] = useState([]);
  const [visible, setVisible]= useState[6],

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch('https://dummyjson.com/product');
      items(res.data.results)
       
       
      }

      const next = ( => {
        setVisible(visible + 6)
      }
      
      useEffect(() => {
        items()
      }, ))
      

      setData1(data1.products[1]);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <h2>Fetched data from API:</h2>

    {/*   {data1.map(function(data){
        return <li key = "data.id" ></li>
      })
      } *//* }
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      
    </div>
  );
 
};

export default Products; */ 

import React, { Component } from 'react'; 

export class Products extends Component {

  constructor(props) {

    super(props);

    this.state = {

      error: null,

      isLoaded: false,

      items: []

    };

  }

  componentDidMount() {

    fetch("https://dummyjson.com/product")

      .then(res => res.json())

      .then(

        (result) => {

          this.setState({

            isLoaded: true,

            items: result.products

           

          });

        },

        (error) => {

          this.setState({

            isLoaded: true,

            error

          });

        }

      )

     

  }

  render() {
  const itemsPerPage = 10;
  let itemCount = 0;

    const { error, isLoaded, items } = this.state;

    if (error) {

      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {

      return <div>Loading...</div>;

    } 

    else {

}

    return(
 <div className="row">



        {items.map((item) => {
          if (itemCount < itemsPerPage) {
            itemCount++;
            return (
              <div className="column">
                <div className="card">
                  <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">$ {item.price.toFixed(2)}</a>
                  </div>

                </div>
              </div>
            );
          } else {
            return null;
          }
        })}

      </div>

    )

  }

}



export default Products; 
 



//import './App.css';
//import Products from './pages/Products';
/* class Products extends React.Component {
constructor(props) {
super(props);
this.state = {
items: [],
DataisLoaded: false
};
}
componentDidMount() {
fetch("https://dummyjson.com/product")
.then((res) => res.json())
.then((json) => {
this.setState({
items: json,
DataisLoaded: true
});
})
}
render( ){
const { DataisLoaded, items } = this.state;
if (!DataisLoaded) return <div>
<h1> Pleses wait some time.... </h1> </div> ;
return (
<div className = "MyProduts">
<h1> Fetch data from an api in react </h1> {
//items.map(items =>  (
    
        items.map(items =>  (
        <ol key={items.id}>
          <li>  title: {items.title},</li>
            <li>description: {items.description},</li>
            <li>price: {items.price}</li>
        </ol>
    )
)
}
</div>
)};
}
export default Products; */

// {data1.map(data =>(
//   <li key={data.id}>{data.title}
//   </li>
// ))}