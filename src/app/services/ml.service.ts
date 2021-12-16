import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MlService {

  // env = 'https://ep.diabetes.precisionmed.dev';
  env = environment.endpoint;
  constructor(private httpClient: HttpClient) { }

  public getModels(modelName: string) {
    return this.httpClient.get(`${this.env}/models/${modelName}`, {
      headers: {

      }
    }).toPromise();
  }
  public inferenceInput(modelName: string, modelFile: string, input: string, isNorm: boolean) {
    return this.httpClient.get(`${this.env}/inference/${modelName}/${modelFile}/${input}/${isNorm}`).toPromise();
  }
}
