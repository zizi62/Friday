import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { useEffect, useCallback } from "react";
import { setTableData, setNewPackData, deletePack, packType } from "../../Redux/ziziPacksReducer";
import TableZ from "../common/ziziTable/ziziTable";
import React from "react";
import { TABLE_ZIZICARDS } from "../Routes/Routes";

type ZiziPacksTablePropsType = {

}

const PacksTable: React.FC<ZiziPacksTablePropsType> = () => {

  const tableData = useSelector((store: AppStateType) => store.tablePakcsPage.cardPacks);

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
    alert(obj.user_name)
  }

  const deletItem = useCallback((pack: packType)=>{
    dispatch(deletePack(pack._id))
  }, [dispatch, deletePack])
  

  const searchItem = (text: string) =>{
    alert(text)
  }
  const addNewPack = useCallback(() => {
    alert(123)
    dispatch(setNewPackData())

}, [dispatch, setNewPackData]);


  return <>
    <TableZ tableData={tableData} 
    colums = {columns} 
    tableTitle= 'Packs' 
    editItem= {editItem} 
    deletItem = {deletItem} 
    searchItem ={searchItem} 
    addNewItem = {addNewPack}
    link ={TABLE_ZIZICARDS} 
    linkButton = {'See Cards'}>

    </TableZ>
  </>
}


export default PacksTable