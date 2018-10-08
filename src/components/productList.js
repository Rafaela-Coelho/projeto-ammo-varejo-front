import React, { Component } from "react";
import { Grid, Pagination } from 'react-bootstrap';


import Product from "./product";

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: "",
            searchTitle: "Lista de produtos"
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });

        if ( event.target.value.substr(0, 20) == null || event.target.value.substr(0, 20) == "")
            this.state.searchTitle = "Lista de produtos"
        else
            this.state.searchTitle = event.target.value.substr(0, 20);
    }

    updateSearchTitle(event) {
        if (this.state.search == null)
            this.state.searchTitle = "Lista de produtos"
        else
            this.state.searchTitle = this.state.search;
    }




    render() {
        let filterProduct = this.props.products.filter(
            (product) => {
                return product.name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
            }
        );

        return (


            <div >
                <Grid className="grid-name-search">
                     <p className="p-text">{this.state.searchTitle}</p>
                </Grid>
                <div className="div-input">
                    <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} name="searchProduct"
                        className="input" placeholder=" Pesquisar produtos..." />
                </div>
                <ul>
                    {filterProduct.map(c =>
                        <Product
                            key={c.id}
                            name={c.name}
                            description={c.description}
                            tablePrice={c.tablePrice}
                            salePrice={c.salePrice}
                            urlImage1={c.urlImage1}
                            urlImage2={c.urlImage2}
                            urlImage3={c.urlImage3}
                            urlImage4={c.urlImage4} />)}
                </ul>
            </div>



        );
    }
}


export default ProductList;