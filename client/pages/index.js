import Head from 'next/head'
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class index extends Component {
    static async getInitialProps(ctx) {
        const response = await fetch('http://localhost:8080/ping');
        const resObject = await response.json();

        //console.log(Object.values(resObject));
        
        return { filteredItemsObject: resObject }
    }

    render() {
        return (
            <div>
                <ul>    
                    {this.props.filteredItemsObject.map((item, index) =>
                        <li key={index}>
                            <h4>{item[0]}</h4>
                            <p>{Object.keys(item[1]).toString()}: {Object.values(item[1]).toString()}</p>
                        </li>,
                    )}
                </ul>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
            </div>
        )
    }
}

export default index;