import React from "react";

export const ItemListContainer = ({
    greeting }) => {
        return (
            <div>
                <h2 ClassName="text-success">
                    {greeting}
                </h2>
            </div>
        )
    }

export default ItemListContainer;