import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor()
  {

  }

  public getData()
  {
    return [

    {"Name" : "Angular", "Book" : "Effective Angular: Develop applications of any size by effectively using Angular with Nx, RxJS, NgRx, and Cypress "},
    {"Name" : "Node JS", "Book" : "Mastering Backend in Node.js & Express.js"},
    {"Name" : "Android", "Book" : "Android Programming for Beginners - Second Edition"},
    {"Name" : "Big Data", "Book" : "Big Data, IoT, and Machine Learning: Tools and Applications (Internet of Everything IoE) [Hardcover] Paprzycki, Marcin; Gupta, Neha and Agrawal, Rashmi"},
    {"Name" : "Artificial Intelligence", "Book" : "AI for Everyone: A Beginner's Handbook for Artificial Intelligence (AI) | Aligned to NEP-CCF Value Added Course | - Pearson"}
  ]
  }
}
