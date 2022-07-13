import time


class Ticket:
    """
    Ticket
    ---
    an object instance of an item that you will spend time
    resolving, designing, etc.
    Doesn't matter how unimportant it is, this is the building
    block of the rest of the application.
    """
    def __init__(self, ticket_data: dict = {}):
        if ticket_data.get('title'):
            self.title = ticket_data.get('title')
            self.description = ticket_data.get('description')
            self.log = ticket_data.get('log')
        else:
            self.title = 'Untitled'
            self.description = ''
            self.log = ''

    def update_description(self, description):
        self.description = description
        self.log_change('{UPDATE_DESCRIPTION}')

    def log_change(self, function_name: str):
        if self.log is None:
            self.log = ''

        self.log = self.log + time.strftime('[CW%U] %c' + ' :: ' + function_name)
