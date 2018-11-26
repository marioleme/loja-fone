# HTML

É uma linguagem de marcação que tem as seguintes responsabilidades:
- Conteúdo;
- Semântica (tags);
- Estrutura

## Tags
- `<body>` &rarr; parte com conteúdo visível ao usário;
- `<head>` &rarr; parte de configurações e metadados não visível ao usuário;
- `<header>` &rarr; seção do cabeçalho do site;
- `<nav>` &rarr; menu de navegação
- `<h1> a <h5>` &rarr; tags HTML para título e é recomendado usar para sites até `<h3>`;
- `<a>` &rarr; Link ('a' de âncora) usado para definir a navegação do usuário para um lugar determinado no conteúdo do atributo `href`.

# CSS

É uma linguagem de estilos que tem as seguintes responsabilidades:
- Visual;


## Reset CSS
Você construir o seu reset do CSS, mas pode utilizar opções prontas, como por exemplo:
- **Eric Meyer** &rarr; Indicado para maioria dos projetos;  
- **Normalize** &rarr; Indicado para grandes projetos;

## Herança de atributos com INHERIT
- Serve para que seja herdado valores de atributo do pai ou subescreva valores default de browsers;

## Uso de FONTS
- Normalmente, prefira usar no máximo 3 famílias de fonte, exemplo: 300 (light), 400 (normal) e 700 (bold);
- Usar a tag link no HTML como o caminho das fontes que serão utilizados no site a partir do Google Fonts;

## Posicionamento com FLOAT
### Principais regras
- Cria novo contexto (similar a uma nova camada) acima para o elemento com float deixando o espaço livre para outros elementos;
- O elemento flutuante nunca irá sobrepor conteúdo de texto dos elementos que ocuparam o espaço vago do contexto anterior;
- O tamanho do elemento com float é ajustado de linha inteira para o tamanho do seu conteúdo;
- Como o elemento pai ignora o elemento com float, ele acaba perdendo o tamanho de sua altura que era ajustada de acordo com o tamanho desse elemento filho e para resolver precisa usar a propriedade “overflow: hidden” no elemento pai;

## Opçães de valores resumidos dos atributos de PADDING/MARGIN

### Opção 1

`padding: <top> <right> <bottom> <left>;`

### Opção 2
`margin: <top e bottom> <right e left>;`

### Opção 3
`padding: <top> <right e left> <bottom>;`