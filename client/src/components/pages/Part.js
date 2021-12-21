import React, { useEffect, useMemo, useState } from "react";
import '../../App.css';
import Footer from '../Footer';
import Axios from 'axios';
import tw from "twin.macro";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import styled from 'styled-components'
import { GlobalFilter } from "../GlobalFilter";

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
  bg-green-300
  hover:bg-green-200
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


export function Part(props) {

    // const [masinos_id, setMasinosid] = useState('');
    // const [pavadinimas, setPavadinimas] = useState('');
    // const [modelis, setModelis] = useState('');
    // const [metai, setMetai] = useState('');
    // const [status, setStatus] = useState('');
    const data = useMemo(
        () => [
          {
              id:5,
              masinos_id:6,
              pavadinimas:"Kardanas",
              modelis:"Kia",
              metai:"1998",
          },
        ],
        []
      );

    const [partList, setPartList] = useState([])

    // useEffect(()=> {
    //     Axios.get('http://localhost:8080/api/v1/detale').then((response)=> {
    //         setPartList(response.data)
    //     })
    // }, [])

    const fetchProducts = async () => {
        const response = await Axios
          .get("http://localhost:8080/api/v1/detale")
          .catch((err) => console.log(err));
    
        if (response) {
          const partList = response.data;
    
          console.log("Products: ", partList);
          setPartList(partList);
        }
      };

      

    const columns = useMemo(() => ([
        {
            Header: "ID",
            accessor: "id"
        },
        {
            Header: "Pavadinimas",
            accessor: "pavadinimas"
        },
        {
            Header: "Masinos modelis",
            accessor: "modelis"
        },
        {
            Header: "Masinos metai",
            accessor: "metai"
        }
    ]),[])

    const tableHooks = (hooks) => {
      hooks.visibleColumns.push((columns) => [
        ...columns,
        {
          id: "Edit",
          Header: 'Edit',
          Cell: ({row}) => (
            <Button onCLick={() => alert("Editing: " + row.values.pavadinimas)}>
              Edit
            </Button>
          )
        },
        {
          id: "Delete",
          Header: 'Delete',
          Cell: ({row}) => (
            <Button2 onCLick={() => alert("Deleting: " + row.values.pavadinimas)}>
              Delete
            </Button2>
          )
        }
      ])
    };

    const partsData = useMemo(() => [...partList], [partList]);
    const partsColumns = useMemo(() => partList[0] ? Object.keys(partList[0]).filter((key) => key !== "rating").map((key) => {
      return { Header: key, accessor: key};
    }) : [], [partList]);

    const tableInstance = useTable(
        {
         columns : partsColumns,
          data : partsData
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
        fetchProducts();
      }, []);

      
    // return (
    //     <>
    //         <h1>CRUD APP</h1>
    //         <div className="form">
    //             {/* <label>Masinos id:</label>
    //             <input type="text" name="masinos_id" onChange={(e) => {
    //                 setMasinosid(e.target.value)
    //             }}/>
    //             <label>Pavadinimas:</label>
    //             <input type="text" name="pavadinimas" />
    //             <label>Modelis:</label>
    //             <input type="text" name="modelis" />
    //             <label>Metai:</label>
    //             <input type="text" name="metai" />
    //             <label>Status:</label>
    //             <input type="text" name="status" />

    //             <button onClick={submit}>Submit</button> */}

    //             {partList.map((val) => {
    //                 return <h1>Pavadinimas: {val.pavadinimas} | Modelis: {val.modelis}</h1>
    //             })}
    //         </div>
    //       <Footer />
    //     </>
    //   );
    
    return (
      <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
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

export default Part
