import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productList';
import axios from "axios";
import { View } from 'react-native';
import { Grid} from 'react-bootstrap';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }


  componentDidMount() {
    axios
      .get("http://localhost:3001/produtos")
      .then(response => {


        const newProducts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name,
            description: c.description,
            tablePrice: c.tablePrice,
            salePrice: c.salePrice,
            urlImage1: c.urlImage1,
            urlImage2: c.urlImage2,
            urlImage3: c.urlImage3,
            urlImage4: c.urlImage4
          };
        });

        const newState = Object.assign({}, this.state, {
          products: newProducts
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));

      console.clear();
  }



  render() {
    return (

      <View className="App">

        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
        </head>
        <header>
          <div className="input-header">
          <img src={require('./images/logo.png')}></img>
          </div>
        </header>


        <Grid className="grid-list">
          <ProductList products={this.state.products} />
        </Grid>
        <div></div>
      </View >
    );
  }
}

export default App;
