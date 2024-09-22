import  login  from './login';

describe('showWelcomeMessage', () => {
  it('deve mostrar uma mensagem de boas-vindas', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    login();
    expect(window.alert).toHaveBeenCalledWith('Bem-vinda!');
  });
});