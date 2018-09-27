import { Router } from "express";
import findAll from "./find-all";
import create from "./create";
import remove from "./remove";

const router = Router();

//GET http://localhost:9000/api/bills/
router.get("/", findAll);
//POST http://localhost:9000/api/bills/
router.post("/", create);
//DELETE http://localhost:9000/api/bills/123i12312io3u
router.delete("/:id", remove);

export default router;
