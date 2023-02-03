import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, map, Observable } from "rxjs";
import { Sentence } from "@backend/sentence.interface"
import { Story } from "@backend/story.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    public async getNextSentence(): Promise<Sentence> {

        const nextStoryId: number = await lastValueFrom(
            this.http.get<Story>('http://localhost:3000/api/story/unlocked')
            .pipe(map(story => story.id))
        );

        return await lastValueFrom(
            this.http.get<Sentence>('http://localhost:3000/api/sentence/last/' + nextStoryId)
        );
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