import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { useEffect } from "react";
import { setTableData } from "../../Redux/ziziPacksReducer";
import TableZ from "../common/ziziTable/ziziTable";
import React from "react";
import { modalWindow } from "../../Redux/modalReducer";

type ZiziPacksTablePropsType = {

}

const PacksTable: React.FC<ZiziPacksTablePropsType> = () => {

  const tableData = useSelector((store: AppStateType) => store.tablePage.cardPacks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTableData())
  }, [])
 
 
 const columns= [
    { title: 'Name', field: 'name' },
    { title: 'Grade', field: 'grade' },
    { title: 'Created', field: 'created' },
    { title: 'Updated', field: 'updated' },
    { title: 'User name', field: 'user_name' },
    { title: 'Cards', field: 'cardsCount' }
  ]

  const editItem = (obj: any)=>{
		//alert( "obj.user_name")
		dispatch(modalWindow)
  }

  const deletItem = (obj: any)=>{
    alert(obj._id)
  }

  const searchItem = (text: string) =>{
    alert(text)
  }



  return <>
		<TableZ 
			tableData={tableData}
			colums = {columns}
			tableTitle='Packs'
			editItem={editItem}
			deletItem =  {deletItem}
			searchItem = {searchItem}>
    </TableZ>
  </>
}


export default PacksTable