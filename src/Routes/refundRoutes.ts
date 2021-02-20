import { Router } from "express";
import { RefundController } from "../Controller/refundController";
import { RefundService } from "../Service/refundService";
import { Request, Response } from "express";

export function factoryRefundRoutes(service: RefundService) {
  const router = Router();
  const refundController = new RefundController(service);

  router.post("/", (req: Request, res: Response) => {
    refundController.createRefund(req, res);
  });

  return router;
}
