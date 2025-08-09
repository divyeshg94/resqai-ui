import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  base = environment.apiUrl || ''; 

  constructor(private http: HttpClient) {}

  visionDetect(base64Image: string) {
    return this.http.post<any>(`${this.base}/vision/detect`, { base64Image });
  }
  ragQuery(question: string, topK = 4) {
    return this.http.post<any>(`${this.base}/rag/query`, { question, topK });
  }
  triage(observation: string, transcript?: string) {
    return this.http.post<any>(`${this.base}/agent/triage`, { observation, transcript });
  }
}
