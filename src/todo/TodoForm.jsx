import React from "react";
import Grid from "../templete/grid";
import IconButton from "../templete/iconButton";
import IconButton from "../templete/iconButton";

export default props =>(
    <div role="form" className="todoForm">

        <Grid cols = '12  9 10'>
        <input id="description" className="form-control" 
            placeholder="dicione uma tarefa"></input>
        </Grid>
      

        <Grid cols='12 3 2'>
            <IconButton style="primary" icon="plus"></IconButton>
        </Grid>     
        
    </div>
)