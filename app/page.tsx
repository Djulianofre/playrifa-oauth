export default function Home() {
  return (
    <main>
      <h1>PlayRifa OAuth Redirect</h1>
      <p>Este serviço redireciona códigos de autorização OAuth para o aplicativo PlayRifa.</p>
      <p>Acesse <code>/api/oauth?code=seu_codigo</code> para testar o redirecionamento.</p>
    </main>
  );
}
