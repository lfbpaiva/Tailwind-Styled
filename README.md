# 🔍 GitHub Profile Viewer
Está é uma aplicação React que permite buscar e visualizar perfis do GitHub de maneira simples e com dois estilos diferentes de interface: Styled-Components e Tailwind CSS.

---

## ✨ Funcionalidades
Busca de perfis GitHub pelo nome de usuário

Duas rotas de exibição de perfil: uma com Styled-Components e outra com Tailwind CSS

Exibição de imagem de perfil, nome de usuário e username

Layout responsivo para diferentes dispositivos

---

## 🧪 Tecnologias Utilizadas
React

TypeScript

Vite

Tailwind CSS

Styled-Components

GitHub API

---

## ▶️ Como usar
```bash
Para rodar a aplicação localmente, siga os passos abaixo:
# Clone o repositório
git clone https://github.com/lfbpaiva/Tailwind-Styled.git
cd Tailwind-Styled

# Instale as dependências
npm install

# Execute o projeto
npm run dev
Acesse o aplicativo no navegador em: http://localhost:5173.
````
---

## 📁Estrutura de Pastas
```bash
Tailwind-Styled/
├── assets/                      # Arquivos estáticos
├── components/                  # Componentes reutilizáveis
│   ├── GitHubProfileStyled.tsx  # Componente de perfil usando Styled-Components
│   └── GitHubProfileTailwind.tsx# Componente de perfil usando Tailwind CSS
├── routes/                      # Definição das rotas da aplicação
│   ├── StyledPage.tsx           # Rota com Styled-Components
│   └── TailwindPage.tsx         # Rota com Tailwind CSS
├── styles/                      # Arquivos de estilo
│   ├── App.css                  # Estilos globais
│   └── index.css                # Estilos adicionais
├── App.tsx                      # Componente principal da aplicação
├── main.tsx                     # Ponto de entrada para o React
├── vite-env.d.ts                # Declarações de tipos para o Vite
└── README.md                    # Documentação do projeto
````

---

## 🧠 Sobre o funcionamento
Digite o nome de um usuário do GitHub no campo de busca.

Clique em "Rota em Tailwind" ou "Rota em Styled-Components" para visualizar o perfil.

Cada rota tem um estilo de exibição diferente.

---

## 📝 Observações importantes
Certifique-se de ter o Node.js instalado na sua máquina.

Caso apareça erro de dependências, execute novamente npm install.

O projeto foi testado e está funcionando normalmente.

---

## 👨‍💻 Autor
Desenvolvido por [@lfbpaiva](https://github.com/lfbpaiva) 💜
