import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DnsIcon from '@material-ui/icons/Dns';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const Links = () => {

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
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <DnsIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to='/' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Dashboard
                        </ListItem>
                    </List>
                </Link>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='/analitics' className='nav-link'>
                        <ListItem button className={classes.nested}>
                            Analitics
                        </ListItem>
                    </Link>
                </List>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='/review' className='nav-link'>
                        <ListItem button className={classes.nested}>
                            Review
                        </ListItem>
                    </Link>
                </List>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='/order' className='nav-link'>
                        <ListItem button className={classes.nested}>
                            Order
                        </ListItem>
                    </Link>
                </List>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='/order-list' className='nav-link'>
                        <ListItem button className={classes.nested}>
                            Order list
                        </ListItem>
                    </Link>
                </List>
            </Collapse>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='/general-customers' className='nav-link'>
                        <ListItem button className={classes.nested}>
                            General Customers
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </div>
    );
};

export default Links;