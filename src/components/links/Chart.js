

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import TuneIcon from '@material-ui/icons/Tune';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';


const Chart = () => {


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
            <TuneIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>

    <Collapse in={open} timeout="auto" unmountOnExit>
        <Link to='/float' className='nav-link'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    Float
                </ListItem>
            </List>
        </Link>
    </Collapse>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
        <Link to='/morris' className='nav-link'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    Morris
                </ListItem>
            </List>
        </Link>
    </Collapse>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
        <Link to='/chartjs' className='nav-link'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    Chartjs
                </ListItem>
            </List>
        </Link>
    </Collapse>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
        <Link to='/chartist' className='nav-link'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    Chartist
                </ListItem>
            </List>
        </Link>
    </Collapse>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
        <Link to='/sparkline' className='nav-link'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    Sparkline
                </ListItem>
            </List>
        </Link>
    </Collapse>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
        <Link to='/peitiy' className='nav-link'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    Peity
                </ListItem>
            </List>
        </Link>
    </Collapse>


        </div>
    );
};

export default Chart;