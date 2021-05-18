import {IconLevel} from '../enums/icon-level'

export class Icon {

    public title: string;

    public description: string;

    public paths: string[] = [];

    public severity: IconLevel;

    public suggestion: string;

    public more: string[] = [];

    constructor(title, description, suggestion, path, severity, more) {
        this.title = title;
        this.description = description;
        this.paths = path;
        this.severity = severity;
        this.suggestion = suggestion;
        this.more = more;
    }

    Print() {
        console.log("title = " + this.title);
        console.log("description = " + this.description);
        console.log("path = " + this.paths);
        console.log("severity = " + this.severity);
        console.log("suggestion = " + this.suggestion);
        console.log("more = " + this.more);
    }
}