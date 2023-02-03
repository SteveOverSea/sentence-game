import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sentence } from "@backend/sentence.interface"

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    public getAllSentences(): Observable<Sentence[]> {
        const res = 
            this.http.get<Sentence[]>('http://localhost:3000/api/sentence')
        ;
        return res;
    }

    public addNewSentence(text: string): Observable<any> {
        const res = 
            this.http.post('http://localhost:3000/api/sentence',
            {
                content: text,
                language: "en",
                userId: "xxx",
                authorMail: null,
                story: "4"
            });
        return res;
    }
}