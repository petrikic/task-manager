import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { loginSchema } from '../../validations/LoginValidation';
import AlertMessage from '../../components/AlertMessage';

import { Context } from '../../context/AuthContext';

const theme = createTheme();

export default function Login() {
	const [error, setError] = React.useState();
	const { handleLogin } = useContext(Context);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const user = {
			username: data.get('usuario'),
			password: data.get('senha'),
		};

		try {
			await loginSchema.validate(user);
			await handleLogin(user);
		} catch (err) {
			console.log(err.response)
			let postError = err.response ? err.response.data.status : undefined;
			setError({ msg: postError ? postError : err.message , key: Math.random() });
		}
	};

	return (
		<ThemeProvider theme={theme}>
			{error ? <AlertMessage key={error.key} message={error.msg} /> : null}
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 16,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
						<LockIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="usuario"
							label="Usuario"
							name="usuario"
							autoComplete="usuario"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="senha"
							label="Senha"
							type="password"
							id="senha"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Entrar
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/user/register" variant="body2">
									{'Ainda não possui uma conta? Cadastre-se'}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
