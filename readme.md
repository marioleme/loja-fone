# Conceitos gerais

## HTML
É uma linguagem de marcação que tem as seguintes responsabilidades:
- Conteúdo;
- Semântica (tags);
- Estrutura

## CSS
É uma linguagem de estilos que tem as seguintes responsabilidades:
- Visual;

## Geral
- Call to action (cta) &rarr; botão principal ou botão de ação da página;

# HTML - Tópicos importantes

## **Tags**
- `<body>` &rarr; parte com conteúdo visível ao usário;
- `<head>` &rarr; parte de configurações e metadados não visível ao usuário;
- `<header>` &rarr; seção do cabeçalho do site;
- `<nav>` &rarr; menu de navegação
- `<h1> a <h5>` &rarr; tags HTML para título e é recomendado usar para sites até `<h3>`;
- `<a>` &rarr; Link ('a' de âncora) usado para definir a navegação do usuário para um lugar determinado no conteúdo do atributo `href`;
- `<div>` &rarr; sem valor semântico e serve apenas para dividir ou separar conteúdos;
- `<dl>` &rarr; chamada de description list, que serve para descrever um grupo de informação sobre alguma coisa, agrupando as informações de título com a tag description title `<dt>` e definindo sua descrição com define description `<dd>`;

## Boas práticas com **Botões**
- Quando o botão for direcionar o usuário para outra página, pode ser a tag `a` (link) pois relamente se trata de um link para outra página;
- Quando o botão servir para qualquer outra função que não um link para outra página, usar a tag `button`;

# CSS - Tópicos importantes

## **Reset CSS**
Você construir o seu reset do CSS, mas pode utilizar opções prontas, como por exemplo:
- **Eric Meyer** &rarr; Indicado para maioria dos projetos;  
- **Normalize** &rarr; Indicado para grandes projetos;

## Herança de atributos com **INHERIT**
- Serve para que seja herdado valores de atributo do pai ou subescreva valores default de browsers;

## Uso de **FONTS**
- Normalmente, prefira usar no máximo 3 famílias de fonte, exemplo: 300 (light), 400 (normal) e 700 (bold);
- Usar a tag link no HTML como o caminho das fontes que serão utilizados no site a partir do Google Fonts;

## **FLOAT** - Principais regras de posicionamento
- Cria novo contexto (similar a uma nova camada) acima para o elemento com float deixando o espaço livre para outros elementos;
- O elemento flutuante nunca irá sobrepor conteúdo de texto dos elementos que ocuparam o espaço vago do contexto anterior;
- O tamanho do elemento com float é ajustado de linha inteira para o tamanho do seu conteúdo;
- Como o elemento pai ignora o elemento com float, ele acaba perdendo o tamanho de sua altura que era ajustada de acordo com o tamanho desse elemento filho e para resolver precisa usar a propriedade “overflow: hidden” no elemento pai;

## **PADDING/MARGIN** com valores resumidos
- Opção 1 &rarr; `padding: <top> <right> <bottom> <left>;`
- Opção 2 &rarr; `margin: <top e bottom> <right e left>;`
- Opção 3 &rarr; `padding: <top> <right e left> <bottom>;`

## Seletores de **tag | id | class** no CSS

### **tag**
- seleciona uma tag direto do HTML por meio do seu próprio nome;
- no CSS, o seletor é usado direto pelo nome da tag no HTML;
- influencia todas tags do HTML com o mesmo nome;
### **id**
- identifica uma tag específica com um nome (id) único que não podem se repetir na página HTML;
- facilita a aplicação de atributos e comportamentos específicos para esse elemento no CSS;
- o seletor é usado com um sustenido (#) na frente do seu id determinado no HTML;
### **class**
- pode ser utilizada mais de uma vez em várias tags;
- facilita mais a manutenção do código do que a utilização do `id`;
- o seletor é usado com um ponto (.) na frente do nome da classe determinada no HTML;

## propriedade **CLEAR**
- não permite que outros elementos flutuem na mesma linha dele;- força a quebra de sua linha para limpar qualquer elemento que esteja flutuando em determinada de acordo com o atributo;
- `clear: right` &rarr; não permite elementos flutuando a sua direita;
- `clear: left` &rarr; não permite elementos flutuando a sua esquerda;
- `clear: both` &rarr; não permite elementos flutuando de qualquer lado;

## Sobre **DISPLAY**
### **inline****
- deixa os elementos na mesma linha;
- não permite definir width e height;
- exemplos de tags com esse comportamento padrão: `a` | ;
### **block**
- não deixa os elementos na mesma linha;
- permite definir width e height;
### **inline-block**
- deixa os elementos na mesma linha;
- permite definir width e height;

## Sobre **POSITION**
### **absolute**
- Cria novo contexto (similar a uma nova camada) acima para o elemento com `position: absolute` deixando o espaço livre abaixo dele ser ocupado por outros elementos;
- O tamanho do elemento passa a ser definido pela largura e altura do seu conteúdo;
- Trabalha com posicionamento absoluto em relação a página usando atributos do eixo **X** (top e bottom) e do eixo **Y** (left e right);
- Evite usar dois valores do mesmo eixo e procure usar pares de valores de eixos diferentes para o posicionamento correto;
- Para centralizar elementos com esse position, posicione com valores dos eixos e depois para compensar as dimensões do elemento a centralizar, retire 50% do seu tamanho;




# Dicas profissionais
- O compartilhamento de conhecimento leva à sedimenção do seu aprendizado. Aproveite!!
- Procure utilizar termos em **inglês** no seu código e deixe em **português** o nome dos arquivos HTML;
- organize seus arquivos de código em pastas por tipo;