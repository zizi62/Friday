import React, { useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import { setTableData, packType, cardPacksType } from '../../Redux/tableZiziReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/store';

// interface Row {
//   _id: string
//   user_id: string
//   name: string
//   path: string
//   grade: number
//   shots: number
//   rating: number
//   type: string
//   created: string
//   updated: string
//   __v: number
// }

// type Row = cardPacksType



interface TableState {
  columns: Array<Column<Array<packType>>>;
  data: Array<packType>
}

export default function TableCards() {
  debugger
  const dispatch = useDispatch();
  const CardPacks = useSelector((store: AppStateType) => store.tablePage.cardPacks) 
  // let temp =  [{ name: "no Name", created: '123'},{ name: "no sdsadasdasdme", created: '123'} ];

  useEffect(()=>{
    dispatch(setTableData())
  },[])



  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Created', field: 'created' },
      { title: 'Updated', field: 'updated' }
      // {_id: string}
      // _id: string
      // user_id: string
      // name: string
      // path: string
      // grade: number
      // shots: number
      // rating: number
      // type: string
      // created: string
      // updated: string
      // __v: number
      
    ],
    data: CardPacks
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