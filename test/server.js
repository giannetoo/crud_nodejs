import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import VendaMensal from "./VendaMensal.js";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware - Function para tratar infos recebidas

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Deu erro ao conectar com o MongoDB", error);
  }
};

connectDB();

// CREATE
app.post("/vendas", async (req, res) => {
  try {
    const novaVendaMensal = await VendaMensal.create(req.body);
    res.json(novaVendaMensal);
  } catch (error) {
    res.json({ error: error });
  }
});

//READ
app.get("/vendas", async (req, res) => {
  try {
    const VendasMensais = await VendaMensal.find();
    res.json(VendasMensais);
  } catch (error) {
    res.json({ error: error });
  }
});

// UPDATE
app.put("/vendas/:id", async (req, res) => {
  try {
    const novaVendaMensal = await VendaMensal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(novaVendaMensal);
  } catch (error) {
    res.json({ error: error });
  }
});

// DELETE
app.delete("/vendas/:id", async (req, res) => {
  try {
    const vendaMensalExcluida = await VendaMensal.findByIdAndDelete(
      req.params.id
    );
    res.json(vendaMensalExcluida);
  } catch (error) {
    res.json({ error: error });
  }
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
