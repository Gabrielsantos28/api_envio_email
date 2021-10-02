import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { Request, Response } from "express";
import { AppError } from "../errors/AppError";

class AnswerController{

    //http://localhost:3333/answers/1?u=05364f6f-c3ca-4717-b967-d09405feb46d

    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if(!surveyUser){
            throw new AppError("Survey User does not exists!") 
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);

    }

}

export { AnswerController }