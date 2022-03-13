import React from 'react';
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

import { registerSchema } from '../../validations/RegisterValidation';
import AlertMessage from '../../components/AlertMessage';
import history from '../../history';
import api from '../../api';

const theme = createTheme();

export default function Register() {
	const [error, setError] = React.useState();

	async function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const user = {
			usuario: data.get('usuario'),
			senha: data.get('senha'),
			confirmarSenha: data.get('confirmarSenha'),
		};

		try {
			await registerSchema.validate(user);
			let data = {
				username: user.usuario,
				password: user.senha,
			};
			await api.post('/register', data);
			history.push('/user/login');
		} catch (err) {
			let postError = err.response ? err.response.data.status : undefined;
			setError({
				msg: postError ? postError : err.message,
				key: Math.random(),
			});
		}
	}

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
						Cadastro
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
						<TextField
							margin="normal"
							required
							fullWidth
							name="confirmarSenha"
							label="Repita a senha"
							type="password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Cadastrar
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/user/login" variant="body2">
									{'Já possui uma conta? Entrar'}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
