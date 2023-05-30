import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { TableHead } from '@mui/material';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(p_id, p_title,time, method, status, total,invoice) {
  return { p_id, p_title, time, method, status, total,invoice };
}

const rows = [
  createData('./img/agro1.jpg','Platipus Plants','02:30pm 02-11-23', 'COD', 'Complete',800,'invoice'),
  createData('./img/agro2.jpg','Donut', '02:30pm 02-11-23','Credit Card', 'Processing',500,'invoice'),
  createData('./img/agro3.jpg','Eclair','02:30pm 02-11-23', 'COD', 'Pending',564,'invoice'),
  createData('./img/agro4.jpg','Frozen yoghurt','02:30pm 02-11-23', 'COD', 'Complete',412,'invoice'),
  createData('./img/agro5.jpg','Gingerbread','02:30pm 02-11-23', 'COD', 'Complete',321,'invoice'),
  createData('./img/plant1.jpg','Honeycomb','02:30pm 02-11-23', 'UPI', 'Complete',475,'invoice'),
  createData('./img/plant2.jpg','Ice cream sandwich','02:30pm 02-11-23','COD', 'Complete',360,'invoice'),
  createData('./img/plant3.jpg','Jelly Bean','02:30pm 02-11-23', 'COD', 'Complete',299,'invoice'),
  createData('./img/seed1.jpg','KitKat','02:30pm 02-11-23', 'COD', 'Complete',550,'invoice'),
  createData('./img/plant5.jpg','Lollipop','02:30pm 02-11-23', 'UPI', 'Complete',175,'invoice'),
  createData('./img/plant6.jpg','Marshmallow','02:30pm 02-11-23', 'COD','Complete',250,'invoice'),
  createData('./img/seed2.jpg','Nougat', '02:30pm 02-11-23','COD', 'Complete',175,'invoice'),
  createData('./img/tea-elixir.jpg','Oreo','02:30pm 02-11-23', 'COD', 'Complete',150,'invoice'),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function Dashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <section className='pt-3 pb-3'>
        <div className="container">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead style={{fontWeight:'bold'}}>
          <TableRow style={{background:'aliceblue'}}>
            <TableCell style={{fontWeight:'bold'}}>Product</TableCell>
            <TableCell align="left"style={{fontWeight:'bold'}}>Product Title</TableCell>
            <TableCell align="center" style={{fontWeight:'bold'}}>Time / Date</TableCell>
            <TableCell align="center" style={{fontWeight:'bold'}}>Method</TableCell>
            <TableCell align="center" style={{fontWeight:'bold'}}>Status</TableCell>
            <TableCell align="center" style={{fontWeight:'bold'}}>Total</TableCell>
            <TableCell align="center" style={{fontWeight:'bold'}}>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" style={{width:120}}>
                <img src={row.p_id} alt="" className='img-fluid'/>
              </TableCell>
              <TableCell align="left" scope="row" style={{width:280}} >
                {row.p_title}
              </TableCell>
              <TableCell align="center">
                {row.time}
              </TableCell>
              <TableCell align="center">
                {row.method}
              </TableCell>
              <TableCell align="center">
                {row.status}
              </TableCell>
              <TableCell align="center">
              ₹{row.total}
              </TableCell>
              <TableCell align="center">
               <button className='btn_3'>{row.invoice}</button> 
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter style={{overflow:'hidden', }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
        </div>
    </section>
    </>
    
    
  );
}