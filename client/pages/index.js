import Head from 'next/head'
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class index extends Component {
    static async getInitialProps(ctx) {
        const response = await fetch('http://localhost:8080/ping');
        const resObject = await response.json();

        console.log(resObject);
        
        return { filteredItemsObject: Object.keys(resObject) }
        /*let i = 0;
        var itemNameList = []
        for (var k in resObject.data){
            itemNameList[i] = resObject.data[k].name;
            i++;
        }

        return {
            itemNames: itemNameList
        }*/
    }

    render() {
        return (
            <div>
                <ul>    
                {/*
                {this.props.itemNames.map(itemName =>
                    <li>
                        {itemName}
                    </li>
                )}
                */}

                </ul>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div>
                </div>
            </div>
        )
    }
}

export default index;