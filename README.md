# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Definição da aplicação desenvolvida](#3-definição-da-aplicação-desenvolvida)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Considerações técnicas](#5-considerações-técnicas)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

**Cipher Messenger**

É uma aplicação desenvolvida com o objetivo de cifrar e decifrar mensagens usando a metodologia da Cifra de César, 
sendo sua principal função tornar a mensagem segura tanto para o remetente como para o destinatário.


## 3. Definição da aplicação desenvolvida

**Principais usuários**

Pessoas que desejam enviar mensagens com mais segurança e privacidade.

**Objetivos do usuário**

Cifrar mensagens confidenciais com o intuito de obter mais segurança, garantindo que apenas o destinatário terá 
acesso ao conteúdo.

**Como o produto resolve os problemas dos usuários?**

Aplicação apresenta uma interface simples e intuitiva que possibilita o envio seguro e sigiloso da mensagem que será 
enviada, sendo o processo realizado apenas por um clique, onde por meio da criptografia o remetente da mensagem tem 
a certeza que a decodificação só poderá ocorrer pela pessoa que possui a informação.  

## 4. Considerações gerais

**Desenvolvimento da aplicação**

Primeiro foi definido o projeto e quais seriam os usuários finais, após a informação definida foi iniciada a 
prototipagem da aplicação, a qual deveria permitir que o usuário informasse a _offset_, sendo o número de 
deslocamento para cifrar a mensagem, o espaço onde a mensagem seria inserida e os botões para a escolha das opções cifrar e decifrar, o desenvolvimento da interface foi planejada e desenvolvida para ser de fácil entendimento e utilização.

## 5. Considerações técnicas

**Tecnologias usadas no projeto**

* JavaScript 
* HTML
* CSS
* NodeJS

**Instalando e inicializando a aplicação**

No *GitHub* clique no botão de _Fork_ para criar uma cópia do repositório, após clique na opção de _Clone_ ou 
_Download_, copie a _url_, abra o terminal do seu computador, escolha o local (pasta) para arquivar e digite o 
comando`git clone` e cole o endereço da _url_, em seguida execute com o enter, após a execução, digite `npm install`  
para instalar as dependências do projeto, digite o comando `npm install`, o qual irá executar o server e abrir um s
ervidor local _http://localhost:5000_, que poderá ser aberto no navegador para visualizar a aplicação.

**Como o Deploy da aplicação foi realizado**

O _deploy_ foi realizado no *GitHub Pages*, abrindo o *GitHub* e selecionando o repositório,  clique em _settings_ 
localizado abaixo do nome do repositório, no *GitHub Pages*, use o menu suspenso _source_ (fonte) e selecione uma 
fonte de publicação, sendo _master branch_ ou _outra branch_.
