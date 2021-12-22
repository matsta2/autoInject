import React, { useEffect, useMemo, useState } from "react";
import '../../App.css';
import Footer from '../Footer';
import Axios from 'axios';
import tw from "twin.macro";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import styled from 'styled-components'
import { GlobalFilter } from "../GlobalFilter";
import { Link } from 'react-router-dom';

const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
  p-2
`;

const TableRow = tw.tr`
border
border-green-500
`;

const TableHeader = tw.th`
border
border-green-500
p-2
`;

const TableBody = tw.tbody`
`;

const TableData = tw.td`
border
border-green-500
p-5
`;

const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-yellow-300
  hover:bg-yellow-200
  transition-colors
`;
const Button2 = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-red-300
  hover:bg-red-200
  transition-colors
`;

const Button3 = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;

const Styles = styled.div`
 table {
   border-spacing: 0;
   border: 1px solid black;

   tr {
     :last-child {
       td {
         border-bottom: 0;
       }
     }
   }

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid black;
     border-right: 1px solid black;

     :last-child {
       border-right: 0;
     }
   }
  
   th {
     background: grey;
     border-bottom: 3px solid black;
     color: white;
     fontWeight: bold;
   }
 }
`


export function Services(props) {
  const [serviceList, setServiceList] = useState([])

  const fetchServices = async () => {
    const response = await Axios
      .get("http://localhost:8080/api/v1/servisas")
      .catch((err) => console.log(err));

    if (response) {
      const serviceList = response.data;

      console.log("Services: ", serviceList);
      setServiceList(serviceList);
    }
  };

  const deleteService = (id) => {
    Axios.delete(`http://localhost:8080/api/v1/servisas/${id}`);
    alert("deleting: " + id)
    window.location.reload(false);
  }

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: 'Edit',
        Cell: ({row}) => (
          <Button onClick={() => alert("Editing: " + row.values.pavadinimas)}>
            Edit
          </Button>
        )
      },
      {
        id: "Delete",
        Header: 'Delete',
        Cell: ({row}) => (
          <Button2 onClick={() => {deleteService(row.values.id)}}>
            Delete
          </Button2>
        )
      }
    ])
  };

  const serviceData = useMemo(() => [...serviceList], [serviceList]);
  const serviceColumns = useMemo(() => serviceList[0] ? Object.keys(serviceList[0]).filter((key) => key !== "rating").map((key) => {
    return { Header: key, accessor: key};
  }) : [], [serviceList]);

  const tableInstance = useTable(
    {
     columns : serviceColumns,
      data : serviceData
    }, 
    useGlobalFilter,
    tableHooks,
    useSortBy
    );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows, 
    prepareRow, 
    preGlobalFilteredRows, 
    setGlobalFilter, 
    state,
    } = tableInstance;

    useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
    <GlobalFilter
      preGlobalFilteredRows={preGlobalFilteredRows}
      setGlobalFilter={setGlobalFilter}
      globalFilter={state.globalFilter}
    />
    <Link to="/createService">
    <Button3>Sukurti</Button3>
    </Link>
    
    <Styles>
    <Table {...getTableProps()}>  
 
      <TableHead >
          {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                  <TableHeader {...column.getHeaderProps(column.getSortByToggleProps)}>
                    { column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                    </TableHeader>
              ))}
              </TableRow>    
          ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
              {rows.map((row) => {
                  prepareRow(row);
                  return <TableRow {...row.getRowProps()}>
                              {row.cells.map((cell, idx) => (
                                  <TableData {...cell.getCellProps()}> {cell.render("Cell")} </TableData>
                              ))}    
                          </TableRow>   
              })}        
      </TableBody>   
  </Table>
  </Styles>
  </> 
  )
  
}

export default Services
