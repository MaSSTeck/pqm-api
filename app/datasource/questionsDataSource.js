import { RESTDataSource } from 'apollo-datasource-rest';
import SERVER_ENV from '../config/server_env';

export class QuestionAPI extends RESTDataSource {
  constructor() {
    super();
    // const serverConf = SERVER_ENV['development'];
    const serverConf = SERVER_ENV['production'];
    this.baseURL = serverConf.BASE_API
  }

  async question(subject, type, year) {
    const result = await this.get('q', {
        subject: subject,
        type: type,
        year: year
    });
    return result.data;
  }

  async questions(limit, subject, type, year) {
    //return questions by limit, maximum is 40
    const result = await this.get(`q/${limit}`, {
        subject: subject,
        type: type,
        year: year
    });
    return result.data;
  }

  async manyQuestions(subject, type, year) {
    //returns 40 questions
    const result = await this.get('m', {
        subject: subject,
        type: type,
        year: year
    });
    return result.data;
  }

  async topQuestions() {
    const result = await this.get('top-q');
    return result.data;
  }

  async questionById(id,subject,) {
    const result = await this.get(`q-by-id/${id}`, {
      subject: subject
  });
  return result.data;
}

};