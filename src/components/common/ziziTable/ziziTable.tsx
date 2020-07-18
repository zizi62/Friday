import React, { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconButton, Typography, TextField, ButtonGroup, Button } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


type TablePropsType = {
  tableTitle: string
  tableData: Array<any>
  link : string
  linkButton:string
  colums: Array<{
    title: string,
    field: string
  }>
  editItem: (pack: any) => void
  deletItem: (pack: any) => void
  searchItem: (text: any) => void
}


const TableZ: React.FC<TablePropsType> = (props: TablePropsType) => {
  const classes = useStyles();

  const { tableData, tableTitle, colums, link,linkButton, editItem, deletItem, searchItem } = props

  const [searchText, setSearchText] = useState('')

  let tableHead = colums.map((c => c.title))
  let tableField = colums.map((c => c.field))

  const setSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
    alert(searchText)
  }, [setSearchText, searchText])

  const getSearchText = useCallback(() => {
    searchItem(searchText)
  }, [searchItem, searchText])



  return (
    <TableContainer component={Paper}>
      <Typography>{tableTitle}</Typography>
      <IconButton ><AddBoxIcon color='primary' /></IconButton>
      <TextField id="standard-search" label="Search field" type="search" onChange={setSearch} /> <IconButton onClick={getSearchText}> <SearchIcon color='primary' /> </IconButton>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((t) => <TableCell>{t}<ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical outlined primary button group">
              <ExpandLessIcon />
              <ExpandMoreIcon />
            </ButtonGroup></TableCell>)}
            <TableCell align="right">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((pack: any, i) => (
            <TableRow key={i}>
              {tableField.map((t, i) => <TableCell key={i} component="th" scope="row">{pack[t]}</TableCell>)}
              <TableCell component="th" scope="row" align="right">
                <IconButton onClick={() => editItem(pack)}> <EditIcon color='primary' /> </IconButton>
                <IconButton onClick={() => deletItem(pack)}><DeleteOutlineIcon color='primary' /></IconButton>
                {console.log(link)}
                {console.log(link + pack._id)}
                <NavLink  to={`${link}/${pack._id}`}><Button>{linkButton}</Button></NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}







export default TableZ