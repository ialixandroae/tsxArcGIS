import * as React from "react";
import { _Map } from "../app";

export default class Map extends React.Component<any, any>{
    render() {

        

        const myMap = new _Map('hybrid', this.props.container);
        myMap.createMap();

        return null;
    }
};

