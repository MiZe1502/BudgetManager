import express from "express";
const router = express.Router();
import { IRepository, RepositoryFactory, repositoryType } from "../../lib/classes/repositories/repositoryFactory";
import { ShopRepository } from "../classes/repositories/shopRepository";

router.get("/all", async (req, res) => {

    const repo: IRepository = RepositoryFactory.createRepository(repositoryType.ShopRepository);

    const resp = await (repo as ShopRepository).find();

    console.log(resp);

    res.send(resp);
});

export default router;
