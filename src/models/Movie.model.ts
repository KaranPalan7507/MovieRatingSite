export class MovieModel {
    title: string;
    avgRating: number;
    releaseDate: number;
    ratings: number[];

    constructor(data) {
        this.title = data.title;
        this.ratings = data.ratings;
        this.releaseDate = data.releaseDate;
        this.avgRating = this.getAvgRating();
    }

    getAvgRating() {
        let sum = 0;
        for(let i=0; i< this.ratings.length;i++){
            sum+=this.ratings[i];
        }
        return parseFloat((sum/this.ratings.length).toFixed(2));
    }
}