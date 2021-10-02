import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/survey";
@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{
    static findOne(arg0: { id: any; }) {
        throw new Error("Method not implemented.");
    }
}

export { SurveysRepository };



