// Recupera os registros do localStorage
export let Registros1 = JSON.parse(localStorage.getItem('Registros') || '[]');
export let ultimoRegistro = Registros1.length > 0 ? Registros1[Registros1.length - 1] : null;
// Recupera o carrinho atual do localStorage para o usuário atual
export let CarrinhosPorUsuario1 = JSON.parse(localStorage.getItem('CarrinhosPorUsuario') || '{}');
export let carrinho = ultimoRegistro ? CarrinhosPorUsuario1[ultimoRegistro.nome] || [] : [];
