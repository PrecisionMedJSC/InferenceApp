import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MlService {

  // env = 'https://ep.diabetes.precisionmed.dev';
  env = environment.endpoint;
  input = '';
  isNorm: boolean = true;
  modelName = '';
  features = [];
  constructor(private httpClient: HttpClient) {
  }

  public async getModels(modelName: string) {
    let result = await this.httpClient.get(`${this.env}/models/${modelName}`, {
      headers: {

      }
    }).toPromise();
    this.features = (result as any)['spec']['features'];
    console.log(this.features);
    return result;
  }
  public inferenceInput(modelName: string, modelFile: string, input: string, isNorm: boolean) {
    this.modelName = modelName;
    this.input = input;
    this.isNorm = isNorm;
    return this.httpClient.get(`${this.env}/inference/${modelName}/${modelFile}/${input}/${isNorm}`).toPromise();
  }
  public analyzeAlgo(modelFile: string, selectedFeatures: string, delta: number, learningRate: number, step: number,) {
    return this.httpClient.get(`${this.env}/derivative/${this.modelName}/${modelFile}/${this.input}/${selectedFeatures}/${delta}/${learningRate}/${step}/${this.isNorm}`).toPromise();
  }
}
