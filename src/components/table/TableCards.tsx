import React, { forwardRef, useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useDispatch, useSelector } from 'react-redux';
import { tableDrawingTC } from '../../Redux/tableDrawingReducer';
import { AppStateType} from './../../Redux/store';


const tableIcons = {
    Add: forwardRef((props:any, ref:any) => <AddBox {...props} ref={ref} onClick={() => alert("Wow it's work:)")} />),
    Check: forwardRef((props:any, ref:any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props:any, ref:any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props:any, ref:any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props:any, ref:any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props:any, ref:any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props:any, ref:any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props:any, ref:any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props:any, ref:any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props:any, ref:any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props:any, ref:any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props:any, ref:any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props:any, ref:any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props:any, ref:any) => <Search {...props} ref={ref} onClick={() => alert('Hello great Programmer!')} />),
    SortArrow: forwardRef((props:any, ref:any) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props:any, ref:any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props:any, ref:any) => <ViewColumn {...props} ref={ref} />)
  };

interface Row {
  name: string;
  surname: string;
  birthYear: number;
	birthCity: number;
}

interface TableState {
  columns: any;
  data: any;
}

export default function TableCards() {

	const dispatch = useDispatch()
  useEffect(() => {
    dispatch(tableDrawingTC());
	}, []);

	const tableDrawing = useSelector((store: AppStateType) => store.tableDrawingPage.table);
	console.log(tableDrawing);

// 	cardsCount: 0
// created: "2020-07-07T15:43:43.340Z"
// grade: 0
// name: "BaskoPack"
// path: "/def"
// private: false
// rating: 0
// shots: 0
// type: "pack"
// updated: "2020-07-07T15:44:10.599Z"
// user_id: "5ef8dab83d84f600041f53bc"
// user_name: "1989bvg@gmail.com"
// __v: 0
// _id: "5f04982f83dea700043602a5"
	
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Grade', field: 'grade' }
    ],
    data: tableDrawing,
  });

  return (
		<MaterialTable
			icons={tableIcons} 
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