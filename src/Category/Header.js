import React from "react";

const Category = props => {
    return (
        <div>
            <div
                href="#"
                className="list-group-item list-group-item-action text-info bg-light">
                <center><h1> Category {props.data}</h1></center>
      </div>
        </div>
    );
};


export default Category;
