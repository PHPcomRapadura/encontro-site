# Encontro de dev's PHP com Rapadura

Website do evento

## Como desenvolver

- Editor de texto a sua escolha (i.e Vscode)
- CLI do tailwindcss para compilar o css do projeto: [CLI](https://tailwindcss.com/blog/standalone-cli)

  - Download da CLI: https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.0.9
  - Instalação ambiente linux:

```sh
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/download/v4.0.9/tailwindcss-linux-x64

chmod +x tailwindcss-linux-x64

mv tailwindcss-linux-x64 tailwindcss

./tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch --minify
```

### Adicionar novos icones

- Faça download do svg e salve em `assets/svg`
- Edite o arquivo `assets/css/icons.css` e adicione uma classe seguindo o padrão já utilizado `.icon--<nome>` 