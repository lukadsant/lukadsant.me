---
title: Resumo lúdico do Python for Everybody - Cap 6 - Funções e modularização
date: 2026-04-20T00:00:00Z
lang: pt
duration: 16min
---

## Cap 6 - Funções e modularização

Até agora seu código faz algo e desaparece. Catalogava animais, exibia na tela, e pronto: tudo se perdia.

**Funções resolvem dois problemas:**

1. **Reutilização**: código que você usa muitas vezes
2. **Novas funcionalidades**: código especializado que faz algo útil (como salvar em arquivo!)

Vamos aprender a criar nossos próprios comandos.

### O que é uma função?

Uma **função** é um bloco de código que você **nomeia** e **reutiliza**.

Até agora você usou funções prontas:

- `print()` → imprime na tela
- `input()` → pede dados
- `len()` → conta caracteres
- `int()`, `float()` → converte tipos

Agora vamos **criar as nossas**.

### Função básica: sem entrada, sem saída

A forma mais simples:

```python
>>> def saudacao():
...     print('Bem-vindo ao catalogador!')
...     print('Vamos começar...')
...
>>> saudacao()
Bem-vindo ao catalogador!
Vamos começar...
```

Pronto! Criamos uma nova ordem que o soldado romano entende.

**Entenda a sintaxe:**

- `def` → define uma função
- `saudacao()` → nome da função (você escolhe!)
- `:` → início do bloco
- Linhas indentadas → fazem parte da função
- Sem indentação → fim da função

**Na prática:** em vez de escrever 5 linhas de saudação toda vez, você escreve `saudacao()`.

### Função com parâmetros: recebendo dados

Agora vamos passar **dados para a função**:

```python
>>> def classificar_tamanho(peso):
...     if peso > 500:
...         print(f'Animal com {peso}kg é GIGANTE!')
...     elif peso > 100:
...         print(f'Animal com {peso}kg é GRANDE!')
...     elif peso > 10:
...         print(f'Animal com {peso}kg é MÉDIO!')
...     else:
...         print(f'Animal com {peso}kg é PEQUENO!')
...
>>> classificar_tamanho(1200)
Animal com 1200kg é GIGANTE!
>>> classificar_tamanho(50)
Animal com 50kg é MÉDIO!
>>> classificar_tamanho(3)
Animal com 3kg é PEQUENO!
```

Agora a função recebe um **parâmetro** (`peso`).

**Parâmetros** são como placeholders: quando você chama a função, você preenche com valores reais.

### Função com retorno: devolvendo dados

Até agora as funções só **imprimem**. Mas e se você quisesse **guardar** o resultado?

```python
>>> def calcular_peso_total(quantidade, peso_medio):
...     total = quantidade * peso_medio
...     return total
...
>>> resultado = calcular_peso_total(5, 4.5)
>>> print(resultado)
22.5
```

O `return` diz: "function, devolva esse valor".

**Prático:** catalogando múltiplos animais:

```python
>>> peso_girafa = calcular_peso_total(3, 1200)  # 3 girafas, 1200kg cada
>>> peso_macaco = calcular_peso_total(8, 12)    # 8 macacos, 12kg cada
>>> peso_formiga = calcular_peso_total(1000000, 0.001)  # 1M formigas, 1mg cada

>>> print(f'Girafas pesam: {peso_girafa}kg')
Girafas pesam: 3600kg
>>> print(f'Macacos pesam: {peso_macaco}kg')
Macacos pesam: 96kg
>>> print(f'Formigas pesam: {peso_formiga}kg')
Formigas pesam: 1000kg
```

Uma função **reutilizável** três vezes!

### Função que retorna múltiplos valores

Lembra do problema lá atrás? O código que classificava tamanho E risco aparecia duas vezes?

```python
>>> def analisar_animal(peso, agressividade):
...     # Tamanho
...     if peso > 500:
...         tamanho = 'GIGANTE'
...     elif peso > 100:
...         tamanho = 'GRANDE'
...     elif peso > 10:
...         tamanho = 'MÉDIO'
...     else:
...         tamanho = 'PEQUENO'
...
...     # Risco
...     if agressividade > 7:
...         risco = 'PERIGOSO'
...     elif agressividade > 4:
...         risco = 'MODERADAMENTE AGRESSIVO'
...     else:
...         risco = 'DÓCIL'
...
...     return tamanho, risco
...
>>> tamanho, risco = analisar_animal(1200, 3)
>>> print(f'Tamanho: {tamanho}, Risco: {risco}')
Tamanho: GIGANTE, Risco: DÓCIL
```

Uma única função, reutilizada em qualquer lugar!

### Funções poderosas: salvando em arquivo

Aqui vem o pulo do gato. **Funções não são só para evitar repetição. São para criar novas funcionalidades!**

Até agora você catalogava e tudo desaparecia. Vamos criar uma função que **salva os dados em um arquivo**:

```python
>>> def salvar_animal(nome, peso, agressividade, tamanho, risco):
...     # Abre o arquivo em "modo append" (adicionar)
...     arquivo = open('animais.txt', 'a')
...
...     # Cria uma linha com os dados
...     linha = f'{nome},{peso},{agressividade},{tamanho},{risco}\n'
...
...     # Escreve no arquivo
...     arquivo.write(linha)
...
...     # Fecha o arquivo
...     arquivo.close()
...
...     print(f'✅ {nome} salvo em animais.txt!')
...
>>> salvar_animal('Girafa', 1200, 3, 'GIGANTE', 'DÓCIL')
✅ Girafa salvo em animais.txt!
>>> salvar_animal('Leão', 190, 8, 'GRANDE', 'PERIGOSO')
✅ Leão salvo em animais.txt!
```

Depois, você abre `animais.txt` e vê:

```
Girafa,1200,3,GIGANTE,DÓCIL
Leão,190,8,GRANDE,PERIGOSO
```

**Seus dados não desaparecem mais!** 🎉

**Como funciona:**

- `open('animais.txt', 'a')` → abre arquivo para adicionar dados ('a' = append)
- `arquivo.write(linha)` → escreve a linha
- `arquivo.close()` → fecha (importante!)
- `\n` → quebra de linha (próximo animal em outra linha)

### Programa completo: catalogador que salva

Finalmente! Um programa que **realmente funciona**:

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

def salvar_animal(nome, peso, agressividade, tamanho, risco):
    arquivo = open('animais.txt', 'a')
    linha = f'{nome},{peso},{agressividade},{tamanho},{risco}\n'
    arquivo.write(linha)
    arquivo.close()
    print(f'✅ {nome} salvo!')

# PROGRAMA PRINCIPAL
print('=== CATALOGADOR DE ANIMAIS ===\n')

quantidade = int(input('Quantos animais deseja catalogar? '))

for i in range(1, quantidade + 1):
    print(f'\n--- Animal {i} ---')

    nome = input('Nome: ')
    peso = float(input('Peso (kg): '))
    agressividade = int(input('Agressividade (0-10): '))

    # Usa as funções!
    tamanho, risco = analisar_animal(peso, agressividade)
    salvar_animal(nome, peso, agressividade, tamanho, risco)

print(f'\n✅ Catalogação concluída!')
print(f'📄 Dados salvos em: animais.txt')
```

Execute isso:

1. Cataloga 3 animais
2. Guarda tudo em `animais.txt`
3. O arquivo persiste!

**Veja como ficou limpo:**

- `analisar_animal()` → reutilizável, legível
- `salvar_animal()` → encapsula lógica de arquivo
- Programa principal → apenas orquestra as funções

### Boas práticas: nomes significativos

Nomes de funções **devem contar uma história**:

```python
❌ def func1(x):
❌ def f(a, b):

✅ def calcular_peso_total(quantidade, peso_medio):
✅ def salvar_animal(nome, peso, agressividade, tamanho, risco):
✅ def ler_dados_animal():
```

**Regra:** se você (ou outro programador) vê o nome da função, deve entender o que ela faz **sem ler o código interno**.

### Funções vs Tudo No Mesmo Lugar

**Sem funções (código confuso):**

```python
# 200 linhas misturadas
# entrada aqui
# classificação ali
# escrita em arquivo lá
# não sabe onde começa o que
```

**Com funções (código organizado):**

```python
# Cada função é especialista em uma coisa
def analisar_animal():      # Trata classificação
def salvar_animal():         # Trata arquivo
def pedir_dados():          # Trata entrada

# Programa principal é limpo e legível
```

Isso é **modularização**: dividir código em pedaços pequenos e gerenciáveis.

## Resumindo o Capítulo 6

Você acaba de desbloquear o **quinto superpoder**:

**Fase 1 (Cap 2)**: Comunicação → falar com o intérprete
**Fase 2 (Cap 3)**: Dados → guardar e manipular informações
**Fase 3 (Cap 4)**: Decisões → tomar ações baseadas em dados
**Fase 4 (Cap 5)**: Repetição → fazer o mesmo automaticamente múltiplas vezes
**Fase 5 (Cap 6)**: Modularização → organizar código em partes reutilizáveis

**Conceitos-chave:**

- **`def`**: cria uma função
- **Parâmetros**: valores que você passa para a função
- **`return`**: devolve um valor
- **Modularização**: dividir código em funções pequenas
- **Reutilização**: escrever uma vez, usar muitas vezes
- **Arquivo**: `open()`, `write()`, `close()`

**A transformação crucial:** anteriormente, seu código fazia coisas e tudo desaparecia. Agora com funções você consegue:

1. Organizar código complexo em pedaços entendíveis
2. Reutilizar lógica (sem copiar/colar)
3. **Criar novas funcionalidades** (como salvar em arquivo!)
4. Construir programas **reais** que persistem dados

**O verdadeiro poder das funções** não é apenas evitar repetição. É **encapsular funcionalidades** que fazem o seu programa ganhar poderes novos!

## O que vem depois?

Você agora tem:

- ✅ Entrada de dados
- ✅ Saída de dados (tela + arquivo!)
- ✅ Tipos e variáveis
- ✅ Decisões
- ✅ Repetição
- ✅ Funções e organização

Nos próximos capítulos:

- **Cap 7**: Listas (guardar múltiplos valores)
- **Cap 8**: Dicionários (guardar pares nome-valor)
- **Cap 9**: Processamento de dados (manipular arquivos e listas)

Com o que você aprendeu, você já consegue criar programas sérios que **salva dados**, **toma decisões** e **reutiliza código**!

[Voltar ao índice](./resumo-ludico-python-for-everybody)
[Anterior: Cap 5](./resumo-ludico-python-for-everybody-cap-5)
[Próximo: Cap 7](./resumo-ludico-python-for-everybody-cap-7)
