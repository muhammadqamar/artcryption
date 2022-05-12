import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Box,
} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import style from './table.module.scss';

interface TableProps {
  data: Array<Object>;
}

const Exhibition: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper} className={style.tableRoot}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={style.tablehead}>Asset</TableCell>
            <TableCell className={style.tablehead}>Price</TableCell>
            <TableCell className={style.tablehead}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <>
              <TableRow
                className={style.tablerow}
                key={row.asset}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  className={style.tablecell}
                  component="th"
                  scope="row"
                >
                  <Box className={style.imgcell}>
                    <img src={row.image} alt={row.asset} />
                    {row.asset}
                  </Box>
                </TableCell>
                <TableCell className={style.tablecell} align="right">
                  {row.price}
                </TableCell>
                <TableCell className={style.tablecell} align="right">
                  {row.date}
                </TableCell>
              </TableRow>
              <TableRow className={style.tablerowSpace}></TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Exhibition;
