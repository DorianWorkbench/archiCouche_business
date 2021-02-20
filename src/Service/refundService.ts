import { AddRefundDTO } from "../DTO/RefundDTO";
import { RefundRepository } from "../Repository/refundRepository";

export class RefundService {
  constructor(private repo: RefundRepository) {}

  async addRefund(DTO: AddRefundDTO) {
    return await this.repo.createRefund(DTO);
  }
}
