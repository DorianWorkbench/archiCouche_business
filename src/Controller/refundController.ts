import { RefundService } from "../Service/refundService";
import { Request, Response } from "express";
import { AddRefundDTO } from "../DTO/RefundDTO";

export class RefundController {
  constructor(private service: RefundService) {}

  async createRefund(req: Request, res: Response) {
    try {
      const DTO: AddRefundDTO = {
        name: req.body.name,
        amount: req.body.amount,
        idRoom: req.body.idRoom,
      };
      const result = await this.service.addRefund(DTO);
      return res.status(201).json(result);
    } catch (e) {
      return res.sendStatus(500);
    }
  }
}
