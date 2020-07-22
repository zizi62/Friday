import React, {useEffect} from 'react';
import {withStyles, Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getPacks} from "../../Redux/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//     return {name, calories, fat, carbs, protein};
// }
//
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const PacksPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    //const packs = useSelector((state: AppStateType) => state.cardPacks.packs);

    useEffect(() => {
        dispatch(getPacks())
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat (g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs (g)</StyledTableCell>
                        <StyledTableCell align="right">Protein (g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {/*{(packs.length === 0)*/}
                    {/*    ? <p>Loading</p>*/}
                    {/*    : packs.map((pack) => (*/}
                    {/*        <StyledTableRow key={pack.name}>*/}
                    {/*            <StyledTableCell component="th" scope="row">*/}
                    {/*                {pack.name}*/}
                    {/*            </StyledTableCell>*/}
                    {/*            <StyledTableCell align="right">{pack.grade}</StyledTableCell>*/}
                    {/*            <StyledTableCell align="right">{pack.rating}</StyledTableCell>*/}
                    {/*            <StyledTableCell align="right">{pack.shots}</StyledTableCell>*/}
                    {/*            <StyledTableCell align="right">{pack.created}</StyledTableCell>*/}
                    {/*        </StyledTableRow>*/}
                    {/*    ))*/}
                    {/*}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PacksPage;


// cardsCount: 0
// created: "2020-07-04T06:41:50.420Z"
// deckCover: "some cover"
// grade: 0
// name: "no Name"
// path: "/def"
// private: false
// rating: 0
// shots: 0
// type: "pack"
// updated: "2020-07-04T06:41:50.420Z"
// user_id: "5eecf82a3ed8f700042f1186"
// user_name: "3"
// __v: 0
// _id: "5f0024aefbb5de0004fb4fd8"




