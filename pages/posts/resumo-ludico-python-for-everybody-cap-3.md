---
title: Resumo lúdico do Python for Everybody - Cap 3 - Valores, tipos e variáveis
date: 2026-04-20T00:00:00Z
lang: pt
duration: 10min
---

## Cap 3 - Valores, tipos e variáveis

Agora que já sabemos falar com o soldado romano, precisamos aprender a **guardar e manipular dados** de forma mais útil para o esquilo.

Imagine essa situação: você, o soldado romano e o esquilo estão catalogando animais em um zoológico. Precisam registrar informações como o nome do animal, quantos tem, o peso médio, etc. Como fazer isso?

### Valores e tipos

Tudo começa com compreender que **nem todos os valores são iguais**. Uma "girafa" é bem diferente do número `3`, e o número `45.5` é diferente de `45`.

O soldado romano é bem chato nisso: ele separa tudo em tipos diferentes. Se está entre aspas, é **texto**. Se é um número sem ponto, é **inteiro**. Se tem ponto decimal, é **número real/float**.

Vamos ver na prática. Você e seus companheiros encontram três animais e descrevem assim:

```python
>>> type('girafa')
<class 'str'>
>>> type(3)
<class 'int'>
>>> type(45.5)
<class 'float'>
```

Resultado:

- `'girafa'` → **texto** (entre aspas)
- `3` → **inteiro** (um número de contagem)
- `45.5` → **decimal** (o peso médio em quilos)

**Por que isso importa?**

Imagine que você quer somar o peso de dois animais ou contar quantos tem. Se misturar os tipos de forma errada, o soldado romano vai ficar confuso e recusar a ordem. Ele precisa saber exatamente o que está guardando antes de usar depois.

### Erro sem barulho (quando o soldado romano toma tudo ao pé da letra)

Aqui tem um exemplo que mostra bem como o soldado romano é **literalmente exigente**.

Você quer contar um milhão de formigas e pensa "vou usar `1,000,000` para deixar claro":

```python
>>> print(1,000,000)
1 0 0
```

Espera... isso não é um milhão! O soldado romano leu isso como **três números separados por vírgulas**, não como um número único.

Resultado: você vê `1 0 0` na tela, que não faz sentido nenhum para contar formigas.

**A lição?** O soldado romano obedece **exatamente** o que você escreve, não o que você _pretendia_ escrever. Ele é literamente demais para adivinhar intenções!

### Variáveis

Agora vem a parte mais importante: **guardar esses valores** com nomes claros.

Uma **variável** é exatamente isso: um nome que você coloca em um valor para guardá-lo e usar depois. É como colocar uma **etiqueta em uma caixa**.

Você está catalogando animais. Primeiro, guarda um gato:

```python
>>> animal_1 = 'gato'
>>> quantidade_1 = 5
>>> peso_medio_1 = 4.5
```

Tradução:

- `animal_1` recebe o **texto** `'gato'`
- `quantidade_1` recebe o **inteiro** `5`
- `peso_medio_1` recebe o **decimal** `4.5`

Depois, para **ver o que guardou**, você pede:

```python
>>> print(animal_1)
gato
>>> print(quantidade_1)
5
>>> print(peso_medio_1)
4.5
```

Agora catalogando mais um animal, um macaco:

```python
>>> animal_2 = 'macaco'
>>> quantidade_2 = 8
>>> peso_medio_2 = 12.3
```

**Entendeu a ideia?** Em vez de ficar repetindo "gato, 5, 4.5" toda vez, você só escreve `animal_1` e o esquilo lembra automaticamente. Muito melhor!

### Regras para nomear bem suas variáveis

Agora que você entendeu variáveis, precisa saber como **nomeá-las**: o soldado romano não aceita qualquer coisa.

**❌ Não é permitido:**

- Começar com número: `1_animal` ❌
- Usar símbolos estranhos: `animal@gato` ❌
- Usar palavras que o soldado romano já usa: `class`, `for`, `if` ❌ (palavras reservadas)

**✅ Permitido:**

- `animal_1`, `animal_2` ✓
- `quantidade_girafas` ✓
- `peso_medio_macaco` ✓
- `total_animais_catalogados` ✓

As **palavras reservadas** que o intérprete reconhece formam uma lista pequena, mas importante:

```txt
False     await     else        import    pass
None      break     except      in        raise
True      class     finally     is        return
and       continue  for         lambda    try
as        def       from        nonlocal  while
assert    del       global      not       with
async     elif      if          or        yield
```

**Dica importante:** use nomes que **contam uma história**. Compare:

- ❌ Ruim: `x`, `y`, `z`, `a`
- ✅ Bom: `nome_animal`, `quantidade`, `peso`

Quando você voltar ao código semana que vem, o código bom você entenderá em 5 segundos. O código ruim? Nem vai lembrar para que serve.

### Sentenças e expressões

Aqui tem uma distinção **super importante** que muitos iniciantes não captam.

**Sentença**: uma ordem que o intérprete traduz e o esquilo **executa**.

**Expressão**: um cálculo que o esquilo faz e **produz um resultado**.

Exemplo:

```python
>>> 1 + 1
2
```

Você escreveu `1 + 1` e o esquilo retornou `2`. Legal! Mas... e daí? O resultado apareceu na tela mas **não foi guardado**.

Agora com sentença:

```python
>>> total = 1 + 1
```

Aqui você pediu para:

1. O esquilo **calcular** `1 + 1`
2. **Guardar** o resultado na variável `total`

A diferença é pequena mas **crucial**. Se você quer trabalhar com o resultado depois, precisa guardá-lo em uma variável!

**Prático:** vamos calcular a população total de animais:

```python
>>> quantidade_1 = 5     # gatos
>>> quantidade_2 = 8     # macacos
>>> total = quantidade_1 + quantidade_2
>>> print(total)
13
```

Sem `total = `, o cálculo acontecia mas desaparecia. Com `total = `, o resultado ficou guardado!

### Operadores e por que a ordem importa

Os operadores `+`, `-`, `*`, `/`, `//` e `%` são ferramentas que o esquilo usa para **combinar números**.

Mas aqui tem uma **pegadinha**: diferentes operadores dão resultados bem diferentes!

**Cenário real:** você está catalogando animais e precisa fazer cálculos:

```python
>>> quantidade_leoes = 10
>>> quantidade_zebras = 3
```

Agora vamos ver cada operador:

```python
>>> quantidade_leoes + quantidade_zebras
13
>>> quantidade_leoes - quantidade_zebras
7
>>> quantidade_leoes * quantidade_zebras
30
```

Até aqui fácil. Mas agora vem o complicado:

```python
>>> tempo_alimentacao = 57     # minutos
>>> tempo_para_uma_refeicao = 60

>>> tempo_alimentacao / tempo_para_uma_refeicao
0.95

>>> tempo_alimentacao // tempo_para_uma_refeicao
0

>>> tempo_alimentacao % tempo_para_uma_refeicao
57
```

**O que aconteceu?**

- `/` → divisão normal (resultado com decimal: 0.95)
- `//` → divisão inteira (só a parte inteira: 0)
- `%` → resto da divisão (sobra: 57)

**Prática:** se você quer dividir 10 maçãs entre 3 animais e saber quanto sobra:

```python
>>> macas = 10
>>> animais = 3
>>> macas_por_animal = macas // animais
>>> macas_sobrando = macas % animais
>>> print(macas_por_animal)
3
>>> print(macas_sobrando)
1
```

Cada animal recebe 3 maçãs e sobra 1. **A ordem importa porque operadores diferentes fazem coisas diferentes!**

### Entrada do usuário: conversando com você

Até agora você digitou tudo manualmente. Mas e se quisesse que o **soldado romano pedisse informações** enquanto o programa roda?

Use o comando `input()`:

```python
>>> animal = input('Qual é o nome do animal? ')
Qual é o nome do animal? leopardo
>>> print(animal)
leopardo
```

Pronto! O soldado romano perguntou, você respondeu, e ele guardou na variável `animal`.

Agora imagine catalogando vários animais:

```python
>>> nome = input('Nome do animal: ')
Nome do animal: girafa
>>> peso = input('Peso médio (kg): ')
Peso médio (kg): 1200
>>> print(nome)
girafa
>>> print(peso)
1200
```

**Mas** tem um detalhe importante: `input()` sempre traz **texto**.

Se você tentar somar:

```python
>>> peso_animal_1 = input('Peso animal 1: ')
Peso animal 1: 100
>>> peso_animal_2 = input('Peso animal 2: ')
Peso animal 2: 150
>>> total = peso_animal_1 + peso_animal_2
```

Adivinhe o resultado? `'100150'` (texto concatenado), não `250`!

Para converter para número, use `int()`:

```python
>>> peso_animal_1 = int(input('Peso animal 1: '))
Peso animal 1: 100
>>> peso_animal_2 = int(input('Peso animal 2: '))
Peso animal 2: 150
>>> total = peso_animal_1 + peso_animal_2
>>> print(total)
250
```

Agora sim! O soldado romano converteu o texto para número antes de guardar.

### Comentários: deixando mensagens para você mesmo

Conforme seus programas ficam mais complexos, você vai se perder. **Comentários** salvam a vida.

Um comentário começa com `#` e o soldado romano **ignora completamente**. É uma mensagem só para você (ou para outro programador que ler seu código).

Exemplo ruim:

```python
gatos = 5
peso_gatos = 4.5
total = gatos * peso_gatos
print(total)
```

Daqui a um mês: "Por que estou multiplicando quantidade por peso? Que cálculo é esse?"

Exemplo bom:

```python
# Catalogando gatos do zoológico
quantidade_gatos = 5
peso_medio_gatos = 4.5

# Calculando peso total de todos os gatos
peso_total = quantidade_gatos * peso_medio_gatos
print(peso_total)
```

Agora está claro! Os comentários **explicam a intenção**, não repetem o óbvio.

❌ Evite comentários óbvios:

```python
animal = 'leão'  # Atribuindo leão à variável animal
```

✅ Use comentários úteis:

```python
animal = 'leão'  # Animal mais forte do zoológico, agressivo
```

## Sua primeira catalogação completa

Você agora tem todas as ferramentas. Vamos fazer um programa completo catalogando um animal:

```python
# Catalogação de animais do zoológico
# Programa simples para registrar dados

nome = input('Nome do animal: ')
quantidade = int(input('Quantidade: '))
peso_medio = float(input('Peso médio (kg): '))

# Calculando dados
peso_total = quantidade * peso_medio
peso_por_unidade = peso_total / quantidade

# Exibindo resultado
print('Animal:', nome)
print('Quantidade:', quantidade)
print('Peso médio:', peso_medio)
print('Peso total:', peso_total)
```

Execute isso e veja como funciona! O soldado romano vai:

1. Pedir as informações (input)
2. Converter para os tipos certos (int, float)
3. Fazer os cálculos (`+`, `*`, `/`)
4. Guardar tudo em variáveis com nomes claros
5. Mostrar os resultados (print)

## Resumindo o Capítulo 3

Você passou pela **segunda fase** do seu aprendizado:

**Fase 1 (Cap 2)**: Como falar com o intérprete

- Palavras reservadas
- O comando `print()`

**Fase 2 (Cap 3)**: Como guardar e manipular dados

- **Tipos**: `str` (texto), `int` (inteiro), `float` (decimal)
- **Variáveis**: etiquetas que guardam valores
- **Nomes claros**: facilitam sua vida depois
- **Operadores**: `+`, `-`, `*`, `/`, `//`, `%`
- **Entrada**: `input()` para pedir dados
- **Comentários**: para você não se perder

**A verdadeira transformação:** o esquilo deixou de ser um mero "executador de ordens". Agora é um **processador de dados**:

1. Recebe informações (entrada)
2. As guarda em variáveis bem nomeadas
3. Faz operações com elas
4. Devolve os resultados (saída)

Isso é o coração de qualquer programa!

**No próximo capítulo**, você aprenderá a fazer decisões (`if/else`) e repetir operações (`for/while`), transformando o esquilo em um processador **inteligente e autônomo**!

[Voltar ao índice](./resumo-ludico-python-for-everybody)
[Anterior: Cap 2](./resumo-ludico-python-for-everybody-cap-2)
[Próximo: Cap 4](./resumo-ludico-python-for-everybody-cap-4)
