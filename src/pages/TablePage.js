import Table from "../components/Table";
import { useState } from "react";
import Button from "../components/Button";
import SortableTable from "../components/SortableTable";

function TablePage() {

    const data = [
        {name: 'Orange', color: 'bg-orange-500', price: '$1.00'},
        {name: 'Apple', color: 'bg-red-500', price: '$1.50'},
        {name: 'Banana', color: 'bg-yellow-500', price: '$0.50'},
        {name: 'Kiwi', color: 'bg-green-500', price: '$2.00'},
    ];
    const config = [
        {
            label: 'Name',
            render: (item)=>item.name,
            sortValue: (item)=>item.name,
    
        },
        {
            label: 'Color',
            render: (item)=><div className={`p-3 m-2 ${item.color}`}></div>
        },
        {

            label: 'Price',
            render: (item)=>item.price,
            sortValue: (item)=>item.price,
        },
        {
            label: 'Buy',
            render: (item)=> <Button primary rounded>Buy</Button>
        
        }
    ];
    const keyFn = (item) => item.name;

    return (
    <div className="flex">
      <SortableTable data={data} config={config} keyFn={keyFn}/>
    </div>
  );
}
export default TablePage;