import { Router } from "express";
import {
    store,
    index,
    show,
    showComplete,
    update,
    destroy,
} from "../controllers/scheduling-controller.js";

import check_token from "../middlewares/check_token.js";
import check_role from "../middlewares/check_role.js"

const router = Router();

router.post("/", check_token, check_role(["ADM", "GER"]), store);
router.get("/", check_token, check_role(["ADM", "GER"]), index);
router.get("/:id", check_token, check_role(["ADM", "GER"]), show);
router.get("/complete/:id", check_token, check_role(["ADM", "GER", "USU"]), showComplete);
router.put("/:id", check_token, check_role(["ADM", "GER"]), update);
router.delete("/:id", check_token, check_role(["ADM", "GER"]), destroy);

export default router;