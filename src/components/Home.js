import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import {
  useHistory
} from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import './Home.scss';

const Home = (props) => {
	const history = useHistory();
	const [items, setItems] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [addedItems, setAddedItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [filteredName, setFilteredName] = useState("empty");

	useEffect(() => {
		callApi();
	}, [])
	
	const callApi = () => {
	    fetch("https://sometimes-maybe-flaky-api.gdshive.io/")
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	setIsLoaded(true);
	        	setItems(result || []);
	        	setFilteredItems(result || []);
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	        	setIsLoaded(true);
	        	setItems([]);
	        	setFilteredItems([]);
	        }
	      )
	}


	  const handleClick = (item) => {
			history.push({
				 pathname: '/movie/' + item.name,
				 state: item
			});
	  }

	  const handleGenreChange = (event) =>
	  {
	  	if (event.target.value === "empty")
	  	{
	  		setFilteredItems(items);
	  		setFilteredName("empty");
	  	}
	  	else
	  	{
	  		setFilteredItems(items.filter(e => e.genre === event.target.value))
	  		setFilteredName(event.target.value)
	  	}
	  }

	  const handleYearChange = (event) =>
	  {
	  	if (event.target.value === "empty")
	  	{
	  		setFilteredItems(items);
	  		setFilteredName("empty");
	  	}
	  	else
	  	{
	  		setFilteredItems(items.filter(e => e.productionYear === event.target.value))
	  		setFilteredName(event.target.value)	  		
	  	}
	  }

    
	const useStyles = makeStyles((theme: Theme) =>
	  createStyles({
	    formControl: {
	      margin: theme.spacing(1),
	      minWidth: 120,
	    },
	    selectEmpty: {
	      marginTop: theme.spacing(2),
	    },
	  })
	);
	
	
	 const classes = useStyles();

	if (!isLoaded) {
	    return (
	    	"Loading...")
	  }
	const mystyle = {
      "display": "flex",
      "justifyContent": "center",
      "flexWrap": "wrap",
    };
    if(!Array.isArray(filteredItems))
    {
    	return ("Empty");
    }
    let itemList = filteredItems.map(item=>{
        return(
            <div className="card" style={{width: "500px"}} key={item.name} onClick={() => handleClick(item)}>
            	<div className="movie-component">
                    <img className="movie-poster" src={item.image} alt={item.name}/>
                    <div className="movie-details">
                    	<h1 className="movie-title">{item.name}</h1>
                    	<p className="movie-overview"><strong>Synopsis:</strong>{item.synopsisShort}</p>
                    	<p className="movie-released"><strong>Release Date:</strong>{item.productionYear}</p>
                    </div>
             	</div>
             </div>
        )
    })

    return(
        <div className="container">
        <FormControl className={classes.formControl}>
        <InputLabel id="lblGenre">Genre</InputLabel>
		<Select labelId="lblGenre" id="selectGenre" value={filteredName} onChange={handleGenreChange}>
		  <MenuItem value="empty">None</MenuItem>
		  <MenuItem value="Animation">Animation</MenuItem>
		  <MenuItem value="Adventure">Adventure</MenuItem>
		  <MenuItem value="Comedy">Comedy</MenuItem>
		  <MenuItem value="Fantasy">Fantasy</MenuItem>
		</Select>
		 </FormControl>
		 <FormControl className={classes.formControl}>
		<InputLabel id="lblYear">Year</InputLabel>
		<Select labelId="lblYear" id="selectGenre" value={filteredName} onChange={handleYearChange}>
		  <MenuItem value="empty">None</MenuItem>
		  <MenuItem value={2003}>2003</MenuItem>
		  <MenuItem value={2006}>2006</MenuItem>
		  <MenuItem value={2010}>2010</MenuItem>
		  <MenuItem value={2013}>2013</MenuItem>
		  <MenuItem value={2015}>2015</MenuItem>
		  <MenuItem value={2016}>2016</MenuItem>
		  <MenuItem value={2018}>2018</MenuItem>
		</Select>
		</FormControl>
            <h3 className="center">Our Movies</h3>
            <div className="box" style={mystyle}>
                {itemList}
            </div>
        </div>
    )
        
}



export default Home;