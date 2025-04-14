import express from "express";
import axios from "axios";
 
// JSON-SERVER START
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
// JSON-SERVER END
 
const app = express();
app.use(express.json());
 
 
 
// Rota GET para todos os produtos
app.get("/produtos", async (req, res) => {
    try {
        const consulta = await axios.get('http://localhost:3000/produtos');
        console.log("Consulta realizada");
        return res.json(consulta.data);
    } catch (error) {
        console.error("Erro na consulta:", error);
        return res.status(500).json({ error: "Erro ao consultar produtos" });
    }
});
 
 
// Rota GET por ID
app.get("/produtos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/produtos/${id}`);
        console.log(`Consulta por ID ${id} realizada`);
        return res.json(response.data);
    } catch (error) {
        console.error(`Erro ao consultar usuarios com ID ${id}:`, error);
        if (error.response?.status === 404) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        return res.status(500).json({ error: "Erro ao consultar produtos" });
    }
});

app.get("/usuarios", async (req, res) => {
    try {
        const consulta = await axios.get('http://localhost:3000/usuarios');
        console.log("Consulta realizada");
        return res.json(consulta.data);
    } catch (error) {
        console.error("Erro na consulta:", error);
        return res.status(500).json({ error: "Erro ao consultar usuários" });
    }
});
 
 
// Rota GET por ID
app.get("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/usuarios/${id}`);
        console.log(`Consulta por ID ${id} realizada`);
        return res.json(response.data);
    } catch (error) {
        console.error(`Erro ao consultar usuário com ID ${id}:`, error);
        if (error.response?.status === 404) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        return res.status(500).json({ error: "Erro ao consultar usuário" });
    }
});

app.get("/categoria", async (req, res) => {
    try {
        const consulta = await axios.get('http://localhost:3000/categoria');
        console.log("Consulta realizada");
        return res.json(consulta.data);
    } catch (error) {
        console.error("Erro na consulta:", error);
        return res.status(500).json({ error: "Erro ao consultar categoria" });
    }
});
 
 
// Rota GET por ID
app.get("/categoria/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/categoria/${id}`);
        console.log(`Consulta por ID ${id} realizada`);
        return res.json(response.data);
    } catch (error) {
        console.error(`Erro ao consultar categoria com ID ${id}:`, error);
        if (error.response?.status === 404) {
            return res.status(404).json({ error: "Categoria não encontrado" });
        }
        return res.status(500).json({ error: "Erro ao consultar categoria" });
    }
});

app.get("/endereco", async (req, res) => {
    try {
        const consulta = await axios.get('http://localhost:3000/endereco');
        console.log("Consulta realizada");
        return res.json(consulta.data);
    } catch (error) {
        console.error("Erro na consulta:", error);
        return res.status(500).json({ error: "Erro ao consultar endereco" });
    }
});
 
 
// Rota GET por ID
app.get("/endereco/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/endereco/${id}`);
        console.log(`Consulta por ID ${id} realizada`);
        return res.json(response.data);
    } catch (error) {
        console.error(`Erro ao consultar endereco com ID ${id}:`, error);
        if (error.response?.status === 404) {
            return res.status(404).json({ error: "endereco não encontrado" });
        }
        return res.status(500).json({ error: "Erro ao consultar endereco" });
    }
});

app.get("/pedido", async (req, res) => {
    try {
        const consulta = await axios.get('http://localhost:3000/pedido');
        console.log("Consulta realizada");
        return res.json(consulta.data);
    } catch (error) {
        console.error("Erro na consulta:", error);
        return res.status(500).json({ error: "Erro ao consultar pedido" });
    }
});
 
 
// Rota GET por ID
app.get("/pedido/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/pedido/${id}`);
        console.log(`Consulta por ID ${id} realizada`);
        return res.json(response.data);
    } catch (error) {
        console.error(`Erro ao consultar pedido com ID ${id}:`, error);
        if (error.response?.status === 404) {
            return res.status(404).json({ error: "pedido não encontrado" });
        }
        return res.status(500).json({ error: "Erro ao consultar pedido" });
    }
});

app.get("/pedido_itens", async (req, res) => {
    try {
        const consulta = await axios.get('http://localhost:3000/pedido_itens');
        console.log("Consulta realizada");
        return res.json(consulta.data);
    } catch (error) {
        console.error("Erro na consulta:", error);
        return res.status(500).json({ error: "Erro ao consultar pedido_itens" });
    }
});
 
 
// Rota GET por ID
app.get("/pedido_itens/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/pedido_itens/${id}`);
        console.log(`Consulta por ID ${id} realizada`);
        return res.json(response.data);
    } catch (error) {
        console.error(`Erro ao consultar pedido_itens com ID ${id}:`, error);
        if (error.response?.status === 404) {
            return res.status(404).json({ error: "pedido_itens não encontrado" });
        }
        return res.status(500).json({ error: "Erro ao consultar pedido_itens" });
    }
});
 
 
 
 
// Middleware para rotas não encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ 
        error: "Rota não encontrada",
        message: "A rota solicitada não existe. Verifique a URL e tente novamente."
    });
});
 
// Iniciar JSON Server na porta 3000
server.listen(3000, () => {
    console.log('JSON Server is running! Port 3000');
});
 
// Iniciar Express na porta 8800
app.listen(8800, () => {
    console.log("Express is running!!! Port 8800");
    console.log("Backend complete, is running...");
});