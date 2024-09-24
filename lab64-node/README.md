Testar a pagina inicial:
curl http://127.0.0.1:3000/

Testar a pagina sobre:
curl http://127.0.0.1:3000/sobre

Testar a pagina erro404:
curl http://127.0.0.1:3000/qualquercoisa

Testar o upload de arquivos:
curl -X POST http://127.0.0.1:3000/upload -d "fileData=simulacao"