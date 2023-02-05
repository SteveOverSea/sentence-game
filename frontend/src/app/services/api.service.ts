import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, map, Observable, Subject, take, tap } from "rxjs";
import { Sentence } from "@backend/sentence.interface"
import { Story } from "@backend/story.interface";
import { SocketService } from "./socket.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private currentStoryId: number | undefined = undefined;
    public currentSentence: Subject<Sentence> = new Subject();

    constructor(private http: HttpClient, private socketService: SocketService) {}

    public async requestNextSentence(): Promise<void> {        
        let nextStoryId: number = await lastValueFrom(
            this.http.get<Story>('http://localhost:3000/api/story/unlocked').pipe(map(story => story.id))
        );

        this.currentStoryId = nextStoryId;
        this.socketService.verifyReceivedStoryId(nextStoryId);


        this.http.get<Sentence>('http://localhost:3000/api/sentence/last/' + nextStoryId)  
        .pipe(take(1))
        .subscribe(sentence => {
            this.currentSentence.next(sentence);
        });
    }

    public addNewSentence(text: string): Observable<any> {
        console.log("add new sentence", text, this.currentStoryId);

        const res = 
            this.http.post('http://localhost:3000/api/sentence',
            {
                content: text,
                language: "en",
                userId: "xxx",
                authorMail: null,
                story: this.currentStoryId
            });
        return res;
    }
}