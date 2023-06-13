import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateAtividadeController {
  async handle(request: Request, response: Response) {
    const { nome } = request.body;
    try {
      const atividade = await prismaClient.atividade.create({
        data: {
          nome,
        },
      });
      return response.json(atividade);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
  }
}

export class FindAtividadeController {
  async handle(request: Request, response: Response) {
    //const { nome } = request.body;
    try {
      const atividade = await prismaClient.atividade.findMany({});
      return response.json(atividade);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
  }
}

export class DeleteAtividadeController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    try {
      const atividade = await prismaClient.atividade.delete({
        where : {
          id: id
        }
      });
      return response.json(atividade);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao cadastrar aluno" });
    }
  }
}
