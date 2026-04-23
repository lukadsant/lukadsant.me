---
title: Resumo lúdico do Python for Everybody - Cap 4 - Condições e decisões
date: 2026-04-20T00:00:00Z
lang: pt
duration: 12min
---

## Cap 4 - Condições e decisões

Até agora o esquilo era bem robótico: você dava uma ordem, ele executava. Mas e se precisasse **tomar decisões**?

Imagine: você está catalogando animais e precisa verificar se um animal é perigoso. Se for, marca com ⚠️. Se não for, marca como seguro ✅.

Como ensinar o esquilo a fazer isso?

### Comparações e valores verdadeiros/falsos

Primeiro, o esquilo precisa **comparar coisas**. E para isso, precisa de um novo tipo de valor que ainda não vimos: **verdadeiro ou falso**.

Em Python, isso se chama **`bool`** (boleano). Existem apenas dois valores:

- `True` (verdadeiro)
- `False` (falso)

Você diz ao soldado romano para comparar coisas:

```python
>>> 5 > 3
True
>>> 5 < 3
False
>>> 5 == 5
True
>>> 5 != 3
True
```

Os operadores de comparação são:

- `>` maior que
- `<` menor que
- `==` igual a (atenção: dois `=`!)
- `!=` diferente de
- `>=` maior ou igual a
- `<=` menor ou igual a

**Prático:** catalogando animais, você quer verificar se um animal pesa mais de 100 kg:

```python
>>> peso_leao = 190
>>> peso_leao > 100
True

>>> peso_passaro = 0.5
>>> peso_passaro > 100
False
```

Simples! O esquilo avaliou e devolveu verdadeiro ou falso. Nada foi executado ainda, apenas avaliado.

### A decisão: `if` e `else`

Agora entra a mágica. O comando `if` (se) diz ao esquilo: "se isso for verdadeiro, execute isso".

**Cenário:** você quer avisar se um animal é grande:

```python
>>> peso_girafa = 1200
>>> if peso_girafa > 500:
...     print('Este é um animal GRANDE!')
...
Este é um animal GRANDE!
```

Entenda o que aconteceu:

1. `peso_girafa > 500` → é verdadeiro (1200 é maior que 500)
2. O `if` viu que é verdadeiro
3. O bloco de código dentro do `if` foi executado
4. A mensagem foi impressa

**Importante:** veja os `...` (três pontos). Quando você entra em um `if`, o soldado romano fica esperando pelo bloco de código indentado (com espaços na frente). Você termina deixando uma linha vazia.

Agora teste com um animal pequeno:

```python
>>> peso_passaro = 0.5
>>> if peso_passaro > 500:
...     print('Este é um animal GRANDE!')
...
(nada acontece)
```

Correto! O Animal não pesa mais de 500 kg, então o `if` não executou nada.

### Duas decisões com `if` e `else`

Mas e se você quisesse fazer algo em **ambos os casos**? Aí entra o `else` (senão):

```python
>>> peso = 100
>>> if peso > 500:
...     print('Animal GRANDE!')
... else:
...     print('Animal pequeno')
...
Animal pequeno
```

Tradução:

- Se `peso > 500` for verdadeiro → imprime "Animal GRANDE!"
- Senão → imprime "Animal pequeno"

**Cenário real:** você está catalogando e precisa decidir se um animal é perigoso ou seguro:

```python
>>> animal = 'leão'
>>> agressividade = 9  # escala de 0 a 10

>>> if agressividade > 7:
...     print(f'CUIDADO! {animal} é PERIGOSO!')
... else:
...     print(f'{animal} é seguro para aproximar')
...
CUIDADO! leão é PERIGOSO!
```

Viu o `f` antes das aspas? É um **f-string** (string formatada). Permite usar variáveis dentro da mensagem com `{}`. Muito útil!

### Múltiplas decisões com `elif`

E se tivesse **mais de duas opções**? Aí vem o `elif` (else if, ou senão se):

```python
>>> peso = 50
>>>
>>> if peso < 10:
...     categoria = 'Muito pequeno'
... elif peso < 50:
...     categoria = 'Pequeno'
... elif peso < 200:
...     categoria = 'Médio'
... else:
...     categoria = 'Grande'
...
>>> print(categoria)
Pequeno
```

O soldado romano vai testando cada condição **na ordem**:

1. `peso < 10`? Não
2. `peso < 50`? Não (50 não é menor que 50)
3. `peso < 200`? Sim! Então `categoria = 'Médio'`
4. Quisso! Não testa as outras

**Cenário completo:** classificando animais por tamanho:

```python
>>> nome = input('Nome do animal: ')
Nome do animal: elefante
>>> peso = int(input('Peso em kg: '))
Peso em kg: 6000

>>> if peso < 5:
...     print(f'{nome} é um INSETO ou muito pequeno')
... elif peso < 50:
...     print(f'{nome} é PEQUENO')
... elif peso < 1000:
...     print(f'{nome} é GRANDE')
... else:
...     print(f'{nome} é um DOS MAIORES DO MUNDO!')
...
elefante é um DOS MAIORES DO MUNDO!
```

### Combinando condições com `and` e `or`

Às vezes você precisa de **múltiplas condições ao mesmo tempo**. Para isso, use `and` (e) e `or` (ou):

**`and` (e):** ambas precisam ser verdadeiras

```python
>>> peso = 100
>>> agressividade = 8
>>>
>>> if peso > 50 and agressividade > 7:
...     print('Animal perigoso E grande!')
... else:
...     print('Animal seguro ou pequeno')
...
Animal perigoso E grande!
```

Tradução: se peso > 50 **E** agressividade > 7, então execute. Como ambas são verdadeiras, o `if` executa.

**`or` (ou):** pelo menos uma precisa ser verdadeira

```python
>>> animal = 'leão'
>>> outro_animal = 'hiena'
>>>
>>> if animal == 'leão' or animal == 'tigre':
...     print('Felino grande detectado!')
... else:
...     print('Não é um felino grande')
...
Felino grande detectado!
```

Ou seja: se `animal` é leão **OU** tigre, avisa. Como é leão, o `if` executa.

**Cenário prático:** decidindo se você se aproxima de um animal:

```python
>>> peso_animal = 120
>>> agressividade = 6
>>> tem_dentes_afiados = True
>>>
>>> if (peso_animal > 100 or agressividade > 8) and tem_dentes_afiados:
...     print('⚠️ AFASTE-SE! Animal é grande E perigoso!')
... else:
...     print('✅ Pode se aproximar com cuidado')
...
⚠️ AFASTE-SE! Animal é grande E perigoso!
```

Isso pode parecer complicado, mas traduz em português:

- Se (peso > 100 **OU** agressividade > 8) **E** tem dentes afiados
- Então: afaste-se
- Senão: é seguro

### Blocos de decisão aninhados

Às vezes você precisa de decisões **dentro de decisões**:

```python
>>> tamanho = 'grande'
>>> agressividade = 9
>>>
>>> if tamanho == 'grande':
...     print('Animal é GRANDE')
...     if agressividade > 7:
...         print('  E é PERIGOSO!')
...     else:
...         print('  Mas é dócil')
... else:
...     print('Animal é pequeno')
...
Animal é GRANDE
  E é PERIGOSO!
```

Veja como cada `if` dentro tem mais espaçamento (indentação). Isso mostra que é um `if` dentro de outro `if`.

### Programa completo: classificador de animais

Vamos unir tudo em um programa real:

```python
# Classificador de animais para o zoológico

print("=== CLASSIFICADOR DE ANIMAIS ===")

nome = input('Nome do animal: ')
peso = float(input('Peso em kg: '))
agressividade = int(input('Agressividade (0-10): '))
tem_veneno = input('Tem veneno? (sim/não): ').lower()

# Determinar comportamento
print(f'\n--- Análise de {nome} ---')

if peso > 500:
    tamanho = 'GIGANTE'
elif peso > 100:
    tamanho = 'GRANDE'
elif peso > 10:
    tamanho = 'MÉDIO'
else:
    tamanho = 'PEQUENO'

print(f'Tamanho: {tamanho}')

# Alerta de perigo
if agressividade > 7 or tem_veneno == 'sim':
    print('⚠️ ALERTA: Animal PERIGOSO!')
elif agressividade > 4:
    print('⚠️ Cuidado: Animal moderadamente agressivo')
else:
    print('✅ Animal dócil')

# Recomendação final
if peso > 100 and agressividade > 7:
    print('→ Não aproximar sem proteção!')
elif tamanho == 'GRANDE' or tamanho == 'GIGANTE':
    print('→ Manter distância segura')
else:
    print('→ Pode aproximar com cuidado')
```

Rode isso e veja como o esquilo toma decisões complexas!

## Resumindo o Capítulo 4

Você acaba de aprender o terceiro superpoder:

**Fase 1 (Cap 2)**: Comunicação → como falar com o intérprete
**Fase 2 (Cap 3)**: Dados → guardar e manipular informações
**Fase 3 (Cap 4)**: Decisões → tomar ações baseadas em dados

**Conceitos-chave:**

- **Comparações**: `>`, `<`, `==`, `!=`, `>=`, `<=`
- **Valores booleanos**: `True` e `False`
- **`if`**: executa se a condição for verdadeira
- **`else`**: executa se a condição for falsa
- **`elif`**: testa outra condição se a anterior foi falsa
- **`and`**: ambas as condições precisam ser verdadeiras
- **`or`**: pelo menos uma condição precisa ser verdadeira
- **Indentação**: mostra qual código está dentro do `if`/`else`
- **f-strings**: `f'texto {variavel}'` para inserir valores em mensagens

**A transformação:** antes o esquilo só seguia ordens. Agora ele **pensa**: "se isso acontecer, faço uma coisa; se aquilo, faço outra".

Isso abre um mundo de possibilidades! Mas... há um problema.

## O próximo desafio: de um algoritmo para um programa prático

Olhe para o programa do classificador de animais. Ele funciona **perfeitamente** para um animal. Mas e se você precisasse catalogar **100 animais**?

Você teria que:

1. Rodar o programa
2. Digitar informações do animal 1
3. Ver o resultado
4. Apertar "play" novamente
5. Digitar informações do animal 2
6. Ver o resultado
7. Repetir... 100 vezes 😫

Não é prático! O que você **realmente quer** é:

```python
# Pseudocódigo (ainda não funciona)
Para cada animal que você quer catalogar:
    Pedir informações
    Fazer cálculos
    Mostrar resultado
```

Isso é repetição automática. E é exatamente o que **loops** fazem!

No próximo capítulo, você aprenderá a **repetir ações** (`for` e `while`), transformando o esquilo em um processador que não só decide, mas também trabalha **sem parar**, executando a mesma sequência de passos múltiplas vezes até terminar.

Esse é o verdadeiro poder da programação: fazer o computador **fazer o trabalho chato por você**, não só uma vez, mas quantas vezes for preciso!

[Voltar ao índice](./resumo-ludico-python-for-everybody)
[Anterior: Cap 3](./resumo-ludico-python-for-everybody-cap-3)
[Próximo: Cap 5](./resumo-ludico-python-for-everybody-cap-5)
