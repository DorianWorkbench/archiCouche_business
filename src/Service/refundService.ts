import { AddRefund } from "../DTO/RefundDTO";
import { RefundRepository } from "../Repository/refundRepository";

export class RefundService{
    constructor(private repo:RefundRepository){}

    async addRefund(DTO:AddRefund){
        return await this.repo.createRefund(DTO);
    }
}