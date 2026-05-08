---
title: Resumo lúdico do Python for Everybody - Cap 7 - Listas
date: 2026-04-20T00:00:00Z
lang: pt
duration: 18min
---

## Cap 7 - Listas

Até agora você catalogava um animal de cada vez.

E se quisesse **armazenar múltiplos animais** na memória?

Poderia fazer assim:

```python
animal1 = 'Girafa'
animal2 = 'Leão'
animal3 = 'Macaco'
animal4 = 'Formiga'
animal5 = 'Elefante'
```

Mas e se fossem **100 animais**? Ou **1000**?

**Listas resolvem isso.**

### O que é uma lista?

Uma **lista** é um **container** — um recipiente que guarda **múltiplos valores** em ordem.

```python
>>> animais = ['Girafa', 'Leão', 'Macaco', 'Formiga', 'Elefante']
>>> animais
['Girafa', 'Leão', 'Macaco', 'Formiga', 'Elefante']
```

**Sintaxe:**

- `[ ]` → define uma lista
- Valores separados por `,`
- Ordem importa (primeiro, segundo, terceiro...)

### Acessando elementos: índices

Para pegar um animal específico, use **índice** (posição):

```python
>>> animais = ['Girafa', 'Leão', 'Macaco', 'Formiga', 'Elefante']
>>> animais[0]
'Girafa'
>>> animais[1]
'Leão'
>>> animais[4]
'Elefante'
```

**Atenção:** índice começa em **0**, não em 1!

```
    0      1       2        3        4
['Girafa', 'Leão', 'Macaco', 'Formiga', 'Elefante']
```

**Índices negativos** contam de trás para frente:

```python
>>> animais[-1]
'Elefante'
>>> animais[-2]
'Formiga'
```

**Fatiamento** (pegar um pedaço da lista):

```python
>>> animais[1:3]
['Leão', 'Macaco']
>>> animais[0:2]
['Girafa', 'Leão']
>>> animais[2:]
['Macaco', 'Formiga', 'Elefante']
```

**Regra:** `lista[início:fim]` pega do `início` até `fim` (não inclui `fim`).

### Adicionando e removendo

**Adicionar no final:**

```python
>>> animais = ['Girafa', 'Leão']
>>> animais.append('Macaco')
>>> animais
['Girafa', 'Leão', 'Macaco']
```

**Adicionar em posição específica:**

```python
>>> animais.insert(1, 'Elefante')
>>> animais
['Girafa', 'Elefante', 'Leão', 'Macaco']
```

**Remover por índice:**

```python
>>> animais.pop(1)
'Elefante'
>>> animais
['Girafa', 'Leão', 'Macaco']
```

**Remover por valor:**

```python
>>> animais.remove('Leão')
>>> animais
['Girafa', 'Macaco']
```

**Saber o tamanho:**

```python
>>> len(animais)
2
```

### Listas com números

Não precisa ser texto. Pode ser qualquer tipo:

```python
>>> pesos = [1200, 190, 12, 0.001, 5000]
>>> pesos[0]
1200
>>> pesos[1]
190
```

**Operações matemáticas:**

```python
>>> pesos = [1200, 190, 12, 0.001, 5000]
>>> sum(pesos)  # soma
6402.001
>>> max(pesos)  # maior
5000
>>> min(pesos)  # menor
0.001
>>> len(pesos)  # quantidade
5
```

### Percorrendo listas com loops

Aqui vem o **verdadeiro poder** das listas!

**For com range (jeito antigo):**

```python
>>> animais = ['Girafa', 'Leão', 'Macaco']
>>> for i in range(len(animais)):
...     print(f'Animal {i}: {animais[i]}')
...
Animal 0: Girafa
Animal 1: Leão
Animal 2: Macaco
```

**For direto na lista (jeito pythônico):**

```python
>>> animais = ['Girafa', 'Leão', 'Macaco']
>>> for animal in animais:
...     print(f'Catalogando: {animal}')
...
Catalogando: Girafa
Catalogando: Leão
Catalogando: Macaco
```

O segundo jeito é **muito mais legível**!

**Com índice:**

```python
>>> for i, animal in enumerate(animais):
...     print(f'{i+1}. {animal}')
...
1. Girafa
2. Leão
3. Macaco
```

### Listas de dados estruturados

E se cada animal tiver **múltiplas informações**?

Você pode fazer uma lista onde cada elemento é **também uma lista**:

```python
>>> animais = [
...     ['Girafa', 1200, 3],
...     ['Leão', 190, 8],
...     ['Macaco', 12, 5]
... ]
>>>
>>> animais[0]
['Girafa', 1200, 3]
>>> animais[0][0]
'Girafa'
>>> animais[0][1]
1200
>>> animais[1][2]
8
```

**Assim:**

- `animais[0]` → primeiro animal (lista completa)
- `animais[0][0]` → nome do primeiro animal
- `animais[0][1]` → peso do primeiro animal

**Percorrendo:**

```python
>>> for animal in animais:
...     nome = animal[0]
...     peso = animal[1]
...     agressividade = animal[2]
...     print(f'{nome}: {peso}kg, agressividade {agressividade}')
...
Girafa: 1200kg, agressividade 3
Leão: 190kg, agressividade 8
Macaco: 12kg, agressividade 5
```

### Modificando elementos

Você pode **mudar** um item já existente:

```python
>>> animais = ['Girafa', 'Leão', 'Macaco']
>>> animais[1] = 'Tigre'
>>> animais
['Girafa', 'Tigre', 'Macaco']
```

**Ou múltiplos:**

```python
>>> pesos = [1200, 190, 12, 0.001, 5000]
>>> pesos[0:2] = [1100, 200]
>>> pesos
[1100, 200, 12, 0.001, 5000]
```

### Verificando se existe

```python
>>> animais = ['Girafa', 'Leão', 'Macaco']
>>> 'Leão' in animais
True
>>> 'Tigre' in animais
False
```

Perfeito para validação!

### Programa completo: catalogador com listas

Agora vamos integrar listas com o que você aprendeu antes (funções!):

```python
def analisar_animal(peso, agressividade):
    # Tamanho
    if peso > 500:
        tamanho = 'GIGANTE'
    elif peso > 100:
        tamanho = 'GRANDE'
    elif peso > 10:
        tamanho = 'MÉDIO'
    else:
        tamanho = 'PEQUENO'

    # Risco
    if agressividade > 7:
        risco = 'PERIGOSO'
    elif agressividade > 4:
        risco = 'MODERADAMENTE AGRESSIVO'
    else:
        risco = 'DÓCIL'

    return tamanho, risco

# PROGRAMA PRINCIPAL
print('=== CATALOGADOR DE ANIMAIS COM LISTAS ===\n')

# Lista para armazenar animais em memória
animais_catalogados = []

quantidade = int(input('Quantos animais deseja catalogar? '))

for i in range(1, quantidade + 1):
    print(f'\n--- Animal {i} ---')

    nome = input('Nome: ')
    peso = float(input('Peso (kg): '))
    agressividade = int(input('Agressividade (0-10): '))

    # Analisa
    tamanho, risco = analisar_animal(peso, agressividade)

    # Guarda na lista
    animal_dados = [nome, peso, agressividade, tamanho, risco]
    animais_catalogados.append(animal_dados)

# Agora exibe resumo da catalogação
print('\n\n=== RESUMO DA CATALOGAÇÃO ===')
for i, animal in enumerate(animais_catalogados):
    nome, peso, agressividade, tamanho, risco = animal
    print(f'{i+1}. {nome}: {tamanho}, {risco}')

# Estatísticas
if animais_catalogados:
    total_animais = len(animais_catalogados)
    pesos = [animal[1] for animal in animais_catalogados]
    peso_medio = sum(pesos) / len(pesos)
    print(f'\nTotal catalogado: {total_animais} animais')
    print(f'Peso médio: {peso_medio:.2f}kg')
```

Execute isso com 3 animais:

```
Girafa: 1200kg, agressividade 3
Leão: 190kg, agressividade 8
Macaco: 12kg, agressividade 5
```

Resultado:

```
=== RESUMO DA CATALOGAÇÃO ===
1. Girafa: GIGANTE, DÓCIL
2. Leão: GRANDE, PERIGOSO
3. Macaco: MÉDIO, MODERADAMENTE AGRESSIVO

Total catalogado: 3 animais
Peso médio: 467.33kg
```

**O que mudou:**

- Antes: catalogava um animal, pronto
- Agora: cataloga múltiplos e exibe **resumo com estatísticas!**

### Compreensão de listas (List Comprehension)

Python tem um jeito especial (e poderoso) de criar listas:

```python
>>> pesos = [1200, 190, 12, 5000]
>>> pesos_dobrados = [p * 2 for p in pesos]
>>> pesos_dobrados
[2400, 380, 24, 10000]
```

**Sintaxe:** `[expressão for item in lista]`

**Exemplos:**

```python
>>> animais = ['Girafa', 'Leão', 'Macaco']
>>> animais_maiuscula = [a.upper() for a in animais]
>>> animais_maiuscula
['GIRAFA', 'LEÃO', 'MACACO']

>>> numeros = [1, 2, 3, 4, 5]
>>> pares = [n for n in numeros if n % 2 == 0]
>>> pares
[2, 4]
```

**Com condição:**

```python
>>> pesos = [1200, 190, 12, 0.001, 5000]
>>> pesos_grandes = [p for p in pesos if p > 100]
>>> pesos_grandes
[1200, 190, 5000]
```

**Prático:**

```python
>>> animais_catalogados = [
...     ['Girafa', 1200, 3],
...     ['Leão', 190, 8],
...     ['Macaco', 12, 5]
... ]
>>> nomes = [animal[0] for animal in animais_catalogados]
>>> nomes
['Girafa', 'Leão', 'Macaco']
```

### Boas práticas: nomes de listas

Nomes no **plural** tornam óbvio que é uma lista:

```python
❌ animal = ['Girafa', 'Leão']

✅ animais = ['Girafa', 'Leão']
✅ pesos = [1200, 190, 12]
✅ dados_catalogados = [...]
```

**Regra:** liste = dados que **se repetem** em quantidade; melhor guardar em lista que em variáveis soltas!

### Listas vs Arquivo

**Capítulo 6** (arquivo):

```python
def salvar_animal(...):
    arquivo = open('animais.txt', 'a')
    arquivo.write(...)
    arquivo.close()
```

**Capítulo 7** (lista em memória):

```python
animais_catalogados = []
animais_catalogados.append(...)
```

**Diferença crucial:**

- **Arquivo**: dados **persistem** (sobrevivem ao programa acabar)
- **Lista**: dados **desaparecem** quando programa termina

**Quando usar qual:**

- **Listas**: trabalhar com dados **enquanto o programa roda** (rápido, fácil)
- **Arquivos**: salvar dados para **depois** (permanente)

Você pode combinar! Ler dados de lista, processar, e depois salvar em arquivo.

## Resumindo o Capítulo 7

Você acaba de desbloquear o **sexto superpoder**:

**Fase 1 (Cap 2)**: Comunicação → falar com o intérprete
**Fase 2 (Cap 3)**: Dados → guardar valores únicos
**Fase 3 (Cap 4)**: Decisões → tomar ações baseadas em dados
**Fase 4 (Cap 5)**: Repetição → fazer o mesmo automaticamente
**Fase 5 (Cap 6)**: Funções → organizar e reutilizar código
**Fase 6 (Cap 7)**: Coleções → armazenar múltiplos valores

**Conceitos-chave:**

- **`[ ]`**: criar uma lista
- **Índices** (0, 1, 2...): acessar elementos
- **`.append()`**: adicionar
- **`.remove()`**: remover
- **`.pop()`**: remover por índice
- **`for item in lista`**: percorrer
- **`len()`**: tamanho
- **List comprehension**: criar listas de forma elegante

**A transformação crucial:** você passou de "um animal de cada vez" para "múltiplos animais armazenados e processados juntos".

Agora você consegue:

1. Armazenar múltiplos valores
2. Acessá-los por índice
3. Modificá-los
4. Percorrê-los com loops
5. Fazer estatísticas (soma, média, etc.)

**O verdadeiro poder das listas** é combinar com loops: "para cada coisa na lista, faça algo".

## O que vem depois?

Você agora tem:

- ✅ Entrada de dados
- ✅ Saída de dados (tela + arquivo!)
- ✅ Tipos e variáveis
- ✅ Decisões
- ✅ Repetição e loops
- ✅ Funções e organização
- ✅ Listas e coleções

Nos próximos capítulos:

- **Cap 8**: Dicionários (guardar pares nome-valor, não apenas posição)
- **Cap 9**: Processamento de dados (manipular listas e arquivos juntos)

Com o que você aprendeu, você consegue **catalogar múltiplos dados**, **fazer estatísticas** e **reutilizar funções**!

[Voltar ao índice](./resumo-ludico-python-for-everybody)
[Anterior: Cap 6](./resumo-ludico-python-for-everybody-cap-6)
