import { Component} from '@angular/core';

@Component({
    selector: 'note-container',
    templateUrl: 'note-container.component.html',
    styleUrls: ['note-container.component.css']
})

export class NoteContainerComponent {
    title = 'Note creator here';
    notes = [];

    onNoteChecked(i: number) {
        this.notes.splice(i, 1);
    }

    // Print the note to the html
    onCreateNotes(note) {
        this.notes.push(note);
        console.log(this.notes, note);
    }
}
