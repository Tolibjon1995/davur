import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LayersIcon from '@material-ui/icons/Layers';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';


const Pagec = (props) => {


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
                    <LayersIcon className={`${props.och === false ? 'anim2' : ''}`} />
                </ListItemIcon>
                <ListItemText className={`${props.och === false ? 'anim' : ''}`} primary="Pages" />
                {open ? <ExpandLess className={`${props.och === false ? 'anim' : ''}`} /> : <ExpandMore className={`${props.och === false ? 'anim' : ''}`} />}
            </ListItem>

            <Collapse className={`${props.och === false ? 'anim' : ''}`} in={open} timeout="auto" unmountOnExit>
                <Link to='/register' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Register
                        </ListItem>
                    </List>
                </Link>
            </Collapse>
            
            <Collapse className={`${props.och === false ? 'anim' : ''}`} in={open} timeout="auto" unmountOnExit>
            <Link to='/login' className='nav-link'>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        Login
                    </ListItem>
                </List>
            </Link>
            </Collapse>
            
            <Collapse className={`${props.och === false ? 'anim' : ''}`} in={open} timeout="auto" unmountOnExit>
            <Link to='/error' className='nav-link'>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        Error
                    </ListItem>
                </List>
            </Link>
            </Collapse>
            
            <Collapse className={`${props.och === false ? 'anim' : ''}`} in={open} timeout="auto" unmountOnExit>
            <Link to='/lock-skreen' className='nav-link'>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        Lock Screen
                    </ListItem>
                </List>
            </Link>
        </Collapse>
        </div>
    );
};

export default Pagec;