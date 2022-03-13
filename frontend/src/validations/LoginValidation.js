import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    password: yup
        .string()
        .required('Você deve preencher o campo de senha.'),

	username: yup
		.string()
		.required('Você deve preencher o campo de usuário.'),
});
