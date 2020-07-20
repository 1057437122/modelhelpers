import { AreaModel } from "../models";

export function newArea(body: any) {
    return new AreaModel(body)
}