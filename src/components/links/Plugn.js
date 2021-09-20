import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';


const Plugin = (props) => {


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
                    <FavoriteBorderIcon className={`${props.och === false ?'anim2':''}`}/>
                </ListItemIcon>
                <ListItemText className={`${props.och === false?'anim':''}`} primary="Plugins" />
                {open ? <ExpandLess className={`${props.och === false?'anim':''}`} /> : <ExpandMore className={`${props.och === false?'anim':''}`} />}
            </ListItem>

            <Collapse className={`${props.och === false?'anim':''}`} in={open} timeout="auto" unmountOnExit>
                <h6 className='ichki'>Keraksiz linklar</h6>
            </Collapse>
        </div>
    );
};

export default Plugin;