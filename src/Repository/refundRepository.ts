import refundSchema from "../bdd/Schema/RemboursementEntity";
import { AddRefundDTO } from "../DTO/RefundDTO";

export class RefundRepository {
  constructor() {}

  async createRefund(DTO: AddRefundDTO) {
    // todo: Check how to implement refund to a Room
    const refund = new refundSchema({
      name: DTO.name,
      amount: DTO.amount,
      idRoom: DTO.idRoom,
    });

    return await refund.save();
  }
}
