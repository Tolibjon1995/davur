import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const Email = (props) => {

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

                <ListItemText className={`${props.och === false?'anim':''}`} primary="Email" />
                {open ? <ExpandLess className={`${props.och === false?'anim':''}`} /> : <ExpandMore className={`${props.och === false?'anim':''}`} />}
            </ListItem>

            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <Link to='/compose' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Compose
                        </ListItem>
                    </List>
                </Link>
            </Collapse>

            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <Link to='/inbox' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                           Inbox
                        </ListItem>
                    </List>
                </Link>
            </Collapse>

            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <Link to='/read' className='nav-link'>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            Read
                        </ListItem>
                    </List>
                </Link>
            </Collapse>

        </div>

    );
};

export default Email;