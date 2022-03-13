import { Button, Typography, Toolbar, AppBar, Grid } from '@material-ui/core';
import {useContext} from 'react';

import { Context } from '../context/AuthContext';

export default function Home() {

	const { handleLogout } = useContext(Context);

	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
				>
					<Typography variant="h6" color="inherit">
						Task manager
					</Typography>
				</Grid>
				<Grid
					container
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
				>
					<Button color="inherit" onClick={handleLogout}>Sair</Button>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
