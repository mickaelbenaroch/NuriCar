import {IconLevel} from '../enums/icon-level'

export class Icon {

    public title: string;

    public Description: string;

    public path: string;

    public severity: IconLevel;

    public suggestion: string;

    public more: any;

    constructor(title, description, suggestion, path, severity, more) {
        this.title = title;
        this.Description = description;
        this.path = path;
        this.severity = severity;
        this.suggestion = suggestion;
        this.more = more;
    }

    Print() {
        console.log("title = " + this.title);
        console.log("description = " + this.Description);
        console.log("path = " + this.path);
        console.log("severity = " + this.severity);
        console.log("suggestion = " + this.suggestion);
        console.log("more = " + this.more);
    }
}