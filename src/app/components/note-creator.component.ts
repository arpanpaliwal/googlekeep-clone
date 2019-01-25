import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    templateUrl: 'note-creator.component.html',
    styleUrls: ['note-creator.component.css']
})

export class NoteCreatorComponent {
    pageTitle = 'Add Node';

    fullForm = false;


    // Model
    newNote = {
        title: '',
        value: '',
        color: '#DB5ABA'
    };

    @Output() createNote = new EventEmitter(); // Event
    // executed when submit. It's gonna fire the event
    onCreateNote() {
        const { title, value, color } = this.newNote;
        if (title && value) {
            this.createNote.next({ title, value, color});
        }

        this.reset();
        this.toggle(false);
    }

    // clear the inputs
    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: '#DB5ABA'
        };
    }


    toggle(value: boolean) {
        this.fullForm = value;
    }
}
