# OráculoAPI 🃏🔮

<p align="justify"> API desenvolvida em Node.js com TypeScript para gerenciar cartas do Baralho Cigano, incluindo informações como nome, significado, palavras-chave e categoria. Esta API serve como backend para aplicações que exibem cartas, seus significados e interpretações.</p>

---

## **1. Funcionalidades**

* Listar todas as cartas (`GET /cartas`)
* Buscar carta por ID (`GET /cartas/:id`)
* Criar nova carta (`POST /cartas`)
* Atualizar carta existente (`PUT /cartas/:id`)
* Deletar carta (`DELETE /cartas/:id`)
* Retornar carta aleatória (`GET /cartas/aleatoria`)
* Filtros opcionais por **categoria** e **palavra-chave**

---

## **2. Estrutura de Dados**

### **Carta**

```ts
interface Carta {
  id: string;                     // Identificador único
  nome: string;                   // Nome da carta
  significadoGeral: string;       // Significado resumido
  palavrasChave: string[];        // Palavras-chave importantes
  imagemUrl?: string;             // URL da imagem (opcional)
  categoria?: 'amor' | 'trabalho' | 'sorte' | 'aviso'; // Categoria (opcional)
  mensagemReversa?: string;       // Significado invertido (opcional)
  createdAt: Date;                // Data de criação
  updatedAt: Date;                // Data de atualização
}
```

---

## **3. Estrutura do Projeto**

```
oraculo-api/
├─ src/
│  ├─ controllers/       # Funções que lidam com as requisições
│  │   └─ lettresControlles.ts
│  │
│  ├─ routes/            # Define endpoints da API
│  │   └─ routes.ts
│  │
│  ├─ models/            # Interfaces e tipos TypeScript
│  │   ├─ httpResponseModel.ts
│  │   └─ lettersModel.ts
│  │
│  ├─ services/          # Lógica de negócio (busca, filtros, aleatoriedade)
│  │   └─ lettersServices.ts
│  │
│  ├─ repositories/      # Responsável por acessar dados (banco ou array)
│  │   └─ letterRepository.tss
│  │
│  ├─ data/              # Dados iniciais ou mock para desenvolvimento
│  │   └─ letters.ts     # Exemplo de array com cartas
│  │
│  ├─ utils/             # Funções auxiliares (ex.: status code)
│  │   └─ httpHelpes.ts
│  │
│  └─ server.ts          # Arquivo principal da aplicação
│
├─ package.json
├─ tsconfig.json
├─ .env
└─ README.md
```

---

## **4. Dependências**


### **Desenvolvimento**

```bash
npm install
```

---

## **5. Banco de Dados**

Opções recomendadas:

* **MongoDB** → Flexível, ideal para campos opcionais.
* **PostgreSQL/MySQL** → Estruturado, para queries complexas e relacionamentos.

💡 Durante o desenvolvimento, você pode usar um **array em memória** para testar os endpoints antes de configurar o banco real.

---

## **6. Arquitetura da API**

* **Controllers** → recebem requisições e chamam os serviços.
* **Services** → lógica de negócio, manipulação de cartas, filtros, aleatoriedade.
* **Models** → interfaces TypeScript para tipagem de dados.
* **Routes** → definem os endpoints da API.
* **Database** → conexão com o banco de dados.
* **Utils** → funções auxiliares como validação e geração de IDs.

---

## **7. Exemplos de Endpoints**

* **Listar todas as cartas:**
  `GET /cartas`

* **Buscar carta por ID:**
  `GET /cartas/:id`

* **Criar nova carta:**
  `POST /cartas`

* **Atualizar carta existente:**
  `PUT /cartas/:id`

* **Deletar carta:**
  `DELETE /cartas/:id`

* **Carta aleatória:**
  `GET /cartas/aleatoria`

---

## **8. Rodando a API Localmente**

1. Clonar o repositório:

   ```bash
   git clone <link-do-repo>
   cd oraculo-api
   ```

2. Instalar dependências:

   ```bash
   npm install
   ```

3. Configurar variáveis de ambiente em `.env` (ex.: porta, URI do banco).

4. Rodar a API em desenvolvimento:

   ```bash
   npm run dev
   ```

---

<h2 align="center">👨‍💻 Autor</h2>

<p align="center">
  Feito por <b>Roger Dos S. Oliveira</b>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/roger-oliveira-9a8ab8191/"><img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="https://github.com/Unnamed00001"><img src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white"/></a>
  
</p>