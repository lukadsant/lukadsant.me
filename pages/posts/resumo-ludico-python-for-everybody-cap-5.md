---
title: Resumo lúdico do Python for Everybody - Cap 5 - Loops e repetição
date: 2026-04-20T00:00:00Z
lang: pt
duration: 14min
---

## Cap 5 - Loops e repetição

Lembra do problema do final do Cap 4? Você tinha um algoritmo perfeito para catalogar um animal... mas para 100 animais, teria que apertar play 100 vezes. 😫

**Loops resolvem isso.**

Um loop é uma forma de dizer ao esquilo: "repita essa tarefa múltiplas vezes **sem eu fazer nada**". Enquanto você toma café, o esquilo trabalha.

Existem dois tipos principais de loops em Python: `while` (enquanto) e `for` (para). Vamos aprender ambos.

### Loops com `while` (repetir enquanto uma condição for verdadeira)

A palavra `while` significa "enquanto". Você diz ao esquilo:

_"Enquanto essa condição for verdadeira, repita esse bloco de código"._

**Exemplo simples:**

```python
>>> contador = 1
>>> while contador <= 3:
...     print(f'Catalogando animal número {contador}')
...     contador = contador + 1
...
Catalogando animal número 1
Catalogando animal número 2
Catalogando animal número 3
```

Entenda o fluxo:

1. `contador = 1` (começa em 1)
2. `contador <= 3`? Sim (1 é menor que 3)
3. Imprime "Catalogando animal número 1"
4. `contador = contador + 1` → agora `contador = 2`
5. Volta para o `while`
6. `contador <= 3`? Sim (2 é menor que 3)
7. Imprime "Catalogando animal número 2"
8. ... repete até `contador = 3`
9. `contador <= 3`? Não (3 não é menor que 3, é igual)
10. Loop termina

**Prático:** você quer catalogar animais e perder a paciência se houver mais de 5:

```python
>>> animais_catalogados = 0
>>> paciencia = 5
>>>
>>> while animais_catalogados < paciencia:
...     nome = input('Nome do animal: ')
...     animais_catalogados = animais_catalogados + 1
...     print(f'Total catalogado: {animais_catalogados}')
...
Nome do animal: girafa
Total catalogado: 1
Nome do animal: leão
Total catalogado: 2
Nome do animal: zebra
Total catalogado: 3
Nome do animal: macaco
Total catalogado: 4
Nome do animal: elefante
Total catalogado: 5
(loop termina)
```

Simples! O loop repetiu exatamente 5 vezes, pedindo dados cada vez.

**⚠️ Cuidado com loops infinitos!**

Se você esquecer de **aumentar o contador**, o loop nunca termina:

```python
>>> contador = 1
>>> while contador <= 3:
...     print('Repetindo eternamente...')
...     # Ops! Esqueci de: contador = contador + 1
```

Isso roda **para sempre**. Se acontecer, pressione `Ctrl+C` para parar.

### Loops com `for` (repetir para cada número em uma sequência)

O `while` é poderoso, mas precisa de mais trabalho (você cuida do contador). O `for` é mais simples para casos que você **sabe quantas vezes vai repetir**.

Use `for` quando quiser repetir um número **específico de vezes**.

```python
>>> for numero in range(1, 4):
...     print(f'Número: {numero}')
...
Número: 1
Número: 2
Número: 3
```

Aqui usamos `range(1, 4)` que significa "números de 1 até 3" (note: 4 não entra, é exclusivo).

**`range()` explicado:**

- `range(5)` → 0, 1, 2, 3, 4 (de 0 até 4)
- `range(1, 5)` → 1, 2, 3, 4 (de 1 até 4)
- `range(1, 10, 2)` → 1, 3, 5, 7, 9 (de 1 até 9, pulando de 2 em 2)

**Prático:** catalogar 3 animais automaticamente:

```python
>>> for i in range(1, 4):
...     nome = input(f'Animal {i}: ')
...     print(f'Catalogado: {nome}')
...
Animal 1: girafa
Catalogado: girafa
Animal 2: leão
Catalogado: leão
Animal 3: zebra
Catalogado: zebra
```

Sem gerenciar variável de contador! Muito mais limpo.

### `for` com listas (repetir para cada item)

Mas espera, `range()` gera números. E se você quisesse **repetir para cada item em uma lista**?

Não podemos usar listas ainda (vem depois), mas você pode fazer assim com strings:

```python
>>> nomes = 'girafa leão zebra'
>>> for nome in nomes.split():
...     print(f'Este é um {nome}')
...
Este é um girafa
Este é um leão
Este é um zebra
```

(O `.split()` divide a string em palavras. Detalhes depois!)

Mas a ideia é clara: para cada item, faça algo.

### Controlando loops: `break` e `continue`

Às vezes você quer **sair do loop antes de terminar** ou **pular uma repetição**.

**`break`**: sai do loop imediatamente

```python
>>> contador = 0
>>> while True:  # Loop infinito
...     contador = contador + 1
...     if contador == 3:
...         print('Parou aqui!')
...         break
...     print(f'Contando: {contador}')
...
Contando: 1
Contando: 2
Parou aqui!
```

**`continue`**: pula para a próxima iteração

```python
>>> for numero in range(1, 6):
...     if numero == 3:
...         continue  # Pula o 3
...     print(numero)
...
1
2
4
5
```

**Prático:** catalogar animais, mas parar se disser "sair":

```python
>>> animais_totais = 0
>>>
>>> while True:
...     nome = input('Nome do animal (ou "sair" para terminar): ')
...     if nome == 'sair':
...         print(f'Total de animais: {animais_totais}')
...         break
...     animais_totais = animais_totais + 1
...     print(f'Catalogado! Total: {animais_totais}')
...
Nome do animal (ou "sair" para terminar): girafa
Catalogado! Total: 1
Nome do animal (ou "sair" para terminar): leão
Catalogado! Total: 2
Nome do animal (ou "sair" para terminar): sair
Total de animais: 2
```

### Quando usar `while` vs `for`

**Use `while` quando:**

- Você não sabe quantas vezes vai repetir
- A condição é complexa
- Quer controle total sobre quando parar

```python
>>> while True:  # Repetir infinitamente até algo específico
...     resposta = input('Quer continuar? ')
...     if resposta == 'não':
...         break
```

**Use `for` quando:**

- Você sabe exatamente quantas vezes vai repetir
- Quer iterar sobre uma sequência (números, itens, etc)
- Código mais simples e legível

```python
>>> for i in range(10):  # Repetir exatamente 10 vezes
...     print(i)
```

### Programa completo: catalogando múltiplos animais

Finalmente! Aqui está o programa que você não conseguia fazer no Cap 4:

```python
# =================================
# Catalogador de Múltiplos Animais
# =================================

quantidade_animais = int(input('Quantos animais deseja catalogar? '))

print('\n--- Iniciando catalogação ---\n')

for numero in range(1, quantidade_animais + 1):
    print(f'ANIMAL {numero}:')

    # Entrada de dados
    nome = input('Nome: ')
    peso = float(input('Peso (kg): '))
    agressividade = int(input('Agressividade (0-10): '))

    # Determinando tamanho
    if peso > 500:
        tamanho = 'GIGANTE'
    elif peso > 100:
        tamanho = 'GRANDE'
    elif peso > 10:
        tamanho = 'MÉDIO'
    else:
        tamanho = 'PEQUENO'

    # Determinando perigo
    if agressividade > 7:
        nivel_risco = 'PERIGOSO'
    elif agressividade > 4:
        nivel_risco = 'MODERADAMENTE AGRESSIVO'
    else:
        nivel_risco = 'DÓCIL'

    # Exibindo resultado
    print(f'\nTamanho: {tamanho}')
    print(f'Risco: {nivel_risco}')
    print()

print(f'--- Catalogação concluída! Total: {quantidade_animais} animais ---')
```

Rode isso! Você entra com a quantidade, e o programa repete **automaticamente** para cada animal. Sem apertar play de novo!

A magia está em:

1. `for numero in range(1, quantidade_animais + 1)` → repete a quantidade exata de vezes
2. Tudo dentro do `for` é repetido
3. O esquilo faz todo o trabalho

### Programa com `while` (até o usuário desistir)

Ou você pode deixar o usuário decidir quando parar:

```python
# =================================
# Catalogador Infinito (com saída)
# =================================

total = 0

while True:
    print(f'\n--- Animal #{total + 1} ---')

    # Entrada
    nome = input('Nome do animal (ou "sair" para terminar): ')
    if nome.lower() == 'sair':
        break

    peso = float(input('Peso (kg): '))
    agressividade = int(input('Agressividade (0-10): '))

    # Classificação
    if peso > 500:
        tamanho = 'GIGANTE'
    elif peso > 100:
        tamanho = 'GRANDE'
    elif peso > 10:
        tamanho = 'MÉDIO'
    else:
        tamanho = 'PEQUENO'

    print(f'\n→ {nome.upper()} ({tamanho})')
    total = total + 1

print(f'\nFim da catalogação! Total: {total} animais')
```

Aqui o usuário digita quantos animais quiser, e quando cansa, digita "sair" e para.

## Resumindo o Capítulo 5

Você acaba de desbloquear o **quarto superpoder**:

**Fase 1 (Cap 2)**: Comunicação → falar com o intérprete
**Fase 2 (Cap 3)**: Dados → guardar e manipular informações
**Fase 3 (Cap 4)**: Decisões → tomar ações baseadas em dados
**Fase 4 (Cap 5)**: Repetição → fazer o mesmo automaticamente múltiplas vezes

**Conceitos-chave:**

- **`while`**: "enquanto essa condição for verdadeira, faça isso"
- **`for`**: "para cada número/item, faça isso"
- **`range()`**: gera sequências de números
- **`range(1, 5)`**: números de 1 até 4 (5 é exclusivo)
- **`range(0, 10, 2)`**: 0, 2, 4, 6, 8 (pulando de 2 em 2)
- **`break`**: sai do loop imediatamente
- **`continue`**: pula para a próxima iteração

**A transformação final:** o esquilo deixou de ser um "executador de uma tarefa". Agora é um **autômato inteligente**:

1. Recebe dados (entrada)
2. Guarda em variáveis (dados)
3. Toma decisões (decisões)
4. **Repete tudo quantas vezes precisar** (repetição)

Isso é o coração da automação! Agora você não precisa clicar "play" 1000 vezes. O compute faz sozinho.

## Um problema silencioso: repetição de código

Olhe para os dois programas que fizemos. Você reparou em algo?

Aqui está o código que repete em ambos:

```python
# Em ambos os programas, isso aparece:
if peso > 500:
    tamanho = 'GIGANTE'
elif peso > 100:
    tamanho = 'GRANDE'
elif peso > 10:
    tamanho = 'MÉDIO'
else:
    tamanho = 'PEQUENO'

if agressividade > 7:
    nivel_risco = 'PERIGOSO'
elif agressividade > 4:
    nivel_risco = 'MODERADAMENTE AGRESSIVO'
else:
    nivel_risco = 'DÓCIL'
```

**Esse código aparece duas vezes!** Se você decidir mudar os critérios de tamanho, precisa mudar em dois lugares. E se tiver 10 programas? Mudar em 10 lugares!

Além disso, o código fica cada vez mais **longo e confuso**. A lógica de classificação é importante, mas está **misturada** com a lógica de entrada/saída.

**O problema:** você está copiando e colando código. Programadores odeiam fazer isso.

## A solução: Funções (próximo capítulo)

No Cap 6, você aprenderá sobre **funções**. Uma função é um bloco de código que você **nomeia** e **reutiliza**.

Com funções, você faria algo assim:

```python
def classificar_animal(peso, agressividade):
    # Determina tamanho
    if peso > 500:
        tamanho = 'GIGANTE'
    elif peso > 100:
        tamanho = 'GRANDE'
    elif peso > 10:
        tamanho = 'MÉDIO'
    else:
        tamanho = 'PEQUENO'

    # Determina risco
    if agressividade > 7:
        nivel_risco = 'PERIGOSO'
    elif agressividade > 4:
        nivel_risco = 'MODERADAMENTE AGRESSIVO'
    else:
        nivel_risco = 'DÓCIL'

    return tamanho, nivel_risco

# Depois, em qualquer programa, basta chamar:
tamanho, risco = classificar_animal(peso, agressividade)
```

Agora o código fica **limpo**, **reutilizável** e **fácil de manter**!

Ambos os programas se transformam em:

```python
# Catalogador com for
for numero in range(1, quantidade_animais + 1):
    nome = input('Nome: ')
    peso = float(input('Peso (kg): '))
    agressividade = int(input('Agressividade (0-10): '))

    # Uma linha só!
    tamanho, risco = classificar_animal(peso, agressividade)

    print(f'Tamanho: {tamanho}')
    print(f'Risco: {risco}')
```

Muito mais elegante!

## O que vem depois?

Você tem agora a base completa de programação:

- ✅ Entrada de dados (`input()`)
- ✅ Saída de dados (`print()`)
- ✅ Tipos e variáveis
- ✅ Decisões (`if/else`)
- ✅ Repetição (`for/while`)

Com essas cinco ferramentas, você já consegue resolver problemas reais! Nos próximos capítulos vamos explorar:

- **Cap 6**: Funções (agrupar código reutilizável)
- **Cap 7**: Listas (guardar múltiplos valores)
- **Cap 8**: Dicionários (guardar pares nome-valor)

Mas já com o que você aprendeu, você consegue criar programas que importam!

[Voltar ao índice](./resumo-ludico-python-for-everybody)
[Anterior: Cap 4](./resumo-ludico-python-for-everybody-cap-4)
[Próximo: Cap 6](./resumo-ludico-python-for-everybody-cap-6)
