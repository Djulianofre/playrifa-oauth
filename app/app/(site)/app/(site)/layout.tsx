export const metadata = {
  title: 'PlayRifa OAuth',
  description: 'Redirecionamento OAuth para o app PlayRifa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  );
}
