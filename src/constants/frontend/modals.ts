export const CREATE_EVENT_MODAL = {
  TITLE: 'Create Event',
  SUBMIT_LABEL: 'Create',
  ARIA_LABELLED_BY: 'create-event-title',
  ARIA_DESCRIBED_BY: 'Use this form to edit your event information',
};

export const UPDATE_EVENT_MODAL = {
  TITLE: 'Edit Event',
  SUBMIT_LABEL: 'Save',
  ARIA: {
    ROLE: 'dialog',
    LABELLED_BY: 'edit-event-title',
    DESCRIBED_BY: 'Use this form to create an event',
  },
};

export const DELETE_EVENT_MODAL = {
  TITLE: 'Delete Event?',
  WARNING:
    'This action cannot be undone. Are you sure you want to delete this event?',
  CANCEL: 'Cancel',
  CONFIRM: 'Delete',
  ARIA: {
    ROLE: 'dialog',
    LABELLED_BY: 'delete-event-title',
    DESCRIBED_BY: 'delete-event-description',
    CANCEL_LABEL: 'Cancel deletion',
    CONFIRM_LABEL: 'Confirm deletion',
  },
};
