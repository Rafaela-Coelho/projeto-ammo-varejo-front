import React from "react";
import "./product.css"
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function Product(props) {
    return (

        <div className="lista-wrapper">
        <img src={props.urlImage1} class="icon-image" ></img><img src={props.urlImage2} class="icon-image" ></img>
        <img src={props.urlImage3} class="icon-image" ></img><img src={props.urlImage4} class="icon-image" ></img>
        
        <ListGroup>
            <ListGroupItem><text className="text-header-item">{props.name}</text> </ListGroupItem> <br/>
            <ListGroupItem ><text className="text-item">{props.description}</text></ListGroupItem><br/>
            <ListGroupItem >De: <text className="text-item-no-price"> R${props.tablePrice}</text>  Por: R$<text>{props.salePrice}</text></ListGroupItem>
        </ListGroup>
         </div>

    );
}

export default Product;