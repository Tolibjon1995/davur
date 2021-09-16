import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const Shop = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className='ichki'>
            <ListItem button onClick={handleClick}>
                <ListItemText primary="Shop" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/shop/produkt-grid' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Product Grid
                        </ListItem>
                    </List>
                </Link>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/shop/product-list' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                           Product List
                        </ListItem>
                    </List>
                </Link>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/shop/product-details' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Product Details
                        </ListItem>
                    </List>
                </Link>
            </Collapse>
            
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/shop/order' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Order
                        </ListItem>
                    </List>
                </Link>
            </Collapse>
            
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/shop/checkout' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Checkout
                        </ListItem>
                    </List>
                </Link>
            </Collapse>
            
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/shop/invoice' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Invoice
                        </ListItem>
                    </List>
                </Link>
            </Collapse>
            
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/shop/customers' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Customers
                        </ListItem>
                    </List>
                </Link>
            </Collapse>

        </div>

    );
};

export default Shop;