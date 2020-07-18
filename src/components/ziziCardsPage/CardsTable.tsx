import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { useEffect } from "react";
import { setTableData } from "../../Redux/ziziCardsReducer";
import TableZ from "../common/ziziTable/ziziTable";
import React from "react";
import { TABLE_ZIZICARDS } from "../Routes/Routes";
import { useParams } from "react-router-dom";

type ZiziCacksTablePropsType = {

}

const CardsTable: React.FC<ZiziCacksTablePropsType> = (props: any) => {

    const tableData = useSelector((store: AppStateType) => store.tableCardsReducer.cards);

    const dispatch = useDispatch();
    const {id} = useParams();
 
    useEffect(() => {
        dispatch(setTableData(id))
    }, [])


    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Created', field: 'created' },
        { title: 'Updated', field: 'updated' }
    ]

    const editItem = (obj: any) => {
        alert(obj.user_name)
    }

    const deletItem = (obj: any) => {
        alert(obj._id)
    }

    const searchItem = (text: string) => {
        alert(text)
    }

    return <>
        <TableZ tableData={tableData} colums={columns} tableTitle='Cards' editItem={editItem} deletItem={deletItem} searchItem={searchItem}
            link={TABLE_ZIZICARDS}
            linkButton={'Learn'}>
        </TableZ>
    </>
}


export default CardsTable



