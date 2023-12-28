import { render } from "@testing-library/react";
import { Fragment } from "react";



function Table({ data, config, keyFn}) {
    const renderedHeaders = config.map((column) => {
        if(column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return (
            <th key={column.label}>{column.label}</th>
        );
    });

    const renderedData = data.map((item) => {
        const renderCells = config.map((column) => {
            return (
                <td className="p-2"key={column.label}>{column.render(item)}</td>
            );
        });
        return (
            <tr key={keyFn(item)} className="border-b">
                {renderCells}
            </tr>
        );
    });
    return (
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedData}
        </tbody>
      
    </table>
  );
}
export default Table;