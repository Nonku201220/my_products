

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
import '../components/Products.css';
import { useNavigate } from 'react-router-dom';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      currentPage: 1,
      itemsPerPage: 15,
      activeItem: null,
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/product')
      .then((res) => res.json())
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
      );
  }

  handlePageChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    });
  };

  handleItemClick = (item) => {
    this.setState({
      activeItem: item.id === this.state.activeItem ? null : item.id
    });
  };

  render() {
    const { error, isLoaded, items, currentPage, itemsPerPage, activeItem } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // Pagination
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

      return (
        <div className="row">
          {currentItems.map((item) => (
            <div className="column" key={item.id}>
              <div className="card">
                <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  {activeItem === item.id && (
                    <div>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">$ {item.price.toFixed(2)}</p>
                    </div>
                  )}
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleItemClick(item)}
                  >
                    {activeItem === item.id ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="pagination">
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                className={index + 1 === currentPage ? 'active' : ''}
                onClick={() => this.handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      );
    }
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