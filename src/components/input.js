import React,  { Component } from 'react';
import "./product.css"


export default class Input extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="div-input">
                
                <input type="text" name="searchProduct" className="input" placeholder=" Pesquisar produto..."/>
            </div>
        );
    }
}