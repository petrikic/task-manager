import * as yup from 'yup';

export const registerSchema = yup.object().shape({

    confirmarSenha: yup.string()
    .required('Você deve preencher o campo de confirmação de senha.')
    .test('match', 'As senhas devem corresponderem.', function (confirmarSenha) {
        return confirmarSenha === this.parent.senha;
    }),

	senha: yup
		.string()
		.required('Você deve preencher o campo de senha.')
		.min(4, 'A senha deve ter no mínimo 4 caracteres.')
		.max(16, 'A senha deve ter no máximo 16 caracteres.'),

	usuario: yup
		.string()
		.required('Você deve preencher o campo de usuário.')
		.min(4, 'O usuário deve ter no mínimo 4 caracteres.')
		.max(16, 'O usuário deve ter no máximo 16 caracteres.'),
});
