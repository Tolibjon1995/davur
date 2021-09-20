import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AirplayIcon from '@material-ui/icons/Airplay';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import Email from './Email';
import Shop from './Shop';

const App = (props) => {


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
                    <AirplayIcon className={`${props.och === false ?'anim2':''}`}/>
                </ListItemIcon>
                <ListItemText className={`${props.och === false?'anim':''}`} primary="Apps" />
                {open ? <ExpandLess className={`${props.och === false?'anim':''}`} /> : <ExpandMore className={`${props.och === false?'anim':''}`} />}
            </ListItem>

            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <Link to='/profile' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Profile
                        </ListItem>
                    </List>
                </Link>
            </Collapse>


            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Email />
                </List>
            </Collapse>


            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link to='/calendar' className='nav-link'>Calendar</Link>
                    </ListItem>
                </List>
            </Collapse>

            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Shop />
                </List>
            </Collapse>

        </div>
    );
};

export default App;