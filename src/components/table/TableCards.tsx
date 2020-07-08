import React, { useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import { setTableData } from '../../Redux/tableZiziReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/store';

interface Row {
  name: string;
  created: string
  
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function TableCards() {
  debugger
  const dispatch = useDispatch();
  const CardPacks = useSelector((store: AppStateType) => store.tablePage.cardPacks) 
  let temp =  [{ name: "no Name", created: '123'},{ name: "no sdsadasdasdme", created: '123'} ];

  useEffect(()=>{
    dispatch(setTableData())
  },[])



  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Created', field: 'created' },
      
    ],
    data: temp
    //  [
    //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //   {
    //     name: 'Zerya Betül',
    //     surname: 'Baran',
    //     birthYear: 2017,
    //     birthCity: 34,
    //   },
    // ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}